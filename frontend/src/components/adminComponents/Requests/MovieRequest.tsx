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
    const title = "Movie Request";
    const dispatch = useDispatch();
    const [apistate, setApiState] = useState<MovieRequestRes[]>([]);
    const [rerendarApi, setRerendarApi] = useState(false);
    const [apicol, setApiCol] = useState<MovieRequestRes>();
    const [filterState, setFilterState] = useState('pending')
    const callApi = useSelector((state: RootState) =>state.callApi);
    const [requestedMovies, setRequestedMovies] = useState<MovieRequestRes[]>([]);

    const filter_apistate = apistate.filter((val) => {
        if(filterState !== "all"){
            return val.status === filterState;
        }else{
            return val;
        }
    })

    const columns = [
        { name: "Movie Name", selector: (row: MovieRequestRes) => row.movie_name, sortable: true },
        { name: "Type", selector: (row: MovieRequestRes) => row.movie_type, sortable: true },
        { name: "Description", selector: (row: MovieRequestRes) => row.description },
        { name: "Request Date", selector: (row: MovieRequestRes) => new Date(row.request_date).toLocaleDateString(), sortable: true },
        { name: "Client Name", selector: (row: MovieRequestRes) => row.name, sortable: true },
        { name: "Phone", selector: (row: MovieRequestRes) => row.phone, sortable: true },
        { name: "Apartment", selector: (row: MovieRequestRes) => row.apartment, sortable: true },
        { name: "Status", cell: (row: MovieRequestRes) => <>{
            <span className={`${row.status === "pending"? "text-warning ": 
                row.status === "inProgress"? "text-primary ":
                row.status === "uploaded"? "text-success ": "text-danger "
            } text-capitalize fs-6`}>{row.status}</span>
        }
        </>, sortable: true },
        { name: "Update Status", cell: (row: MovieRequestRes) => <>{
            <select onChange={(e) => handleStatusChange(e, row)} className="form-select" aria-label="Default select example">
                <option selected = {row.status === "pending"} value='pending'>Pending</option>
                <option selected = {row.status === "inProgress"} value='inProgress'>InProgress</option>
                <option selected = {row.status === "uploaded"} value='uploaded'>Uploaded</option>
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
                setRequestedMovies(data.details);
            }
        });
    }, [callApi]);

    const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>, row: MovieRequestRes) => {
        const status = e.target.value;
        const name = row.name; // Ensure you have `name` from `row`
        
        let message = "";
        if (status === "uploaded") {
            message = `Hi ${name}, your movie ${row.movie_name.toUpperCase()} is now available to enjoy at japtech.africa. Click the link below to access the movie directly. Thank you for choosing JAPTECH! \n`;
        } else if (status === "inProgress") {
            message = `Hi ${name}, your movie ${row.movie_name.toUpperCase()} has been partly uploaded. You can start enjoying at japtech.africa or you can click the link below to access the movie directly \n `;
        } else if (status === "cancelled") {
            message = `Hi ${name}, we regret to inform you that your movie ${row.movie_name.toUpperCase()} has been canceled. The main reason for canceling is that we were unable to find the movie. Thank you for choosing JAPTECH! \n`;
        }
    
        // Show confirmation dialog
        const { value: userMessage } = await Swal.fire({
            title: `Update ${row.movie_name} status to ${status}?`,
            text: "Kindly include the direct URL to the movie.",
            icon: "warning",
            input: "textarea",
            inputValue: message,
            inputLabel: "Message",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update"
        });
    
        // If user enters a message and confirms, update the status
        if (userMessage) {
            try {
                const data = JSON.stringify({ status, row, message: userMessage });
                const response = await updateRequestedMovieStatus(data);
    
                if (response.success) {
                    Swal.fire({
                        title: "Updated",
                        text: response.msg,
                        icon: "success"
                    });
                    dispatch(setCallApi(true));
                }
            } catch (error) {
                console.error("Error updating movie status:", error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to update movie status. Please try again.",
                    icon: "error"
                });
            }
        }
    };
    
   
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
                                        <div className="d-flex gap-2">
                                            {
                                                ["inProgress", 'pending', 'cancelled', 'all'].map((status, i) =>(
                                                    <div key={i} 
                                                    className={`btn btn-sm ${status === filterState? "btn-info ": "btn-primary "}`} 
                                                    onClick={()=>setFilterState(status)}>
                                                        {status}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {/* <div className="card-title text-center bg-warning py-2 rounded">All Data stored from the APK</div> */}
        
                                        <DataTable_Component search="movie status" title_btn="All Tv Series" title={title} apidata={filter_apistate} columns={apicol} />
        
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