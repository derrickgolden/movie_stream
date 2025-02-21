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

const AllMovies = () =>{
    const title = "All Movies"
    const [apistate, setApiState] = useState<MovieListDetails[]>([])
    const [selectVal, setSelectval] = useState([])
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

                                <DataTable_Component search="name" title_btn="All Tv Series" title={title} apidata={filter_apistate} columns={apicol} />

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