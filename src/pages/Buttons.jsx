import React from 'react'
import { FaPlus } from "react-icons/fa";

export const Buttons = ({btnData}) => {
  // console.log(btnData);
  return (
    <div className='buttons'>
        <div className="button first" style={{backgroundColor:" #1e40ad "}}>
            <FaPlus className='plus-icon'/>
            <div className="button-content">{btnData?btnData.btn1:"New Dataset"}</div>
        </div>
        <div className="button second">
            <div className="button-content">Your Work</div>
        </div>
    </div>
  )
}
