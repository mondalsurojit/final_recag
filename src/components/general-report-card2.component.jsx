import React from 'react';
import LineGraph from './line-graph.component';

const GeneralReportCard2 = ({ heading, subheading }) => {
    return (
        <div className="intro-y col-span-12 sm:col-span-6 2xl:col-span-3">
            <div className="box zoom-in p-5">
                <div className="flex">
                    <div className="mr-3 truncate text-lg font-medium">
                        {heading}
                    </div>
                    <div className="ml-auto flex cursor-pointer items-center truncate rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-darkmode-400">
                        {subheading}
                    </div>
                </div>
                <div className="mt-2">
                    <div className="w-auto h-[58px]">
                        {/* <canvas className="chart simple-line-chart-1 -ml-1"></canvas> */}
                        <LineGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralReportCard2;