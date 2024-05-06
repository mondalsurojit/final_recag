import React from 'react'

export const GridView2 = (data) => {
    const {title,subtitle,image} = data;
  return (
    <div className='grid-view second'>
        <div className="gridview-top-content">
            <h2 className="grid-title">{title}</h2>
            <img src={image} alt="images" width={50} />
        </div>       
        <div className="gridview-middle-content">
            <p className="grid-para">{subtitle}</p>
        </div>         
    </div>
  )
}
