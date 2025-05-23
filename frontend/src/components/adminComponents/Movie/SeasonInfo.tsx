import { useEffect, useRef, useState } from "react";
import { MovieFile, Season, TvSeries } from "../../apiCalls/types";
import { addSeasonsInfo } from "../apiCalls/postData";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCallApi } from "../../../redux/callApi";
import { useDispatch } from "react-redux";
type SeasonInfo = {
    seriesDetails: {
        title: string;
        order: number;
        url: string;
        label: string;
        movie_id: number;
    };
    editSeason: {
        season: Season;
        isEdit: Boolean;
    } | undefined;
    setEditSession: React.Dispatch<React.SetStateAction<{
        season: Season;
        isEdit: Boolean;
    } | undefined>>
}

const SeasonInfo: React.FC<SeasonInfo> = ({seriesDetails, editSeason, setEditSession}) =>{
    const [seasonInfo, setSeasonInfo] = useState<Season | undefined>()
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const dispatch = useDispatch()
    const callApi = useSelector((state: RootState) =>state.callApi);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name = e.target.id
        const value = e.target.value
        setSeasonInfo((obj) => ({...obj, [name]: value}));
    };

    useEffect(() =>{
        if(editSeason){
            const {season, isEdit} = editSeason;
            setSeasonInfo((info) =>({...info, isEdit, ...season, order_no: season.season_order }))
        }
    }, [editSeason]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const data =JSON.stringify({seriesDetails, seasonInfo});
        addSeasonsInfo(data).then((data)=>{
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
                                {seriesDetails?.title}
                            </h1>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 ">
                                <label htmlFor="season_name" className="form-label">Season Name</label>
                                <input type="text" onChange={handleInputChange} required value={seasonInfo?.season_name}
                                    className="form-control" id="season_name" placeholder="Season 1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="order_no" className="form-label">Order</label>
                                <input type="number" onChange={handleInputChange} required value={seasonInfo?.order_no}
                                    className="form-control" id="order_no" placeholder="1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="trailer_url" className="form-label">Season Trailer Url</label>
                                <input type="text" onChange={handleInputChange} required value={seasonInfo?.trailer_url}
                                    className="form-control" id="trailer_url" placeholder="https://japtech.africa/series/"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className={`${editSeason?.isEdit? "btn-warning " : "btn-primary "} btn  btn-sm`}>
                                {editSeason?.isEdit? "Edit": "Create"}
                            </button>
                            <button type="button" ref={btnRef} onClick={() => setEditSession(undefined)}
                                className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SeasonInfo;