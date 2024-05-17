import React from 'react'

export const GridView = (data) => {
    const {title,time,subtitle,project,prerequisite,link,image} = data;
  return (
    <div className='grid-view transform transition-transform duration-300 hover:scale-105'>
        <div className="gridview-top-content">
            <h2 className="grid-title">{title}</h2>
            <img src={image} alt="images" width={50} />
        </div>       
        <div className="gridview-middle-content">
            <div className="grid-time">{time} {" . "} <span> {project}</span></div>
            <p className="grid-para">{subtitle}</p>
        </div>       
        <div className="gridview-bottom-content">
            {
                prerequisite?
                (<p className="grid-para">{prerequisite}</p>):
                (<p className="grid-para">
                    Builds on: <a href="/" className="lined">{link}</a>
                </p>)
            }
        </div>       
    </div>
  )
}
