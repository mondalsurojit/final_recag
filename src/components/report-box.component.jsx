import React from 'react';

const ReportBox = ({ title, linkText, reportComponent: ReportComponent, reportComponentHeight }) => {
    const ageGroups = [
        { label: '17 - 30 Years old', percentage: '62%', color: 'bg-primary' },
        { label: '31 - 50 Years old', percentage: '33%', color: 'bg-pending' },
        { label: '>= 50 Years old', percentage: '10%', color: 'bg-warning' }
    ];
    return (
        <div className="col-span-12 mt-8 sm:col-span-6 lg:col-span-3">
            <div className="intro-y flex h-10 items-center">
                <h2 className="mr-5 truncate text-lg font-medium">{title}</h2>
                <a className="ml-auto truncate text-primary" href="#"> {linkText} </a>
            </div>
            <div className="intro-y box mt-5 px-5 py-9">
                <div className="mt-3">
                    <ReportComponent reportComponentHeight={reportComponentHeight} />
                </div>
                <div className="mx-auto mt-8 w-52 sm:w-auto">
                    {ageGroups.map((group, index) => (
                        <div className="flex items-center mt-4" key={index}>
                            <div className={`mr-3 h-2 w-2 rounded-full ${group.color}`}></div>
                            <span className="truncate">{group.label}</span>
                            <span className="ml-auto font-medium">{group.percentage}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReportBox;
