import { NavigateFunction } from "react-router-dom"
import { updateShowSubtitlesApi } from "../apiCalls/postData"
import { ActionCreatorWithPayload, Dispatch, UnknownAction } from "@reduxjs/toolkit";

export const handleShowSubtitles = (navigate: NavigateFunction, dispatch: Dispatch<UnknownAction>, 
    setCallApi: ActionCreatorWithPayload<any, "callApi/setCallApi">) =>{

    const data = JSON.stringify({id: 1});
    updateShowSubtitlesApi(data, navigate).then((data) =>{
        dispatch(setCallApi(false));
    });
}