import React from 'react'
import './Modelpage/Models.css'
import { FaArrowRightLong } from "react-icons/fa6";

export const AnimatedCard = ({image, cardTitle}) => {
  return (
    <div className='imgless-card'>
         <figure>
            <img src={image} alt="images" />
        </figure>
        <div className="animated-card-content">
            <div className="animated-title">{cardTitle}</div>
            <div className="right-arrow">
                <FaArrowRightLong className='arrow-icon'/>
            </div>
        </div>       
    </div>
  )
}
