import { ArrowDownNarrowWide, BellRing, Search } from 'lucide-react'
import React, { useState } from 'react'
import profile4 from "../image/fakers/profile-4.jpg"
import Simplemenu from '../Dashboard/Simplemenu'
import Hugcard from '../Hugcard'


function TopRequiredDataset() {


    const [buttonStates, setButtonStates] = useState({});
    const handle = (itemId) => {

        setButtonStates((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId] || false,
        }));
    };


    const data = [
        {
            id: 1,
            title: "All datasets"
        },
        {
            id: 2,
            title: "Computer Science"
        },
        {
            id: 3,
            title: "Education"
        },
        {
            id: 4,
            title: "Classification"
        },
        {
            id: 5,
            title: "Computer Vision"
        },
        {
            id: 6,
            title: "NLP"
        },
        {
            id: 7,
            title: "Data Visualization"
        },
        {
            id: 8,
            title: "Pre-Trained Model"
        }
    ];



    const recentData = [
        {
            id: 1,
            title: "microsoft/orca-math-word-problems-200k",
            days: "7",
            download: "1.76k",
            likes: "25"
        },
        {
            id: 2,
            title: "microsoft/orca-math-word-problems-200k",
            days: "7",
            download: "1.76k",
            likes: "25"
        },
        {
            id: 3,
            title: "microsoft/orca-math-word-problems-200k",
            days: "7",
            download: "1.76k",
            likes: "25"
        },
        {
            id: 4,
            title: "microsoft/orca-math-word-problems-200k",
            days: "7",
            download: "1.76k",
            likes: "25"
        },
        {
            id: 5,
            title: "microsoft/orca-math-word-problems-200k",
            days: "7",
            download: "1.76k",
            likes: "25"
        },
        {
            id: 6,
            title: "microsoft/orca-math-word-problems-200k",
            days: "7",
            download: "1.76k",
            likes: "25"
        },
        {
            id: 7,
            title: "microsoft/orca-math-word-problems-200k",
            days: "7",
            download: "1.76k",
            likes: "25"
        },
        {
            id: 8,
            title: "microsoft/orca-math-word-problems-200k",
            days: "7",
            download: "1.76k",
            likes: "25"
        }
    ]


    return (
        <div>

            <div className="flex sm:m-8 m-2">
                <Simplemenu />
                <section className={`model das`} style={{ overflow: 'scroll', width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px", padding: "0 2rem", height: "100vh" }}>
                    <div className='sticky top-0 z-50' style={{ padding: "0 2rem", backgroundColor: "#f1f5f9" }}>
                        <div className="mt-8 p-1 mb-0">
                            <div className="model-section">
                                <div className="top-section">

                                    {/* <!-- BEGIN: Top Bar --> */}
                                    <div className="relative z-[51] flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-10px", padding: "0 10px", zIndex: "0" }}>

                                        {/* <!-- BEGIN: Breadcrumb --> */}
                                        <div aria-label="breadcrumb" className=" -intro-x mr-auto hidden sm:flex">
                                            <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                                <li className="">
                                                    <a href="/">Application</a>
                                                </li>
                                                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                    <a href="/">Dataset</a>
                                                </li>
                                                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                    <a href="/">Trending Dataset</a>
                                                </li>
                                            </ol>
                                        </div>
                                        {/* <!-- END: Breadcrumb --> */}

                                        {/* <!-- BEGIN: Search --> */}
                                        <div className="search intro-x relative mr-3 sm:mr-6" style={{ backgroundColor: "#f1f5f9" }}>
                                            <div className="relative hidden sm:block">
                                                <input data-tw-merge="" type="text" placeholder="Search..." className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70" />
                                                <i data-tw-merge="" data-lucide="search" className="stroke-1.5 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600 dark:text-slate-500"><Search style={{ marginTop: "-3" }} /></i>
                                            </div>
                                        </div>

                                        {/* <!-- BEGIN: Notifications --> */}
                                        <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative intro-x mr-auto sm:mr-6">
                                            <div data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer relative block text-slate-600 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"><i data-tw-merge="" data-lucide="bell" className="stroke-1.5 w-5 h-5 dark:text-slate-500"><BellRing /></i></div>
                                        </div>

                                        <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg"><img src={profile4} alt="Midone - Tailwind Admin Dashboard Template" />
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex mb-6'>
                            <div className="overflow-x-auto flex items-center">
                                <span className="bg-darkblue-100 mr-3 hover:bg-blue-600 text-white font-semibold flex items-center px-4 py-2" style={{ borderRadius: "20px" }}>
                                    <ArrowDownNarrowWide className="w-5 h-5 mr-1" />
                                    Filters
                                </span>

                                <div className="codebutton cursor-pointer flex flex-row gap-4 text-[14px]" style={{ maxHeight: "90px", overflowX: "auto" }}>
                                    {data.map((data) => (
                                        <div onClick={() => handle(data.id)}
                                            style={{ borderRadius: "16px" }}
                                            className={`text-sm font-normal border border-gray-400 whitespace-nowrap px-3 py-2 ${buttonStates[data.id] ? 'bg-darkblue-100 text-white' : 'bg-white text-black'}`} key={data.id}>
                                            {data.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[100rem] ">
                        <div className="hugc flex flex-row flex-wrap justify-evenly">
                            {
                                recentData.map((data) => {
                                    return (
                                        <Hugcard key={data.id}{...data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default TopRequiredDataset