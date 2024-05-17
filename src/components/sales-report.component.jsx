import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import 'flowbite';

const SalesReport = () => {

    useEffect(() => {
        const options = {
            xaxis: {
                show: true,
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    show: true,
                    style: {
                        fontFamily: "Inter, sans-serif",
                        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                    }
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                show: true,
                labels: {
                    show: true,
                    style: {
                        fontFamily: "Inter, sans-serif",
                        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                    },
                    formatter: function (value) {
                        return '$' + value;
                    }
                }
            },
            series: [
                {
                    name: "Developer Edition",
                    data: [0,, 400, 560, 320, 600, 720, 850, 690, 805, 902, 1170],
                    color: "#1A56DB",
                },
                {
                    name: "Designer Edition",
                    data: [0, 250, 250, 200, 700, 550, 650, 1050, 950, 1100, 850, 1200],
                    color: "#7E3BF2",
                },
            ],
            chart: {
                sparkline: {
                    enabled: false
                },
                height: "242",
                width: "100%",
                type: "area",
                fontFamily: "Inter, sans-serif",
                dropShadow: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            tooltip: {
                enabled: true,
                x: {
                    show: false,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.55,
                    opacityTo: 0,
                    shade: "#1C64F2",
                    gradientToColors: ["#1C64F2"],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 1.5,
            },
            legend: {
                show: false,
            },
            grid: {
                show: false,
            },
        };

        const chartElement = document.getElementById("labels-chart");

        if (chartElement) {
            const chart = new ApexCharts(chartElement, options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, []);

    return (
        <div className="max-w-sm md:max-w-none md:max-w-28rem w-full">
            <div className="flex justify-between p-5 md:p-5 pb-0 md:pb-0">
                <div>
                </div>
            </div>
            <div id="labels-chart" className="px-2.5"></div>
        </div>
    );
};

export default SalesReport;
