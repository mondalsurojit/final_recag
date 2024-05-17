import React from 'react';

const RecentActivitiesCard = ({ profile, name, time, activity, images }) => {
    return (
        <div className="intro-x relative mb-3 flex items-center">
            <div className="before:absolute before:ml-5 before:mt-5 before:block before:h-px before:w-20 before:bg-slate-200 before:dark:bg-darkmode-400">
                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                    <img src={profile} alt="Midone - Tailwind Admin Dashboard Template" />
                </div>
            </div>
            <div className="box zoom-in ml-4 flex-1 px-5 py-3">
                <div className="flex items-center">
                    <div className="font-medium">
                        {name}
                    </div>
                    <div className="ml-auto text-xs text-slate-500">{time}</div>
                </div>
                <div className="text-slate-500">
                    <div className="mt-1">{activity}</div>
                    <div className="mt-2 flex">
                        {images.map((image, index) => (
                            <div key={index} data-placement="top" title={activity} className="tooltip cursor-pointer image-fit zoom-in mr-1 h-8 w-8"><img className="rounded-md border border-white" src={image} alt="Activity" /></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentActivitiesCard;