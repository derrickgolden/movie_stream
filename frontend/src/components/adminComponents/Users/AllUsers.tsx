import { useState, useEffect, useRef } from 'react'
import DataTable_Component from '../Data/DataTable'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { FaRegEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { getUsersList } from '../apiCalls/getData'
import { UserWatchStats } from '../apiCalls/type'
import { Link } from 'react-router-dom';

const AllUsers= () =>{
    const title = "All Users"
    const [apistate, setApiState] = useState<UserWatchStats[]>([])
    const [rerendarApi, setRerendarApi] = useState(false)
    const [apicol, setApiCol] = useState([]);
    const callApi = useSelector((state: RootState) =>state.callApi);
    const [usersList, setUsersList] = useState<UserWatchStats[]>([]);
    const [search, setSearch] = useState('name')

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
                <FaRegEdit role='button' onClick={() => () =>(row)}
                    className=" text-warning mx-1"  size={24}/>
                <FiDelete role='button' onClick={() => () =>(row)}
                    className=" text-danger mx-1"  size={24}/>
            </span>
        }</>,
    }];

    useEffect(() => {
        // call api and response data set " setApiData(your res.data) " and column setApiCol( columns )
        setApiState(usersList) 
        setApiCol(columns)
    }, [rerendarApi, usersList])

    useEffect(() =>{
        getUsersList().then((data) =>{
            if(data.success){
                setUsersList(data.details);
            }
        });
    }, [callApi]);

    return(
        <div className='bg-light w-100 px-2 py-4'>
            <h3>Management Users</h3>
            <div>
                 {/* status modal component */}
            {/* <Status_modal rerendar={(e) => rerender_status(e)} row={selectVal} openModal={openModal} />  */}
            {/* add data modal */}
            {/* <Add_data_modal rerendar={(e) => rerender(e)} openAddDataModal={open_add_modal} /> */}
            {/* add data modal */}
            {/* <Update_data_modal rerendar={(e) => rerender_update(e)} 
                select_data={update_modal_data} open_update_data_modal={open_update_modal}
                data_type = "usersDetails" 
            /> */}
            <div className="container-fluid" >
                {/* <Breadcrumb title={title} brad={brad} /> */}

                <div className="row my-3">
                    <div className="col-12">
                        <div className="card" style={{ borderTop: "2px solid #4723d9" }}>
                            <div className="card-header d-flex justify-content-between border-bottom pb-1">
                                <h4>{title}</h4>
                                <div>
                                    <select onChange={(e) =>{setSearch(e.target.value)}} className="form-select" aria-label="Default select example">
                                        <option value="name">Name</option>
                                        <option value="phone">Phone</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-body">
                                {/* <div className="card-title text-center bg-warning py-2 rounded">All Data stored from the APK</div> */}

                                <DataTable_Component search={search} apidata={apistate} columns={apicol} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
};

export default AllUsers