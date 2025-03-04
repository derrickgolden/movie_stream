import { useState, useEffect, useRef } from 'react'
import DataTable_Component from '../Data/DataTable'
import Update_data_modal from '../Data/UpdateDataModal'
// import Breadcrumb from '../Data/BreadCrumb'
// import Status_modal from '../Data/StatusModal'
// import Add_data_modal from '../Data/UpdateDataModal'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { server_baseurl } from '../../../baseUrl'
import { RootState } from '../../../redux/store'
import { getMoviesList } from '../../apiCalls/getData'
import { FaRegEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { baseUrl } from '../../Row/Row'
import { useNavigate } from 'react-router-dom'
import { MovieListDetails } from '../../../redux/movieList'
import { deleteMovieApi } from '../../apiCalls/updateData'
import { useDispatch } from 'react-redux'
import { setCallApi } from '../../../redux/callApi'
import { updateGenre } from '../apiCalls/patchData'

const AllMovies = () =>{
    const title = "All Movies";
    const [apistate, setApiState] = useState<MovieListDetails[]>([]);
    const [rerendarApi, setRerendarApi] = useState(false);

    const [apicol, setApiCol] = useState<MovieListDetails>();
    const callApi = useSelector((state: RootState) =>state.callApi);
    const [seriesList, setSeriesList] = useState<MovieListDetails[]>([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const filter_apistate = apistate.filter((val) => {
        return val.status !== "trash"
    })

    const columns = [
        { name: "ID", selector: (row: MovieListDetails) => row.video_id, sortable: true },
        { name: "Thumbnail", cell: (row: MovieListDetails) => <>{
            <img src={`${baseUrl}/${row.backdrop_path}`} style={{width: "100px", height: "60px"}} alt="" 
                className='my-1'
            />
        }</> },
        { name: "Title", selector: (row: MovieListDetails) => row.title, sortable: true },
        { name: "Credits Start", selector: (row: MovieListDetails) => row.credits_start, sortable: true },
        {
        name: "action", cell: (row: MovieListDetails) => <>{
            <span>
                <FaRegEdit role='button' onClick={() => manageMovies(row)}
                    className=" text-warning mx-1"  size={24}/>
                <FiDelete role='button' onClick={() => deleteMovie(row)}
                className=" text-danger mx-1"  size={24}/>
                <FaRegEdit role='button' onClick={() => updateGenre(row)}
                    className=" text-danger mx-1"  size={20}/>
            </span>
        }</>,
    }];

    useEffect(() => {
        // call api and response data set " setApiData(your res.data) " and column setApiCol( columns )
        setApiState(seriesList) 
        setApiCol(columns)
    }, [rerendarApi, seriesList])

    useEffect(() =>{
        const stringToken = sessionStorage.getItem('adminToken');
        getMoviesList("videos/get-movies", "", navigate, stringToken).then((data) =>{
            if(data.success){
                setSeriesList(data.details);
            }
        });
    }, [callApi]);

    const manageMovies = (row: MovieListDetails) =>{
        const state = [{...row, isEdit: true, url: row.video_url, order: row.file_order}];
        navigate("/admin/movie-upload", {state})
    }
    const deleteMovie = (row: MovieListDetails) =>{
        Swal.fire({
            title: `Are you sure you want to delete ${row.title}?`,
            showCancelButton: true,
            confirmButtonText: "Delete",
          }).then((result) => {
            if (result.isConfirmed) {
                deleteMovieApi(row.video_id).then((data) =>{
                    data.success?
                    Swal.fire("Movie deleted successfully"):
                    Swal.fire(data.msg);
                    dispatch(setCallApi(!callApi))
                });
            };
          });
    }
    return(
        <div className='bg-light w-100 px-2 py-4'>
            <h3>Movies Management</h3>
            <div>
                <div className="container-fluid" >
                    <div className="row my-3">
                        <div className="col-">
                            <div className="card" style={{ borderTop: "2px solid #4723d9" }}>
                                <div className="card-header d-flex 
                                justify-content-between border-bottom pb-1">
                                    <h4>{title}</h4>
                                </div>
                                <div className="card-body">
                                    <DataTable_Component 
                                        search="title"
                                        apidata={filter_apistate} 
                                        columns={apicol} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AllMovies;