//Not sure what is supposed to be here? link was kinda weird
import "./layout.css";
import React from "react";
import DenseAppBar from "./navbar";
import UseYourImagination from "./useScrollPosition";


 export default class ImageBgc extends React.Component {
    render(){
        return(
             <div className='ImageBgc'>
                <DenseAppBar></DenseAppBar>
                <UseYourImagination></UseYourImagination>
             </div>
        )
    }
    
}
