import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import 'flowbite';

const LineGraph = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current && typeof ApexCharts !== 'undefined') {
            const options = {
                chart: {
                    height: "75",
                    maxWidth: "100%",
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
                        opacityFrom: 0,
                        opacityTo: 0,
                        shade: "#1C64F2",
                        gradientToColors: ["#1C64F2"],
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 2,
                },
                grid: {
                    show: false,
                    strokeDashArray: 4,
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0
                    },
                },
                series: [
                    {
                        name: "# of Votes",
                        data: [0, 200, 250, 200, 500, 450, 850, 1050, 950, 1100, 900, 1200],
                        color: "#344d95",
                    },
                ],
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    show: false,
                },
            }

            const chart = new ApexCharts(chartRef.current, options);
            chart.render();

            // Cleanup function to destroy the chart when the component unmounts
            return () => {
                chart.destroy();
            };
        }
    }, []); // Empty dependency array ensures this runs only once after initial render

    return (
        <div className="md:max-w-28rem w-full bg-transparent p-0 md:p-0">
            <div id="area-chart" ref={chartRef}></div>
        </div>
    )
}

export default LineGraph;
