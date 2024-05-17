import React from 'react'

const TransactionsCard = ({ name, imgUrl, alt, date, sales }) => {
  return (
    <div className="intro-x">
      <div className="box zoom-in mb-3 flex items-center px-5 py-3">
        <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
          <img src={imgUrl} alt={alt} />
        </div>
        <div className="ml-4 mr-auto">
          <div className="font-medium">{name}</div>
          <div className="mt-0.5 text-xs text-slate-500">
            {date}
          </div>
        </div>
        <div className={sales.includes("-") ? "text-danger" : "text-success"}>
          {sales}
        </div>
      </div>
    </div>
  )
}

export default TransactionsCard;