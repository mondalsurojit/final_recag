import React from 'react'
// import { BsThreeDotsVertical } from "react-icons/bs";
import dots from '../assets/v-threedots.svg'
import { GoTriangleUp } from "react-icons/go";

export const Cards = (data) => {
    const {image,title,desc1,time,use,size,desc3,rating,rating_title} = data;
  return (
    <div className='card transform transition-transform duration-300 hover:scale-105'>
        <figure>
            <img src={image} alt="images" />
        </figure>
        <div className="card-title">
            <div className="title-left">{title}</div>
            <div className="btn-right">
                <div className='dot-icon'>
                    <img src={dots} alt="dots" />
                </div>
            </div>
        </div>
        <div className="card-description">
            <div className="desc-1">
                <a href="/">{desc1}</a>{" . "} <span>{time}</span>
            </div>
            <div className="desc-2">
            <span>{use}</span>{" . "} <span>{size}</span>
            </div>
            <div className="desc-3">
                <span>{desc3}</span>
            </div>
        </div>
        <div className="rating-section">
        {rating?
               (<>
            <div className="rating">
                 <div className="rating-icon"><GoTriangleUp className='inc-icon'/></div>
                <div className="rating-number">{rating}</div>
            </div>
                </>):
                (
                    <div className="rating-title">{rating_title}</div>

                )}
            {rating?(
                <div className="user-logo"></div>):(
                    <div className="rating-time">{time}</div>
                )
            }
        </div>
    </div>
  )
}
