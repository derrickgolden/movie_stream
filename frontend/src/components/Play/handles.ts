import { NavigateFunction } from "react-router-dom"
import { updateShowSubtitlesApi } from "../apiCalls/postData"
import { ActionCreatorWithPayload, Dispatch, UnknownAction } from "@reduxjs/toolkit";

type OverLayArg = {
    overlayTimeout: React.MutableRefObject<number | null>;
    setShow: React.Dispatch<React.SetStateAction<{
        overlay: boolean;
        subtitles: boolean;
        completed: boolean;
        episodes: boolean;
    }>>
}
export const handleShowSubtitles = (navigate: NavigateFunction, dispatch: Dispatch<UnknownAction>, 
    setCallApi: ActionCreatorWithPayload<any, "callApi/setCallApi">) =>{

    const data = JSON.stringify({id: 1});
    updateShowSubtitlesApi(data, navigate).then((data) =>{
        dispatch(setCallApi(false));
    });
}

export const resetOverlayTimeout = ({setShow, overlayTimeout}: OverLayArg) => {
    if (overlayTimeout.current) {
      clearTimeout(overlayTimeout.current);
    }
    overlayTimeout.current = setTimeout(() => {
      setShow((prev) => ({ ...prev, overlay: false }));
    }, 10000); // 10 seconds
};

// Function to show overlay on interaction
export const handleUserInteraction = ({setShow, overlayTimeout}: OverLayArg) => {
    setShow((prev) => ({ ...prev, overlay: true }));
    resetOverlayTimeout({setShow, overlayTimeout});
};