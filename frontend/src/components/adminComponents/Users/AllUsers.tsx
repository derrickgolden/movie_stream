import { useState, useEffect } from 'react'
import DataTable_Component from '../Data/DataTable'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { FaRegEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { deleteUser, getUsersList } from '../apiCalls/getData'
import { UserWatchStats } from '../apiCalls/type'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setCallApi } from '../../../redux/callApi';
import EditUserForm from './EditUserForm';
import { Modal } from "react-bootstrap";

const AllUsers= () =>{
    const title = "All Users"
    const [apistate, setApiState] = useState<UserWatchStats[]>([])
    const [rerendarApi, setRerendarApi] = useState(false)
    const [apicol, setApiCol] = useState([]);
    const callApi = useSelector((state: RootState) =>state.callApi);
    const [usersList, setUsersList] = useState<UserWatchStats[]>([]);
    const [search, setSearch] = useState('name')
    
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const dispatch = useDispatch();

    const columns = [
        { name: "Name", selector: (row: UserWatchStats) => row.name, sortable: true },
        { name: "Apartment", cell: (row: UserWatchStats) => row.apartment, sortable: true},
        { name: "Phone", selector: (row: UserWatchStats) => row.phone, sortable: true },
        { name: "Last Login", selector: (row: UserWatchStats) => row.last_login, sortable: true },
        { name: "Last Online", selector: (row: UserWatchStats) => row.last_watched_at, sortable: true },
        { name: "Watched Movies", selector: (row: UserWatchStats) => 
        <Link to={`/admin/${row.user_id}/watched-movies`} className="btn btn-outline-info">
            {row.total_watched}
        </Link> },
        {
        name: "action", cell: (row: UserWatchStats) => <>{
            <span>
                <FaRegEdit role='button' onClick={() => handleEditUser(row)}
                    className=" text-warning mx-1"  size={24}/>
                <FiDelete role='button' onClick={() => handleDeleteUser(row)}
                    className=" text-danger mx-1"  size={24}/>
            </span>
        }</>,
    }];

    useEffect(() => {
        setApiState(usersList); 
        setApiCol(columns);
    }, [rerendarApi, usersList]);

    useEffect(() =>{
        getUsersList().then((data) =>{
            if(data.success){
                setUsersList(data.details);
            }
        });
    }, [callApi]);

    const handleEditUser = (row: any) => {
        setSelectedUser(row);
        setShowEditModal(true);
    };

    const closeModal = () => {
        setShowEditModal(false);
        setSelectedUser(null);
    };
    
    const handleDeleteUser = (row: UserWatchStats) => {
        const data = JSON.stringify(row.user_id);

        Swal.fire({
            title: `Do you want to delete <span style="color: red; font-weight: bold">${row.name}</span>?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(data).then((res) => {
                    if (res.success) {
                        Swal.fire("Deleted!", res.msg, "success");
                        dispatch(setCallApi(!callApi));
                    } else {
                        Swal.fire("Error", res.msg, "error");
                    }
                });
            }
        });
    };

    return(
        <div className='bg-light w-100 px-2 py-4'>
            <h3>Management Users</h3>
            <div>
                <div className="container-fluid" >
                    <div className="row my-3">
                        <div className="col-12">
                            <div className="card" style={{ borderTop: "2px solid #4723d9" }}>
                                <div className="card-header d-flex justify-content-between border-bottom pb-1">
                                    <h4>{title}</h4>
                                    <div>
                                        <select onChange={(e) =>{setSearch(e.target.value)}} className="form-select" 
                                            aria-label="Default select example">
                                            <option value="name">Name</option>
                                            <option value="phone">Phone</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="card-body">

                                    <DataTable_Component search={search} apidata={apistate} columns={apicol} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={showEditModal} onHide={closeModal} size="lg" centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <EditUserForm
                        userData={selectedUser}
                        onClose={closeModal}
                        onSuccess={() => {
                        // Optionally refresh user list or show success message
                        closeModal();
                        }}
                    />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
};

export default AllUsers