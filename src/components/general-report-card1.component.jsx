import React from 'react';
import SalesReport2 from './sales-report2.component';

const GeneralReportCard1 = ({ heading, subheading, percentage }) => {
    return (
        <div className="intro-y col-span-12 sm:col-span-6 2xl:col-span-3">
            <div className="box zoom-in p-5">
                <div className="flex items-center">
                    <div className="w-2/4 flex-none">
                        <div className="truncate text-lg font-medium">{heading}</div>
                        <div className="mt-1 text-slate-500">{subheading}</div>
                    </div>
                    <div className="relative ml-auto flex-none">
                        <div className="w-[90px] h-[90px]">
                            {/* <canvas className="chart report-donut-chart-1"></canvas> */}
                            <SalesReport2 reportComponentHeight={130} />
                        </div>
                        <div className="absolute left-1 top-2 flex h-full w-full items-center justify-center font-medium">
                            {percentage}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralReportCard1;