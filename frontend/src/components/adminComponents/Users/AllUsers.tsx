import { useState, useEffect, useRef } from 'react'
import DataTable_Component from '../Data/DataTable'
import Update_data_modal from '../Data/UpdateDataModal'
// import Breadcrumb from '../Data/BreadCrumb'
// import Status_modal from '../Data/StatusModal'
// import Add_data_modal from '../Data/UpdateDataModal'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { RootState } from '../../../redux/store'
import { FaRegEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'
import { deleteSeriesApi } from '../../apiCalls/updateData'
import { useDispatch } from 'react-redux'
import { setCallApi } from '../../../redux/callApi'
import { getUsersList } from '../apiCalls/getData'
import { UserWatchStats } from '../apiCalls/type'

const AllUsers= () =>{
    const title = "All Users"
    const [apistate, setApiState] = useState<UserWatchStats[]>([])
    // pass status model render
    const [openModal, setOpenModal] = useState(true)
    // open update data modal
    const [open_update_modal, setOpen_update_modal] = useState({ render: true, modal_open: false })
    const [update_modal_data, setUpdate_modal_data] = useState('')
    const [rerendarApi, setRerendarApi] = useState(false)
    {/* all data for view */ }
    const [selectVal_details, setSelectVal_details] = useState([])
    {/* see all details modal(view) */ }
    const [details_modal_show, set_details_modal_Show] = useState(false);
    // open add data modal
    const [open_add_modal, setOpen_add_modal] = useState({ render: true, modal_open: false });
    const [apicol, setApiCol] = useState([]);
    const callApi = useSelector((state: RootState) =>state.callApi);
    const [usersList, setUsersList] = useState<UserWatchStats[]>([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const columns = [
        { name: "Name", selector: (row: UserWatchStats) => row.name, sortable: true },
        { name: "Apartment", cell: (row: UserWatchStats) => row.apartment, sortable: true},
        { name: "Phone", selector: (row: UserWatchStats) => row.phone, sortable: true },
        { name: "Last Login", selector: (row: UserWatchStats) => row.last_login, sortable: true },
        { name: "Last Online", selector: (row: UserWatchStats) => row.last_watched_at, sortable: true },
        { name: "Watched Movies", selector: (row: UserWatchStats) => row.total_watched, sortable: true },
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
                console.log(data.details);
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
                                {/* <div className="btn btn-info btn-sm " onClick={setStoreBtn}>Add store data</div> */}
                            </div>
                            <div className="card-body">
                                {/* <div className="card-title text-center bg-warning py-2 rounded">All Data stored from the APK</div> */}

                                <DataTable_Component search="name" title_btn="User Details" title={title} apidata={apistate} columns={apicol} />

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