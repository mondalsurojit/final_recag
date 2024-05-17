import React, { useState } from 'react'
import './Host.css';
import img1 from '../../assets/host-comp-img1.svg'
import img2 from '../../assets/host-comp-img2.svg'
import img3 from '../../assets/host-comp-img3.svg'
import img4 from '../../assets/host-comp-img4.svg'
import img5 from '../../assets/host-comp-img5.svg'
import img6 from '../../assets/host-comp-img6.svg'
import img7 from '../../assets/host-comp-img7.svg'
import img8 from '../../assets/host-img2.svg'
import img9 from '../../assets/host-comp-img9.svg'
import img10 from '../../assets/host-comp-img10.svg'
import img11 from '../../assets/host-comp-img11.svg'
import img12 from '../../assets/host-comp-img12.svg'
import img13 from '../../assets/host-comp-img13.svg'
import img14 from '../../assets/host-comp-img14.svg'

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
import { BellRing, Search } from 'lucide-react';
import { FaPlus } from 'react-icons/fa';

export default function Host() {
    const [expandFirst, setExpandFirst] = useState(false);
    const [expandSecond, setExpandSecond] = useState(false);
    const [expandThird, setExpandThird] = useState(false);
    const [expandFourth, setExpandFourth] = useState(false);

    return (
        <div>




            <Mobilemenu />
            <div className="flex sm:m-8 m-2">
                <Simplemenu style={{ color: "#fff" }} />

                <section className={`host-section das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", backgroundColor: "white", borderRadius: "15px", padding: "2rem" }}
                >
                    <div className="host-container">
                        <div className="hosting-section">
                            <div className="first-section">

                                {/* <!-- BEGIN: Top Bar --> */}
                                <div className="relative z-[51] flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-25px", padding: "22px 10px", zIndex: "0" }}>

                                    {/* <!-- BEGIN: Breadcrumb --> */}
                                    <div aria-label="breadcrumb" className=" -intro-x mr-auto hidden sm:flex">
                                        <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                            <li className="">
                                                <a href="/">Application</a>
                                            </li>
                                            <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                <a href="/">Host Competition</a>
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



                                <div className="dataset-details">
                                    <div className="dataset-content">
                                        <h1 className="main-title">Host your data science competition on Recag</h1>
                                        <p className="dataset-para">Whether you&apos;re an ML enthusiast, a teacher in class, or part of a business looking to solve challenging problems, the Recag platform connects your audience with your machine learning goals.</p>


                                        <div className='flex flex-row gap-[1rem]'>
                                            <button
                                                className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                                                style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                                                href="/competition"
                                            >
                                                <span className='ml-2 text-[14px]'>See Our Competition Types</span>
                                            </button>



                                        </div>




                                    </div>
                                    <div className="datasets-image pr-4">
                                        <img src={img1} alt="logo-1" width={220} height={170} />
                                    </div>
                                </div>






                            </div>
                            <div className="second-section">
                                <div className="main-head">
                                    <h3 className='main'>Why a Recag Competition?</h3>
                                </div>
                                <div className="bottom-head">
                                    <div className="left-sec">
                                        <p className="left-sec">
                                            Recag is the home of data science, with over 16 million users, ready to solve your predictive modeling problem through data competitions.
                                        </p>
                                        <p className="left-sec">
                                            You set the terms, Recagrs construct their algorithms, and our website scores their accuracy in real time to find the winner. Competitions are the smart, simple way to tackle a tough business problem, educate students, or simply create a fun event.
                                        </p>
                                        <p className="left-sec">
                                            You bring the problem and the data, and Recag brings the platform.
                                        </p>
                                    </div>
                                    <div className="right-sec">
                                        <img src={img8} alt="logo-8" />
                                        <div className="right-sec-content">
                                            <h3 className="heading">Recag Competition Features</h3>
                                            <div className="grid-section">
                                                <div className="sub-content">
                                                    <img src={img2} alt="logo-2" />
                                                    <div className="sub-head">Dataset Hosting</div>
                                                </div>
                                                <div className="sub-content">
                                                    <img src={img3} alt="logo-3" />
                                                    <div className="sub-head">Real-time Leaderboards</div>
                                                </div>
                                                <div className="sub-content">
                                                    <img src={img4} alt="logo-4" />
                                                    <div className="sub-head">
                                                        Pre-loaded Metrics
                                                    </div>
                                                </div>
                                                <div className="sub-content">
                                                    <img src={img5} alt="logo-5" />
                                                    <div className="sub-head">Discussion Forums</div>
                                                </div>
                                                <div className="sub-content">
                                                    <img src={img6} alt="logo-6" />
                                                    <div className="sub-head">Automated Scoring</div>
                                                </div>
                                                <div className="sub-content">
                                                    <img src={img7} alt="logo-7" />
                                                    <div className="sub-head">Recag Notebooks</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="third-section">
                                <h3 className="main">Which Recag Competition is right for you?</h3>
                                <p className="host-par">
                                    Recag offers a range of offerings for competition hosts. Select the one that&apos;s right for your needs.
                                </p>
                                <div className="top-comp column">
                                    <div className="community-sec row">
                                        <img src={img9} alt="logo-9" />
                                        <div className="top-comp-content">
                                            <h3 className="main">Community</h3>
                                            <p className="third-sec">For educators, small businesses, or ML enthusiasts</p>
                                            <h5 className="third-sec">No cost</h5>
                                            <div className="host-bottom-content row center">
                                                <a href="/">
                                                    <button className="start">
                                                        Get Started
                                                    </button>
                                                </a>
                                                <a href="/">
                                                    <div className="learn-more mt">
                                                        Learn More
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-sec row">
                                        <img src={img10} alt="logo-10" />
                                        <div className="top-comp-content">
                                            <h3 className="main">Featured</h3>
                                            <p className="third-sec">For businesses or organizations with demanding ML problems</p>
                                            <h5 className="third-sec">Pricing varies</h5>
                                            <div className="host-bottom-content row center">
                                                <a href="/">
                                                    <button className="start">
                                                        Contact Us
                                                    </button>
                                                </a>
                                                <a href="/">
                                                    <div className="learn-more mt">
                                                        Learn More
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="research-sec row">
                                        <img src={img11} alt="logo-11" />
                                        <div className="top-comp-content">
                                            <h3 className="main">Research</h3>
                                            <p className="third-sec">For Academic / Research Institutions or Non-Profits</p>
                                            <h5 className="third-sec">Grants available</h5>
                                            <div className="host-bottom-content row center">
                                                <a href="/">
                                                    <button className="start">
                                                        Apply Now
                                                    </button>
                                                </a>
                                                <a href="/">
                                                    <div className="learn-more mt">
                                                        Learn More
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comparison grid4">
                                    <div className="top-comp">
                                        <div className="community-sec">
                                            <img src={img9} alt="logo-9" />
                                            <h3 className="main">Community</h3>
                                            <p className="third-sec">For educators, small businesses, or ML enthusiasts</p>
                                            <h5 className="third-sec">No cost</h5>
                                        </div>
                                        <div className="featured-sec">
                                            <img src={img10} alt="logo-10" />
                                            <h3 className="main">Featured</h3>
                                            <p className="third-sec">For businesses or organizations with demanding ML problems</p>
                                            <h5 className="third-sec">Pricing varies</h5>
                                        </div>
                                        <div className="research-sec">
                                            <img src={img11} alt="logo-11" />
                                            <h3 className="main">Research</h3>
                                            <p className="third-sec">For Academic / Research Institutions or Non-Profits</p>
                                            <h5 className="third-sec">Grants available</h5>
                                        </div>
                                    </div>
                                    <div className="top-comp points">
                                        <div className="community-sec">
                                            <h3 className="main">Community</h3>
                                        </div>
                                        <div className="featured-sec">
                                            <h3 className="main">Featured</h3>
                                        </div>
                                        <div className="research-sec">
                                            <h3 className="main">Research</h3>
                                        </div>
                                    </div>
                                    <div className="middle-comp">
                                        <div className="middle-lines-main">
                                            <div className="middle-line-head">Shared Features</div>
                                            <div className="middle-line-sec"></div>
                                            <div className="middle-line-third"></div>
                                            <div className="middle-line-fourth"></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Dataset Hosting</div>
                                            <div className="middle-line-sec"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Notebooks with no cost compute</div>
                                            <div className="middle-line-sec"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Competition-specific forum</div>
                                            <div className="middle-line-sec"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Live competition leaderboard</div>
                                            <div className="middle-line-sec"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Real-time submission scoring</div>
                                            <div className="middle-line-sec"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines-main">
                                            <div className="middle-line-head">Key Differences</div>
                                            <div className="middle-line-sec"></div>
                                            <div className="middle-line-third"></div>
                                            <div className="middle-line-fourth"></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Featured on Competition homepage</div>
                                            <div className="middle-line-sec"><img src={img13} alt="logo-12" className="dash" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Marketing on Recag & social media</div>
                                            <div className="middle-line-sec"><img src={img13} alt="logo-12" className="dash" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Cash prizes allowed to winners</div>
                                            <div className="middle-line-sec"><img src={img13} alt="logo-12" className="dash" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Increased participation via Recag progression system</div>
                                            <div className="middle-line-sec"><img src={img13} alt="logo-12" className="dash" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines-main">
                                            <div className="middle-line-head">Support</div>
                                            <div className="middle-line-sec"></div>
                                            <div className="middle-line-third"></div>
                                            <div className="middle-line-fourth"></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Technical advice and support</div>
                                            <div className="middle-line-sec"><img src={img13} alt="logo-12" className="dash" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Comprehensive prep for launch</div>
                                            <div className="middle-line-sec"><img src={img13} alt="logo-12" className="dash" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                        <div className="middle-lines">
                                            <div className="middle-line-one">Live competition monitoring</div>
                                            <div className="middle-line-sec"><img src={img13} alt="logo-12" className="dash" /></div>
                                            <div className="middle-line-third"><img src={img12} alt="logo-12" className="check" /></div>
                                            <div className="middle-line-fourth"><img src={img12} alt="logo-12" className="check" /></div>
                                        </div>
                                    </div>
                                    <div className="bottom-comp">
                                        <div className="host-bottom-content">
                                            <a href="/">
                                            <div className='flex flex-row gap-[1rem]'>
                                            <button
                                                className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                                                style={{ borderRadius: "20px", padding: "0.4rem 1rem" }}
                                                href="/competition"
                                            >
                                                <span className='ml-2 text-[14px]'>Get Started</span>
                                            </button>



                                        </div>
                                            </a>
                                            <a href="/">
                                                <div className="learn-more">
                                                    Learn More
                                                </div>
                                            </a>
                                        </div>
                                        <div className="host-bottom-content">
                                            <a href="/">
                                            <div className='flex flex-row gap-[1rem]'>
                                            <button
                                                className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                                                style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                                                href="/competition"
                                            >
                                                <span className='ml-2 text-[14px]'>Contact Us</span>
                                            </button>



                                        </div>
                                            </a>
                                            <a href="/">
                                                <div className="learn-more">
                                                    Learn More
                                                </div>
                                            </a>
                                        </div>
                                        <div className="host-bottom-content">
                                            <a href="/">
                                            <div className='flex flex-row gap-[1rem]'>
                                            <button
                                                className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                                                style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                                                href="/competition"
                                            >
                                                <span className='ml-2 text-[14px]'>Apply Now</span>
                                            </button>



                                        </div>
                                            </a>
                                            <a href="/">
                                                <div className="learn-more">
                                                    Learn More
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="fourth-section">
                                <h3 className="main">Competition FAQs</h3>
                                <div className="faq-section">
                                    <div className="faq">
                                        <div className="faq-ques ">
                                            <div className="faq-left">
                                                <h5 className="ques">Who&apos;s eligible to launch a community competition?</h5>
                                            </div>
                                            <div className={`faq-right ${expandFirst ? "rotate" : ""}`} role="button" tabIndex={0} onClick={() => setExpandFirst(!expandFirst)} onKeyDown={() => setExpandFirst(!expandFirst)}>
                                                <img src={img14} alt="logo-14" className='arrow' />
                                            </div>
                                        </div>
                                        <p className={`ans ${expandFirst ? "visible" : ""}`}>
                                            Everyone! Previously, this platform could only be used in university courses, but now anyone can organize a competition, including research organizations, companies, and regional meetup groups.
                                        </p>
                                    </div>
                                    <div className="faq">
                                        <div className="faq-ques">
                                            <div className="faq-left">
                                                <h5 className="ques">How do grants for Research Competitions work?</h5>
                                            </div>
                                            <div className={`faq-right ${expandSecond ? "rotate" : ""}`} role="button" tabIndex={0} onClick={() => setExpandSecond(!expandSecond)} onKeyDown={() => setExpandSecond(!expandSecond)} >
                                                <img src={img14} alt="logo-14" className='arrow' />
                                            </div>
                                        </div>
                                        <p className={`ans ${expandSecond ? "visible" : ""}`} >
                                            Recag is offering quarterly grants to hosts at academic/sesearch institutions and non-profit organizations who want to run competitions to further their machine learning research efforts.
                                        </p>
                                    </div>
                                    <div className="faq">
                                        <div className="faq-ques">
                                            <div className="faq-left">
                                                <h5 className="ques">What do I need to get started to create a competition?</h5>
                                            </div>
                                            <div className={`faq-right ${expandThird ? "rotate" : ""}`} role="button" tabIndex={0} onClick={() => setExpandThird(!expandThird)} onKeyDown={() => setExpandThird(!expandThird)}>
                                                <img src={img14} alt="logo-14" className='arrow' />
                                            </div>
                                        </div>
                                        <p className={`ans ${expandThird ? "visible" : ""}`}>
                                            You&apos;ll need a) a clearly defined problem that competitors need to solve using a machine learning model and b) a dataset that&apos;s used both for training and evaluating the effectiveness of these models. For example, in the     <a href="/" className="lined">   Store Sales – Time Series Forecasting competition </a>     competitors must accurately predict how many of a grocery item will sell using a dataset of past product and sales information from Corporación Favorita, a large Ecuadorian-based grocery retailer.
                                        </p>
                                        <p className={`star ${expandThird ? "visible" : ""}`}>
                                            Check out our  <a href="/" className="lined"> step by step guide </a> on how to get started.
                                        </p>
                                    </div>
                                    <div className="faq">
                                        <div className="faq-ques">
                                            <div className="faq-left">
                                                <h5 className="ques">How do I get support for my competition?</h5>
                                            </div>
                                            <div className={`faq-right ${expandFourth ? "rotate" : ""}`} role="button" tabIndex={0} onClick={() => setExpandFourth(!expandFourth)} onKeyDown={() => setExpandFourth(!expandFourth)}>
                                                <img src={img14} alt="logo-14" className='arrow' />
                                            </div>
                                        </div>
                                        <p className={`ans ${expandFourth ? "visible" : ""}`}>
                                            Because Community Competitions are no cost and entirely self-service, we aren&apos;t able to provide hands-on support for setting up or troubleshooting your competition. But, we encourage connecting with other Community Competition hosts in the  <a href="/" className="lined">  Competition Hosting forum </a>. If you&apos;re experiencing an issue that you believe is affecting the entire platform,     please contact us here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
