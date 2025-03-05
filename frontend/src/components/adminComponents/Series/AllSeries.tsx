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
import { getSeriesList } from '../../apiCalls/getData'
import { SeriesListDetails } from '../../../redux/seriesList'
import { FaRegEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { baseUrl } from '../../Row/Row'
import { useNavigate } from 'react-router-dom'
import { deleteSeriesApi } from '../../apiCalls/updateData'
import { useDispatch } from 'react-redux'
import { setCallApi } from '../../../redux/callApi';
import { updateGenre } from '../apiCalls/patchData';

const AllSeries = () =>{
    const title = "All Tv Series"
    const [apistate, setApiState] = useState<SeriesListDetails[]>([]);
    const [rerendarApi, setRerendarApi] = useState(false);
    const [apicol, setApiCol] = useState([]);
    const callApi = useSelector((state: RootState) =>state.callApi);
    const [seriesList, setSeriesList] = useState<SeriesListDetails[]>([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const filter_apistate = apistate.filter((val) => {
        return val.status !== "trash"
    })

    const columns = [
        { name: "ID", selector: (row: SeriesListDetails) => row.video_id, sortable: true },
        { name: "Thumbnail", cell: (row: SeriesListDetails) => <>{
            <img src={`${baseUrl}/${row.backdrop_path}`} style={{width: "100px", height: "60px"}} alt="" 
                className='my-1'
            />
        }</> },
        { name: "Title", selector: (row: SeriesListDetails) => row.title, sortable: true },
        { name: "Seasons", selector: (row: SeriesListDetails) => row.seasons.length, sortable: true },
        {
        name: "action", cell: (row: SeriesListDetails) => <>{
            <span>
                <FaRegEdit role='button' onClick={() => manageSeasonsEpisodes(row)}
                    className=" text-warning mx-1"  size={24} />
                <FiDelete role='button' onClick={() => handleDeleteSeries(row)}
                    className=" text-danger mx-1"  size={24} />
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
        getSeriesList("videos/get-series", "", navigate, stringToken).then((data) =>{
            if(data.success){
                setSeriesList(data.details);
            }
        });
    }, [callApi]);

    const manageSeasonsEpisodes = (row: SeriesListDetails) =>{
        const state = [{...row, movie_id: row.video_id}];
        navigate("/admin/seasons-manage", {state});
    };

     const handleDeleteSeries = (series: SeriesListDetails) =>{
            Swal.fire({
                title: `Are you sure you want to delete ${series.title}?`,
                text: "All seasons and episodes related to the series will be deleted!",
                showCancelButton: true,
                confirmButtonText: "Delete",
              }).then((result) => {
                if (result.isConfirmed) {
                    deleteSeriesApi(series.video_id).then((data) =>{
                        if(data.success){
                            Swal.fire("Season deleted successfully")
                            dispatch(setCallApi(!callApi));
                        }else{
                            Swal.fire(data.msg);
                        }
                    });
                };
            });
        }

    return(
        <div className='bg-light w-100 px-2 py-4'>
            <h3>Tv Series Management</h3>
            <div>
            <div className="container-fluid" >
                <div className="row my-3">
                    <div className="col-12">
                        <div className="card" style={{ borderTop: "2px solid #4723d9" }}>
                            <div className="card-header d-flex justify-content-between border-bottom pb-1">
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

export default AllSeries;