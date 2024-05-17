import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import 'flowbite';

// Pavan Thakur says:
// https://youtu.be/2V1WK-3HQNk?si=8303yaxFD0x3MaX9

const WeeklyTop = () => {

    useEffect(() => {
        let chart = null; // Define chart variable
        if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
            chart = new ApexCharts(document.getElementById("pie-chart"), getChartOptions());
            chart.render();
        }

        // Clean up function
        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    }, []);

    const getChartOptions = () => {
        return {
            series: [10, 15, 65],
            colors: ["#facc15", "#f97316", "#344d95"],
            chart: {
                height: 200,
                width: "100%",
                type: "pie",
            },
            stroke: {
                colors: ["white"],
                width: 4,
                lineCap: "square",
            },
            plotOptions: {
                pie: {
                    labels: {
                        show: true,
                    },
                    size: "100%",
                    dataLabels: {
                        offset: -25
                    }
                },
            },
            labels: ["17 - 30 Years old", "31 - 50 Years old", ">= 50 Years old"],
            dataLabels: {
                enabled: false,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
            },
            legend: false,
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            },
            xaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "%"
                    },
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        }
    }

    return (
        <div>
            <div className="max-w-sm w-full p-0 md:p-0">
                <div className="flex justify-between items-start w-full">
                    <div className="flex-col items-center">
                        <div className="flex items-center mb-0">
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                    </div>
                </div>
                <div className="py-0" id="pie-chart"></div>
            </div>
        </div>
    )
}

export default WeeklyTop;
