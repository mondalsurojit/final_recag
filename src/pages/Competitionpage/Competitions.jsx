import React, { useContext, useState } from 'react'
import './Competitions.css';
import { MdOutlineOutlinedFlag, MdOutlineSchedule, MdOutlinePeopleAlt, MdHistoryToggleOff } from "react-icons/md";
import { SearchBar } from '../SearchBar'
import { Buttons } from '../Buttons'
import { FilterSearchBar } from '../FilterSearchBar';
import { Cards } from '../Cards';
import { AppContext } from '../context/context';
import img1 from '../../assets/competition-img1.svg'
import img2 from '../../assets/competition-img2.png'
import img3 from '../../assets/competition-img3.png'
import img4 from '../../assets/competition-img4.png'
import img5 from '../../assets/competition-img5.png'
import img6 from '../../assets/competition-img6.png'
import img7 from '../../assets/competition-img7.png'
import img8 from '../../assets/competition-img8.png'


import "../css/vendors/tippy.css"
import "../css/vendors/litepicker.css"
import "../css/vendors/tiny-slider.css"
import "../css/themes/rubick/side-nav.css"
import "../css/vendors/leaflet.css"
import "../css/vendors/simplebar.css"
import "../css/components/mobile-menu.css"
import Mobilemenu from '../Dashboard/Mobilemenu'
import Simplemenu from '../Dashboard/Simplemenu'
import profile4 from "../image/fakers/profile-4.jpg"
import { ArrowDownNarrowWide, BellRing, Cross, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import Model from "react-modal"

export default function Competitions() {

    const [visible, setvisible] = useState(false);

    const [buttonStates, setButtonStates] = useState({});
    const handle = (itemId) => {
        console.log(`Button ${itemId} clicked`);
        setButtonStates((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId] || false,
        }));
    };

    const handleSubmit =()=>{
        console.log("this will handel the submit for competition")
    }

    const data = [
        {
            id: 1,
            title: "All competitions"
        },
        {
            id: 2,
            title: "Featured"
        },
        {
            id: 3,
            title: "Getting Started"
        },
        {
            id: 4,
            title: "Research"
        },
        {
            id: 5,
            title: "Community"
        },
        {
            id: 6,
            title: "Playground"
        },
        {
            id: 7,
            title: "Simulation"
        },
        {
            id: 8,
            title: "Analytics"
        }
    ];
    const competeData = [
        {
            id: 1,
            image: img2,
            title: "Titanic - Machine Learning from Disaster",
            desc1: "Start here! Predict survival on the Titanic and get familiar with ML basics",
            use: 'Getting Started',
            desc3: '16247 Teams',
            rating_title: "Knowledge",
            time: "Ongoing"
        },
        {
            id: 2,
            image: img3,
            title: "House Prices - Advanced Regression Techniques",
            desc1: "Predict sales prices and practice feature engineering, RFs, and gradient boosting",
            use: 'Getting Started',
            desc3: '4697 Teams',
            rating_title: "Knowledge",
            time: "Ongoing"
        },
        {
            id: 3,
            image: img4,
            title: "Spaceship Titanic",
            desc1: "Predict which passengers are transported to an alternate dimension",
            use: 'Getting Started',
            desc3: '2750 Teams',
            rating_title: "Knowledge",
            time: "Ongoing"
        },

    ]
    const activeData = [
        {
            id: 1,
            image: img5,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 2,
            image: img6,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 3,
            image: img7,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 4,
            image: img8,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 5,
            image: img5,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 6,
            image: img6,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 7,
            image: img7,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 8,
            image: img8,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 9,
            image: img2,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 10,
            image: img3,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 11,
            image: img4,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 12,
            image: img5,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        }
    ]
    const recentData = [
        {
            id: 1,
            image: img5,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 2,
            image: img6,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 3,
            image: img7,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        },
        {
            id: 4,
            image: img8,
            title: "LLM - Detect AI Generated Text",
            desc1: "Identify which essay was written by a large language model",
            use: 'Featured',
            size: 'Code Competition',
            desc3: '3127 Teams',
            rating_title: "$110,000",
            time: "a month ago"
        }
    ]

    return (
        <div>




            <Mobilemenu />
            <div className="flex sm:m-8 m-2">
                <Simplemenu style={{ color: "#fff" }} />
                <section className={`competition das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px" }}
                >
                    <div className="container">
                        <div className="competition-section">
                            <div className="top-section">

                                {/* <!-- BEGIN: Top Bar --> */}
                                <div className="relative  flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-28px", padding: "0 10px", zIndex: "0" }}>

                                    {/* <!-- BEGIN: Breadcrumb --> */}
                                    <div aria-label="breadcrumb" className="flex -intro-x mr-auto hidden sm:flex">
                                        <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                            <li className="">
                                                <a href="/">Application</a>
                                            </li>
                                            <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                <a href="/">Competition</a>
                                            </li>
                                        </ol>
                                    </div>
                                    {/* <!-- END: Breadcrumb --> */}


                                    {/* <!-- BEGIN: Search --> */}
                                    <div className="search intro-x relative mr-3 sm:mr-6" style={{ backgroundColor: "#f1f5f9" }}>
                                        <div className="relative hidden sm:block" >
                                            <input data-tw-merge="" type="text" placeholder="Search..." className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]: w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70" />
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

                                <div className="competition-details">
                                    <div className="competition-content">
                                        <h1 className="main-title">Competitions</h1>
                                        <p className="competition-para">Grow your data science skills by competing in our exciting competitions. Find help in the <a href="/" className="lined">documentation</a> or learn about <a href="/" className="lined">Community Competitions</a>.</p>

                                        <div className='buttons'>
                                            <div className="button first" style={{ backgroundColor: " #1e40ad " }}>
                                                <FaPlus className='plus-icon' />

                                                <button onClick={() => setvisible(true)} style={{ color: "white" }}>
                                                    <div style={{ color: "white" }}>Add Competition</div>
                                                </button>

                                                <Model isOpen={visible} onRequestClose={() => setvisible(false)}
                                                    style={{

                                                        content: {
                                                            position: "absolute",
                                                            background: "white",
                                                            zIndex: "2",
                                                            display:"flex",
                                                            justifyContent:"center",
                                                            color:"black",
                                                        }
                                                    }}>
                                                    <form onSubmit={handleSubmit}>
                                                        <div style={{}}>
                                                                <button onClick={() => setvisible(false)}  style={{position: "absolute", top: "20px", right: "20px"}}><X /></button>
                                                            <div className='comihead flex'>
                                                                <h1 style={{fontSize:"22px" }}>Details About Competition</h1>
                                                            </div>

                                                            <div className='comiform pt-5'>
                                                                <div className='tit p-2'>
                                                                <label >Title</label>
                                                                <input type="text" placeholder="title"/>
                                                                </div>

                                                                <div className='overvie p-2'>
                                                                <label>Overview</label>
                                                                <input type="text" placeholder="overview"/>
                                                                </div>

                                                                <div className='overvie p-2'>
                                                                <label>Price</label>
                                                                <input type="text" placeholder="overview"/>
                                                                </div>

                                                                <div className='overvie p-2'>
                                                                <label>Rules</label>
                                                                <input type="text" placeholder="overview"/>
                                                                </div>

                                                                <div className='overvie p-2'>
                                                                <label>Start Date</label>
                                                                <input type="date" placeholder="overview"/>
                                                                </div>

                                                                <div className='overvie p-2'>
                                                                <label>End Date</label>
                                                                <input type="date" placeholder="overview"/>
                                                                </div>

                                                                <button type='Submit'> Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>

                                                </Model>

                                            </div>
                                            <div className="button second">
                                                <div className="button-content">Your Work</div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="competitions-image">
                                        <img src={img1} alt="logo-1" width={180} height={150} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex m-6' style={{ paddingRight: "15px", marginLeft: "50px" }}>
                        <span className='flex items-center p-2 mr-5' style={{ backgroundColor: "#1e40ad", color: "white", fontSize: "18px" }}><ArrowDownNarrowWide /> Filters</span>

                        <div className='flex overflow-auto mainy m-1 mr-2'>
                            {data.map((item) => (
                                <div
                                    className={`opti flex mr-5`}
                                    key={item.id}
                                    style={{ fontSize: "18px", backgroundColor: buttonStates[item.id] ? '#1e40ad' : 'white', color: buttonStates[item.id] ? 'white' : 'black' }}
                                >
                                    <button
                                        onClick={() => handle(item.id)}
                                        className="p-1"
                                    >
                                        {item.title}
                                    </button>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='container'>
                        <div className="trending-section">
                            <div className="top-trending">
                                <div className="trending-logo">
                                    <MdOutlineOutlinedFlag className="flag-icon" />
                                    <h1 className="trending-title">Get Started</h1>
                                </div>
                                <div className="trending-side-data">See All</div>
                            </div>
                            <div className="trending-cards grid4">
                                <div className="text-card">
                                    <h1 className="text-card-title">
                                        New to Kaggle?
                                    </h1>
                                    <p className="text-card-para">
                                        These competitons are perfect for newcomers.
                                    </p>
                                </div>
                                {
                                    competeData.map((data) => {
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
                                    <MdOutlineSchedule className="clock-icon" />
                                    <h1 className="exercise-title">Active Competitions</h1>
                                </div>
                                <div className="exercise-side-data">See All</div>
                            </div>
                            <div className="exercise-cards grid4">
                                {
                                    activeData.map((data) => {
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
                                    <MdHistoryToggleOff className="finance-icon" />
                                    <h1 className="finance-title">Recently Completed</h1>
                                </div>
                                <div className="finance-side-data">See All</div>
                            </div>
                            <div className="finance-cards grid4">
                                {
                                    recentData.map((data) => {
                                        return (
                                            <Cards key={data.id}{...data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="textdata-section">
                            <div className="top-textdata">
                                <div className="textdata-logo">
                                    <MdOutlinePeopleAlt className="textdata-icon" />
                                    <h1 className="textdata-title">Community Competitions</h1>
                                </div>
                                <div className="textdata-side-data">See All</div>
                            </div>
                            <div className="textdata-cards grid4">
                                <div className="text-card">
                                    <h1 className="text-card-title">
                                        Make Learning Fun
                                    </h1>
                                    <p className="text-card-para">
                                        Use our no-cost, self-service platform to create competitions for your community.<a href="/" className="lined"> Learn more</a>
                                    </p>
                                    <p className="text-card-para">
                                        Ready to host? <a href="/" className="lined"> Create a competition or view our library of cloneable competitions.</a>
                                    </p>
                                </div>
                                {
                                    activeData.map((data) => {
                                        return (
                                            <Cards key={data.id}{...data} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="explore-section">
                            <div className="explore-title">Didn&apos;t find what you were looking for?</div>
                            <div className="explore-button">
                                <div className="button-content">Explore all competitions</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
