import { useRef, useState } from "react";
import { MovieFile } from "../../apiCalls/types";
import { addSeasonsInfo } from "../../apiCalls/postData";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCallApi } from "../../../redux/callApi";
import { useDispatch } from "react-redux";

const SeasonInfo: React.FC<{seriesDetails: MovieFile}> = ({seriesDetails}) =>{
    const [seasonInfo, setSeasonInfo] = useState({})
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const dispatch = useDispatch()
    const callApi = useSelector((state: RootState) =>state.callApi);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name = e.target.id
        const value = e.target.value
        setSeasonInfo((obj) => ({...obj, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const data =JSON.stringify({seriesDetails, seasonInfo});
        addSeasonsInfo(data).then((data)=>{
            // console.log(data);
            if(data.success){
                dispatch(setCallApi(!callApi));
                btnRef.current ? btnRef.current.click() : null;
            } 
        })
    }
    return(
        <div className="modal fade" id="seasonInfoModal" tabIndex={-1} aria-labelledby="seasonInfoModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="seasonInfoModalLabel">
                                {seriesDetails.title}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="season_name" className="form-label">Season Name</label>
                                <input type="text" onChange={handleInputChange} required
                                    className="form-control" id="season_name" placeholder="Season 1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="order_no" className="form-label">Order</label>
                                <input type="number" onChange={handleInputChange} required
                                    className="form-control" id="order_no" placeholder="1"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary btn-sm">Create</button>
                            <button type="button" ref={btnRef}
                                className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SeasonInfo;