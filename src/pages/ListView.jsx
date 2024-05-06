import React from 'react'

export const ListView = (data) => {
    const {title,subtitle,image} = data;
  return (
    <div className='list-view'>
        <div className="list-view-image">
            <img src={image} alt="listImg" />
        </div>
        <div className="list-view-content">
            <div className="list-view-title">{title}</div>
            <div className="list-view-para">{subtitle}</div>
        </div>
    </div>
  )
}
