import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import 'flowbite';

const SalesReport2 = ({ reportComponentHeight }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = new ApexCharts(chartRef.current, {
            series: [10, 15, 65],
            colors: ["#facc15", "#f97316", "#344d95"],
            chart: {
                height: reportComponentHeight,
                width: "100%",
                type: "donut",
            },
            stroke: {
                colors: ["#ffffff"],
                width: 4,
                lineCap: "square",
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: false,
                            name: {
                                show: false,
                                fontFamily: "Inter, sans-serif",
                                offsetY: 20,
                            },
                            total: {
                                showAlways: false,
                                show: true,
                                label: "Unique visitors",
                                fontFamily: "Inter, sans-serif",
                                formatter: function (w) {
                                    const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                    return '$' + sum + 'k';
                                },
                            },
                            value: {
                                show: true,
                                fontFamily: "Inter, sans-serif",
                                offsetY: -20,
                                formatter: function (value) {
                                    return value + "k";
                                },
                            },
                        },
                        size: "78%",
                    },
                },
            },
            grid: {
                padding: {
                    top: 0,
                },
            },
            labels: ["17 - 30 Years old", "31 - 50 Years old", ">= 50 Years old"],
            dataLabels: {
                enabled: false,
            },
            legend: false,
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "k";
                    },
                },
            },
            xaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "k";
                    },
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        });
        chart.render();

        // Initialize popovers and tooltips from Flowbite
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-popover-trigger]'));
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-tooltip-target]'));

        popoverTriggerList.map(function (popoverTriggerEl) {
            return new window.Popover(popoverTriggerEl);
        });

        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.Tooltip(tooltipTriggerEl);
        });

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className="max-w-sm w-full bg-white p-0 md:p-0">
            <div className="flex justify-between mb-0">
                <div className="flex justify-center items-center">
                </div>
            </div>
            <div className="py-0" ref={chartRef}></div>
        </div>
    );
}

export default SalesReport2;
