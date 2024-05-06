import React, { useContext, useState } from 'react'
import './Models.css';
import { MdOutlineInsights } from "react-icons/md";
import img1 from '../../assets/model-img1.svg'
import img2 from '../../assets/cardimg-audio.svg'
import img3 from '../../assets/cardimg-pose.svg'
import img4 from '../../assets/cardimg-resolution.svg'
import img5 from '../../assets/cardimg-processing.svg'
import img6 from '../../assets/cardimg-detection.svg'
import img7 from '../../assets/cardimg-other.svg'
import img8 from '../../assets/cardimg-generation.svg'
import { SearchBar } from '../SearchBar'
import { ImagelessCard } from '../ImagelessCard';
import { AnimatedCard } from '../AnimatedCard';
import { AppContext } from '../context/context';


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
import { ArrowDownNarrowWide, BellRing, Search } from 'lucide-react';
import Hugcard from '../Hugcard';

export default function Models() {

    const [buttonStates, setButtonStates] = useState({});
    const handle = (itemId) => {
        console.log(`Button ${itemId} clicked`);
        setButtonStates((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId] || false,
        }));
    };



    const { pos } = useContext(AppContext);
    const searchModels = "Search Models";
    const cardTitle = [
        { title: "Audio Synthesis" },
        { title: "Pose Detection" },
        { title: "Image Super Resolution" },
        { title: "Text Pre-Processing" },
        { title: "Object Detection" },
        { title: "Other" },
        { title: "Text Generation" },
    ]
    const data = [
        {
            id: 1,
            title: "All models"
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




            <Mobilemenu />
            <div className="mt-[4.7rem] flex md:mt-0">
                <Simplemenu style={{ color: "#fff" }} />
                <section className={`model das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px" }}
                >
                    <div className="container">
                        <div className="model-section">
                            <div className="top-section">

                                {/* <!-- BEGIN: Top Bar --> */}
                                <div className="relative z-[51] flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-28px", padding: "0 10px" , zIndex:"0"}}>

                                    {/* <!-- BEGIN: Breadcrumb --> */}
                                    <div aria-label="breadcrumb" className="flex -intro-x mr-auto hidden sm:flex">
                                        <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                            <li className="">
                                                <a href="/">Application</a>
                                            </li>
                                            <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                <a href="/">Model</a>
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

                                <div className="model-details">
                                    <div className="model-content">
                                        <h1 className="main-title">Models</h1>
                                        <p className="model-para">Search and discover hundreds of trained, ready-to-deploy machine learning models in one place.</p>
                                    </div>
                                    <div className="models-image">
                                        <img src={img1} alt="models" width={220} height={170} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="trending-models">
                            <div className="top-trending">
                                <div className="trending-logo">
                                    <MdOutlineInsights className="timeline-icon" />
                                    <h1 className="trending-title">Trending Models</h1>
                                </div>
                                <div className="trending-side-data">See All</div>
                            </div>

                            <div className='flex mb-6'>
                                <span className='flex items-center p-2 mr-3' style={{ backgroundColor: "#1e40ad", color: "white", fontSize: "18px" }}><ArrowDownNarrowWide /> Filters</span>

                                <div className='flex overflow-auto mainy m-1 mr-2'>
                                    {data.map((item) => (
                                        <div
                                            className={`opti flex mr-3`}
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

                            <div className="trending-cards grid4">
                                <ImagelessCard />
                                <ImagelessCard />
                                <ImagelessCard />
                                <ImagelessCard />
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="trending-models">
                            <div className="trending-cards grid4">
                                <AnimatedCard cardTitle={cardTitle[0].title} image={img2} />
                                <ImagelessCard />
                                <ImagelessCard />
                                <ImagelessCard />
                            </div>
                        </div>
                        <div className="trending-models">
                            <div className="trending-cards grid4">
                                <AnimatedCard cardTitle={cardTitle[1].title} image={img3} />
                                <ImagelessCard />
                                <ImagelessCard />
                                <ImagelessCard />
                            </div>
                        </div>
                        <div className="trending-models">
                            <div className="trending-cards grid4">
                                <AnimatedCard cardTitle={cardTitle[2].title} image={img4} />
                                <ImagelessCard />
                                <ImagelessCard />
                                <ImagelessCard />
                            </div>
                        </div>
                        <div className="trending-models">
                            <div className="trending-cards grid4">
                                <AnimatedCard cardTitle={cardTitle[3].title} image={img5} />
                                <ImagelessCard />
                                <ImagelessCard />
                                <ImagelessCard />
                            </div>
                        </div>
                        <div className="trending-models">
                            <div className="trending-cards grid4">
                                <AnimatedCard cardTitle={cardTitle[4].title} image={img6} />
                                <ImagelessCard />
                                <ImagelessCard />
                                <ImagelessCard />
                            </div>
                        </div>
                        <div className="trending-models">
                            <div className="trending-cards grid4">
                                <AnimatedCard cardTitle={cardTitle[5].title} image={img7} />
                                <ImagelessCard />
                                <ImagelessCard />
                                <ImagelessCard />
                            </div>
                        </div>
                        <div className="trending-models">
                            <div className="trending-cards grid4">
                                <AnimatedCard cardTitle={cardTitle[6].title} image={img8} />
                                <ImagelessCard />
                                <ImagelessCard />
                                <ImagelessCard />
                            </div>
                        </div> */}

                    <div className="trending-section">
                        <div className="top-trending">
                            <div className="trending-logo">
                                <MdOutlineInsights className="timeline-icon" />
                                <h1 className="trending-title">Top Required Datasets</h1>
                            </div>
                            <div className="trending-side-data">See All</div>
                        </div>
                        <div className="hugc grid2">
                            {
                                recentData.map((data) => {
                                    return (
                                        <Hugcard key={data.id}{...data} />
                                    )
                                })
                            }
                        </div>
                    </div>


                    <div className="model-explore-section" >
                        <div className="explore-title">Didn&apos;t find what you were looking for?</div>
                        <p className="explore-para">Explore Kaggle-curated Models from organizations like Google Research, Deepmind, and more</p>
                        <div className="explore-button" style={{ backgroundColor: "#1e40ad" }}>
                            <div className="button-content">View all organization models</div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}
