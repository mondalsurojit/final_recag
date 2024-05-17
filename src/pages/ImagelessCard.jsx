import React from 'react'
import './Modelpage/Models.css'
// import { BsThreeDotsVertical } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";

export const ImagelessCard = () => {
    // const {image,title,desc1,time,use,size,desc3,rating} = data;
  return (
    <div className='imgless-card transform transition-transform duration-300 hover:scale-105'>
        <a href="/" className='card-link'>
            <div className="card-data">
                <div className="imglesscard-title">Gemini API
                </div>
                <div>
                    <span className="imglesscard-subtitle">Google</span>
                </div>
                <div>
                    <span className="variants">2 Variation . 24 Notebooks</span>
                </div>
                <div className="imglesscard-para">A new family of multimodal models from Google DeepMin
                </div>
            </div>
        </a>
        <div className="model-rating-section">
            <div className="model-rating">
                <div className="model-rating-icon"><GoTriangleUp className='inc-icon'/></div>
                <div className="model-rating-number">12</div>
            </div>
            <div className="model-user-logo"></div>
        </div>
       
    </div>
  )
}
