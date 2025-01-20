import Swal from "sweetalert2"
import { setCallApi } from "../../../redux/callApi"
import { useEffect, useState } from "react"
import { FaRegEdit } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../../redux/store"
import DataTable_Component from "../Data/DataTable"
import { getMovieRequests } from "../apiCalls/getData"
import { MovieRequestRes } from "../apiCalls/type"
import { updateRequestedMovieStatus } from "../apiCalls/patchData"

const MovieRequests = () =>{
    const title = "Movie Request"
    const [apistate, setApiState] = useState<MovieRequestRes[]>([])
    const [selectVal, setSelectval] = useState([])
    // pass status model render
    const [openModal, setOpenModal] = useState(true)
    // open update data modal
    const [open_update_modal, setOpen_update_modal] = useState({ render: true, modal_open: false })
    const [update_modal_data, setUpdate_modal_data] = useState('')
    const [rerendarApi, setRerendarApi] = useState(false)
  
    // open add data modal
    const [open_add_modal, setOpen_add_modal] = useState({ render: true, modal_open: false });
    const [apicol, setApiCol] = useState<MovieRequestRes>();
    const callApi = useSelector((state: RootState) =>state.callApi);
    const [requestedMovies, setRequestedMovies] = useState<MovieRequestRes[]>([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const filter_apistate = apistate.filter((val) => {
        return val.status !== "trash"
    })

    const columns = [
        { name: "Movie Name", selector: (row: MovieRequestRes) => row.movie_name, sortable: true },
        { name: "Type", selector: (row: MovieRequestRes) => row.movie_type, sortable: true },
        { name: "Description", selector: (row: MovieRequestRes) => row.description },
        { name: "Request Date", selector: (row: MovieRequestRes) => new Date(row.request_date).toLocaleDateString(), sortable: true },
        { name: "Client Name", selector: (row: MovieRequestRes) => row.name, sortable: true },
        { name: "Phone", selector: (row: MovieRequestRes) => row.phone, sortable: true },
        { name: "Apartment", selector: (row: MovieRequestRes) => row.apartment, sortable: true },
        { name: "Status", selector: (row: MovieRequestRes) => row.status, sortable: true },
        { name: "Update Status", cell: (row: MovieRequestRes) => <>{
            <select onChange={(e) => handleStatusChange(e, row)} className="form-select" aria-label="Default select example">
                <option selected = {row.status === "pending"} value='pending'>Pending</option>
                <option selected = {row.status === "inProgress"} value='inProgress'>InProgress</option>
                <option selected = {row.status === "uploaded"} value='completed'>Uploaded</option>
                <option selected = {row.status === "cancelled"} value='cancelled'>Cancel</option>
            </select>
        }</>,
    }];

    useEffect(() => {
        // call api and response data set " setApiData(your res.data) " and column setApiCol( columns )
        setApiState(requestedMovies) 
        setApiCol(columns)
    }, [rerendarApi, requestedMovies])

    useEffect(() =>{
        getMovieRequests( "").then((data) =>{
            if(data.success){
                console.log(data.details);
                setRequestedMovies(data.details);
            }
        });
    }, [callApi]);

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>, row: MovieRequestRes) =>{
        const status = e.target.value;
        Swal.fire({
            title: "Are you sure?",
            text: `Update ${row.movie_name} status to ${status}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update"
          }).then((result) => {
            if (result.isConfirmed) {
                const data = JSON.stringify({status, movie_request_id: row.movie_request_id })
                updateRequestedMovieStatus(data).then((data) =>{
                    if(data.success){
                        Swal.fire({
                          title: "Updated",
                          text: "Status updated successfully.",
                          icon: "success"
                        });
                    }
                })
            }
        });
    }
   
    return(
        <div className='bg-light w-100 px-2 py-4'>
                <h3>Movie Requests Management</h3>
                <div>
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
        
                                        <DataTable_Component search="name" title_btn="All Tv Series" title={title} apidata={filter_apistate} columns={apicol} />
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                </div>
        </div>
    )
}

export default MovieRequests