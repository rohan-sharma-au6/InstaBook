import React,{useContext} from 'react';
import UploadMedia from "./Upload"
import UploadStory from "./UploadStory"
import {ThemeContext} from "../contexts/ThemeContext"


const UploadMain = () => {
    
    return (
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <UploadMedia/>
            <UploadStory/>
            
        </div>
    );
};

export default UploadMain;