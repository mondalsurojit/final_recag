import React, { useState } from 'react'
import './Datasets.css';
import { MdOutlineInsights } from "react-icons/md";
// import { GoTag } from "react-icons/go";
import img1 from '../../assets/dataset-img1.svg'
import img2 from '../../assets/dataset-img2.jpg'
import img3 from '../../assets/dataset-img3.png'
import img4 from '../../assets/dataset-img4.png'
import img5 from '../../assets/dataset-img5.jpg'
import img6 from '../../assets/exercisedataset-img1.png'
import img7 from '../../assets/exercisedataset-img2.jpg'
import img8 from '../../assets/exercisedataset-img4.jpeg'

import { Buttons } from '../Buttons'
import { FilterSearchBar } from '../FilterSearchBar';
import { Cards } from '../Cards';
// import { AppContext } from '../context/context';
import profile4 from "../image/fakers/profile-4.jpg"

import "../css/vendors/tippy.css"
import "../css/vendors/litepicker.css"
import "../css/vendors/tiny-slider.css"
import "../css/themes/rubick/side-nav.css"
import "../css/vendors/leaflet.css"
import "../css/vendors/simplebar.css"
import "../css/components/mobile-menu.css"
import Mobilemenu from '../Dashboard/Mobilemenu'
import Simplemenu from '../Dashboard/Simplemenu'
import { ArrowDownNarrowWide, BellRing, Search } from 'lucide-react';
import Hugcard from '../Hugcard';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Datasets() {
  // const { pos } = useContext(AppContext);

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
  const trendingData = [
    {
      id: 1, rating: 8,
      image: img2,
      title: "Factors influencing US House Prices",
      desc1: "Jyotsna Gurjar",
      time: 'Updated a day ago',
      use: 'Usability 7.6',
      size: '8 kB',
      desc3: '1 File (CSV)'
    },
    {
      id: 2, rating: 18,
      image: img3,
      title: "Online Retail Transaction Records",
      desc1: "The Devastator",
      time: 'Updated 2 days ago',
      use: 'Usability 7.1',
      size: '9 MB',
      desc3: '1 File (CSV)'
    },
    {
      id: 3, rating: 12,
      image: img4,
      title: "SXSW 2019 Schedule Dataset",
      desc1: "The Devastator",
      time: 'Updated 4 days ago',
      use: 'Usability 10.0',
      size: '2 MB',
      desc3: '3 File (CSV,other)'
    },
    {
      id: 4, rating: 18,
      image: img5,
      title: "Heart Failure Prediction",
      desc1: "Bhavik Jikadara",
      time: 'Updated 4 days ago',
      use: 'Usability 8.8',
      size: '4 kB',
      desc3: '1 File (CSV)'
    },
  ]

  // data must be used later on
  // const exerciseData = [
  //     {
  //         id: 1, rating: 8,
  //         image: img6,
  //         title: "Factors influencing US House Prices",
  //         desc1: "Jyotsna Gurjar",
  //         time: 'Updated a day ago',
  //         use: 'Usability 7.6',
  //         size: '8 kB',
  //         desc3: '1 File (CSV)'
  //     },
  //     {
  //         id: 2, rating: 18,
  //         image: img7,
  //         title: "Online Retail Transaction Records",
  //         desc1: "The Devastator",
  //         time: 'Updated 2 days ago',
  //         use: 'Usability 7.1',
  //         size: '9 MB',
  //         desc3: '1 File (CSV)'
  //     },
  //     {
  //         id: 3, rating: 12,
  //         image: img4,
  //         title: "SXSW 2019 Schedule Dataset",
  //         desc1: "The Devastator",
  //         time: 'Updated 4 days ago',
  //         use: 'Usability 10.0',
  //         size: '2 MB',
  //         desc3: '3 File (CSV,other)'
  //     },
  //     {
  //         id: 4, rating: 18,
  //         image: img8,
  //         title: "Heart Failure Prediction",
  //         desc1: "Bhavik Jikadara",
  //         time: 'Updated 4 days ago',
  //         use: 'Usability 8.8',
  //         size: '4 kB',
  //         desc3: '1 File (CSV)'
  //     },
  // ]


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
        <section className={`dataset das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px" }}
        >
          <div className="container">
            <div className="dataset-section">
              <div className="top-section">


                {/* <!-- BEGIN: Top Bar --> */}
                <div className="relative z-[51] flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-28px", padding: "0 10px",zIndex:"0" }}>

                  {/* <!-- BEGIN: Breadcrumb --> */}
                  <div aria-label="breadcrumb" className="flex -intro-x mr-auto hidden sm:flex">
                    <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                      <li className="">
                        <a href="/">Application</a>
                      </li>
                      <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                        <a href="/">Dataset</a>
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
                    <h1 className="main-title">Datasets</h1>
                    <p className="dataset-para">Explore, analyze, and share quality data. Learn more about data types, creating, and collaborating.</p>
                    {/* <Buttons /> */}

                    <div className='buttons'>
                      <div className="button first" style={{ backgroundColor: " #1e40ad " }}>
                        <FaPlus className='plus-icon' />
                        <button style={{color:"white"}}>
                          <Link to="/" style={{color:"white"}}>Add dataset</Link>
                        </button>
                        
                      </div>
                      <div className="button second">
                        <div className="button-content">Your Work</div>
                      </div>
                    </div>


                  </div>
                  <div className="datasets-image">
                    <img src={img1} alt="logo-1" width={220} height={170} />
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className='container'>
            <div className="trending-section">
              <div className="top-trending">
                <div className="trending-logo">
                  <MdOutlineInsights className="timeline-icon" />
                  <h1 className="trending-title">Trending Datasets</h1>
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


              <div className="trending-cards grid4" style={{ overflow: "auto" }}>
                {
                  trendingData.map((data) => {
                    return (
                      <Cards key={data.id}{...data} />
                    )
                  })
                }
              </div>
            </div>

          </div>

          {/* this is other card which can be usefull in future so just commenting this code  */}
          {/* <div className="exercise-section">
                            <div className="top-exercise">
                                <div className="exercise-logo">
                                    <GoTag className="exercise-icon" />
                                    <h1 className="exercise-title">Exercise</h1>
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
                                    <h1 className="finance-title">Finance</h1>
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
                        <div className="programmming-section">
                            <div className="top-programmming">
                                <div className="programmming-logo">
                                    <GoTag className="programmming-icon" />
                                    <h1 className="programmming-title">Programming</h1>
                                </div>
                                <div className="programmming-side-data">See All</div>
                            </div>
                            <div className="programmming-cards grid4">
                                {
                                    exerciseData.map((data) => {
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
                                    <MdOutlineInsights className="textdata-icon" />
                                    <h1 className="textdata-title">Text Data</h1>
                                </div>
                                <div className="textdata-side-data">See All</div>
                            </div>
                            <div className="textdata-cards grid4">
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
                                    <h1 className="social-title">Social Issues And Advocacy</h1>
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
                        </div> */}


          {/* hugging face card */}

          {/* <Hugcard/> */}
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

          <div className="explore-section">
            <div className="explore-title">Didn&apos;t find what you were looking for?</div>
            <div className="explore-button" style={{ backgroundColor: "#1e40ad" }}>
              <div className="button-content" >Explore all public datasets</div>
            </div>
          </div>
          {/* </div> */}
        </section>
        {/* <div className="ai-image">
        <img src={aiLogo} alt="BharatAi" width="100" />
      </div>  */}
      </div>
    </div>

  )
}
