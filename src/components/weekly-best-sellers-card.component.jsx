import React from 'react';

const WeeklyBestSellersCard = ({ name, imgUrl, alt, date, sales}) => {
    return (
        <div className="intro-y">
            <div className="box zoom-in mb-3 flex items-center px-4 py-4">
                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-md">
                    <img src={imgUrl} alt={alt} />
                </div>
                <div className="ml-4 mr-auto">
                    <div className="font-medium">{name}</div>
                    <div className="mt-0.5 text-xs text-slate-500">
                        {date}
                    </div>
                </div>
                <div className="cursor-pointer rounded-full bg-success px-2 py-1 text-xs font-medium text-white">
                    {sales}
                </div>
            </div>
        </div>
    )
}

export default WeeklyBestSellersCard;