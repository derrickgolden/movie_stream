import { NavigateFunction } from "react-router-dom"
import { updateShowSubtitlesApi } from "../apiCalls/postData"
import { ActionCreatorWithPayload, Dispatch, UnknownAction } from "@reduxjs/toolkit";

type OverlayHandlerArg ={
    setShow: React.Dispatch<React.SetStateAction<{
        overlay: boolean;
        subtitles: boolean;
        completed: boolean;
        episodes: boolean;
    }>>;
    overlayTimeout: React.MutableRefObject<number | null>;
}

export const handleShowSubtitles = (navigate: NavigateFunction, dispatch: Dispatch<UnknownAction>, 
    setCallApi: ActionCreatorWithPayload<any, "callApi/setCallApi">) =>{

    const data = JSON.stringify({id: 1});
    updateShowSubtitlesApi(data, navigate).then((data) =>{
        dispatch(setCallApi(false));
    });
}

export const handleUserInteraction = ({setShow, overlayTimeout}: OverlayHandlerArg) => {
    setShow((prev) => ({ ...prev, overlay: true })); // Show overlay
    resetOverlayTimeout({setShow, overlayTimeout}); // Restart timer
};

export const resetOverlayTimeout = ({setShow, overlayTimeout}: OverlayHandlerArg) => {
    if (overlayTimeout.current) {
      clearTimeout(overlayTimeout.current);
    }
    overlayTimeout.current = setTimeout(() => {
      setShow((prev) => ({ ...prev, overlay: false }));
    }, 10000); // 10 seconds
  };