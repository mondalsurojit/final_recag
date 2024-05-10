import React, { useContext, useState } from 'react'
import "./Code.css"
import { SearchBar } from '../SearchBar'
import { Buttons } from '../Buttons'
import img1 from "../../assets/code-img1.svg"
import { FilterSearchBar } from '../FilterSearchBar'
import { Cards } from '../Cards'

import { MdOutlineInsights } from "react-icons/md";
import { GoTag } from "react-icons/go";

import img2 from '../../assets/code-img2.jpeg'
import img3 from '../../assets/code-img3.png'
import img4 from '../../assets/code-img4.png'
import img5 from '../../assets/code-img5.png'
import img6 from '../../assets/exercisedataset-img1.png'
import img7 from '../../assets/exercisedataset-img2.jpg'
import img8 from '../../assets/exercisedataset-img4.jpeg'

import "../css/vendors/tippy.css"
import "../css/vendors/litepicker.css"
import "../css/vendors/tiny-slider.css"
import "../css/themes/rubick/side-nav.css"
import "../css/vendors/leaflet.css"
import "../css/vendors/simplebar.css"
import "../css/components/mobile-menu.css"
import "../css/app.css"


// import Slidebar from "../../components/Slidebar"
// import sidebar from "../../layout/MainLayout/Sidebar/index"
import { AppContext } from '../context/context';
// import Sidebar from '../../layout/MainLayout/Sidebar/index'
// import Header from '../../layout/MainLayout/Header'
// import So from '../So'
import Simplemenu from '../Dashboard/Simplemenu'
import Mobilemenu from '../Dashboard/Mobilemenu'
import profile4 from "../image/fakers/profile-4.jpg"
import { ArrowDownNarrowWide, BellRing, Search } from 'lucide-react'


function Code() {



    const [buttonStates, setButtonStates] = useState({});
    const handle = (itemId) => {

        setButtonStates((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId] || false,
        }));
    };


    const { pos } = useContext(AppContext);

    const btnData = [
        { btn1: "New Notebook" },
        { searchData: "Search public notebooks" }
    ]

    const data = [
        {
            id: 1,
            title: "All notebooks"
        },
        {
            id: 2,
            title: "Recently Viewed"
        },
        {
            id: 3,
            title: "Python"
        },
        {
            id: 4,
            title: "R"
        },
        {
            id: 5,
            title: "Beginner"
        },
        {
            id: 6,
            title: "NLP"
        },
        {
            id: 7,
            title: "Random Forest"
        },
        {
            id: 8,
            title: "GPU"
        },
        {
            id: 9,
            title: "TPU"
        },
        {
            id: 10,
            title: "Competition notebook"
        },
        {
            id: 11,
            title: "Scheduled notebook"
        }
    ];
    const trendingCode = [
        {
            id: 1, rating: 18,
            image: img2,
            title: "Crime",
            desc1: "Updated 9 hours ago",
            use: 'Crime in Los Angeles Data from 2020 to Present',
        },
        {
            id: 2, rating: 18,
            image: img3,
            title: "Crime",
            desc1: "Updated 9 hours ago",
            use: 'Crime in Los Angeles Data from 2020 to Present',
        },
        {
            id: 3, rating: 12,
            image: img4,
            title: "Crime",
            desc1: "Updated 9 hours ago",
            use: 'Crime in Los Angeles Data from 2020 to Present',
        },
        {
            id: 4, rating: 18,
            image: img5,
            title: "Crime",
            desc1: "Updated 9 hours ago",
            use: 'Crime in Los Angeles Data from 2020 to Present',
        },
    ]
    const exerciseData = [
        {
            id: 1, rating: 8,
            image: img6,
            title: "Factors influencing US House Prices",
            desc1: "Jyotsna Gurjar",
            time: 'Updated a day ago',
            use: 'Usability 7.6',
            size: '8 kB',
            desc3: '1 File (CSV)'
        },
        {
            id: 2, rating: 18,
            image: img7,
            title: "Online Retail Transaction Records",
            desc1: "The Devastator",
            time: 'Updated 2 days ago',
            use: 'Usability 7.1',
            size: '9 MB',
            desc3: '1 File (CSV)'
        },
        {
            id: 3, rating: 12,
            image: img7,
            title: "SXSW 2019 Schedule Dataset",
            desc1: "The Devastator",
            time: 'Updated 4 days ago',
            use: 'Usability 10.0',
            size: '2 MB',
            desc3: '3 File (CSV,other)'
        },
        {
            id: 4, rating: 18,
            image: img8,
            title: "Heart Failure Prediction",
            desc1: "Bhavik Jikadara",
            time: 'Updated 4 days ago',
            use: 'Usability 8.8',
            size: '4 kB',
            desc3: '1 File (CSV)'
        },
    ]

    return (
        <div>
            <Mobilemenu />
            <div className="flex sm:m-8 m-2">

                {/* <div className="flex"> */}
                <Simplemenu style={{ color: "#fff" }} />
                <section className={`code das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", background: "#f1f5f9", borderRadius: "15px", padding: "1rem 2rem" }}>
                    {/* <Header /> */}
                    <div className="container">
                        <div className="code-section">
                            <div className="top-section">



                                {/* <!-- BEGIN: Top Bar --> */}
                                <div className="relative z-[51] flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-18px", padding: "0 10px", zIndex: "0" }}>

                                    {/* <!-- BEGIN: Breadcrumb --> */}
                                    <div aria-label="breadcrumb" className=" -intro-x mr-auto hidden sm:flex">
                                        <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                            <li className="">
                                                <a href="/">Application</a>
                                            </li>
                                            <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                <a href="/">Code</a>
                                            </li>
                                        </ol>
                                    </div>
                                    {/* <!-- END: Breadcrumb --> */}


                                    {/* <!-- BEGIN: Search --> */}
                                    <div className="search intro-x relative mr-3 sm:mr-6" style={{ backgroundColor: "#f1f5f9" }}>
                                        <div className="relative hidden sm:block" >
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
                                <div className="code-details">
                                    <div className="code-content">
                                        <h1 className="main-title">Code</h1>
                                        <p className="code-para">Explore, analyze, and share quality data. Learn more about data types, creating, and collaborating.</p>
                                        <Buttons btnData={btnData[0]} />
                                    </div>
                                    <div className="code-image">
                                        <img src={img1} alt="logo-1" width={220} height={170} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='container'>
                        <div className="trending-section">
                            <div className="flex justify-between">
                                <div className="trending-logo">
                                    <MdOutlineInsights className="timeline-icon" />
                                    <h1 className="trending-title">Trending</h1>
                                </div>
                                <div className="trending-side-data">See All</div>
                            </div>

                            <div className='flex mb-6'>
                                {/* <span className='flex items-center  mr-3' style={{padding:"6px 12px" ,backgroundColor: "#1e40ad", color: "white", fontSize: "14px" , borderRadius:"16px" }}><ArrowDownNarrowWide size={16}/><span className='ml-2'>Filters</span> </span> */}


                                {/* <div className=""> */}

                                    <div className="filter-section">


                                        <div className="option-section">
                                            <span
                                                className="bg-darkblue-100 mr-3 hover:bg-blue-600 text-white font-[600] flex justify-center items-center"

                                                style={{ borderRadius: "20px", padding: "0px 16px 0px 12px" }}
                                            >
                                                <ArrowDownNarrowWide /> <span className='ml-2  text-[14px]'>Filters</span>
                                            </span>
                                            {

                                                data.map
                                                    ((data) => {
                                                        return (
                                                            <div onClick={() => handle(data.id)}
                                                                className={`options text-[14 px] font-[400] border border-gray-400  ${buttonStates[data.id] ? 'bg-darkblue-100 text-white ' : 'bg-white text-black'}`} key={
                                                                    data.id
                                                                }>{data.title}
                                                            </div>
                                                        )
                                                    })
                                            }
                                        </div>
                                    {/* </div> */}
                                </div>


                            </div>






                            <div className="trending-cards grid4">
                                {
                                    trendingCode.map((data) => {
                                        return (
                                            <Cards key={data.id}{...data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="exercise-section">
                            <div className="top-exercise">
                                <div className="exercise-logo">
                                    <GoTag className="exercise-icon" />
                                    <h1 className="exercise-title">Linear Regression</h1>
                                </div>
                                <div className="exercise-side-data">See All</div>
                            </div>
                            <div className="exercise-cards grid4">
                                {
                                    exerciseData.map((data) => {
                                        return (
                                            <Cards key={data.id}{...data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="finance-section">
                            <div className="top-finance">
                                <div className="finance-logo">
                                    <GoTag className="finance-icon" />
                                    <h1 className="finance-title">Global</h1>
                                </div>
                                <div className="finance-side-data">See All</div>
                            </div>
                            <div className="finance-cards grid4">
                                {
                                    exerciseData.map((data) => {
                                        return (
                                            <Cards key={data.id}{...data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="finance-section">
                            <div className="top-finance">
                                <div className="finance-logo">
                                    <GoTag className="finance-icon" />
                                    <h1 className="finance-title">PyTorch</h1>
                                </div>
                                <div className="finance-side-data">See All</div>
                            </div>
                            <div className="finance-cards grid4">
                                {
                                    exerciseData.map((data) => {
                                        return (
                                            <Cards key={data.id}{...data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="social-section">
                            <div className="top-social">
                                <div className="social-logo">
                                    <GoTag className="social-icon" />
                                    <h1 className="social-title">Competition Notebooks</h1>
                                </div>
                                <div className="social-side-data">See All</div>
                            </div>
                            <div className="social-cards grid4">
                                {
                                    exerciseData.map((data) => {
                                        return (
                                            <Cards key={data.id}{...data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="explore-section">
                            <div className="explore-title">Didn&apos;t find what you were looking for?</div>
                            <div className="explore-button bg-darkblue-100">
                                <div className="button-content ">Explore all public notebooks</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Code