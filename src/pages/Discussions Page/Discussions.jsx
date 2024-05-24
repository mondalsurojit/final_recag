import React, { useState } from 'react'
import './Discussions.css';
import img1 from '../../assets/discussion-img1.svg'
import img2 from '../../assets/discussion-img2.svg'
import img3 from '../../assets/discussion-img3.svg'
import img4 from '../../assets/discussion-img4.svg'
import img5 from '../../assets/discussion-img5.svg'
import img6 from '../../assets/discussion-img6.svg'
import img7 from '../../assets/discussion-img7.svg'
import img8 from '../../assets/h-threedots.svg'
import forumImg from '../../assets/discussion-forum.svg'
import groupImg from '../../assets/discussion-group.svg'
import { Link } from 'react-router-dom';

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
import { ArrowDownNarrowWide, BellRing, Boxes, Dot, Eye, LibraryBig, MessageCircle, Search, SquareMousePointer, Tags, ThumbsUp } from 'lucide-react';
import Model from "react-modal"
import { FaPlus } from 'react-icons/fa';
import SearchPopup from '../../components/search-popup.component';
import NotificationPopup from '../../components/notification-popup.component';
import ProfilePopup from '../../components/profile-popup.component';

export default function Discussions() {

    const [visible, setvisible] = useState(false);


    // for tag
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log("Form submitted!");
    toggleModal();
  };


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
      title: "# Machine Learning"
    },
    {
      id: 2,
      title: "# Data Science"
    },
    {
      id: 3,
      title: "# NLP"
    },
    {
      id: 4,
      title: "# Data Handling"
    },
    {
      id: 5,
      title: "# Deep Learning"
    },
    {
      id: 6,
      title: "# Nueral Network"
    },
    {
      id: 7,
      title: "Data Visualization"
    },
    {
      id: 8,
      title: "Pre-Trained Model"
    },
    {
        id: 9,
        title: "Nextjs"
      },
      {
        id: 10,
        title: "SSR"
      }
  ];

    const questions = [
        {
            id: 1,
            title: "Best practices for data fetching in a Next.js application with Server-Side...",
            tag: [
                {
                    tag1: "NEXTJS",
                    tag2: "REACT"
                }
            ],
            name: " Mrityunjay Pathak",
            time: "asked 5 month ago",
            votes: "29 Likes",
            answer: "19 answer",
            views: "50 views"
        },
        {
            id: 2,
            title: "Async/Await Function Not Handling Errors Properly",
            tag: [
                {
                    tag1: "NEXTJS",
                    tag2: "REACT"
                }
            ],
            name: " Mrityunjay Pathak",
            time: "asked 3 month ago",
            votes: "9 Likes",
            answer: "19 answer",
            views: "50 views"
        },
        {
            id: 3,
            title: "Product Feedback",
            tag: [
                {
                    tag1: "NEXTJS",
                    tag2: "REACT"
                }
            ],
            name: " Mrityunjay Pathak",
            time: "asked 2 month ago",
            votes: "9 Likes",
            answer: "1 answer",
            views: "5 views"
        },
        {
            id: 4,
            title: "Next JS router",
            tag: [
                {
                    tag1: "NEXTJS",
                    tag2: "REACT"
                }
            ],
            name: " Mrityunjay Pathak",
            time: "asked 1 month ago",
            votes: "29 Likes",
            answer: "29 answer",
            views: "20 views"
        },
        {
            id: 5,
            title: "Competition Hosting",
            tag: [
                {
                    tag1: "NEXTJS",
                    tag2: "REACT"
                }
            ],
            name: " Mrityunjay Pathak",
            time: "asked 3 month ago",
            votes: "91 Likes",
            answer: "9 answer",
            views: "501 views"
        },
        {
            id: 6,
            title: "Accomplishments",
            tag: [
                {
                    tag1: "NEXTJS",
                    tag2: "REACT"
                }
            ],
            name: " Mrityunjay Pathak",
            time: "asked 2 month ago",
            votes: "19 Likes",
            answer: "9 answer",
            views: "150 views"
        },

    ]

    const [isSearchPopupVisible, setIsSearchPopupVisible] = useState(false);

    const [isNotificationPopupVisible, setIsNotificationPopupVisible] = useState(false);
    const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);

    const toggleSearchPopup = () => {
        closeOtherPopups();
        setIsSearchPopupVisible(!isSearchPopupVisible);
    };


    const toggleNotificationPopup = () => {
        closeOtherPopups();
        setIsNotificationPopupVisible(!isNotificationPopupVisible);
    };

    const toggleProfilePopup = () => {
        closeOtherPopups();
        setIsProfilePopupVisible(!isProfilePopupVisible);
    };

    const closeOtherPopups = () => {
        setIsNotificationPopupVisible(false);
        setIsProfilePopupVisible(false);
    }

    return (
        <div>




            <Mobilemenu />
            <div className="flex sm:m-8 m-2">
                <Simplemenu style={{ color: "#fff" }} />


                <section className={`discussion das`} style={{ overflow: 'scroll', width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px", padding: "1rem 2rem" }}
                >
                    <div className="container">
                        <div className="discussion-section">
                            <div className="top-section">

                                {/* <!-- BEGIN: Top Bar --> */}
                                <div className="relative z-[51] flex h-[67px] items-center border-b border-slate-200" style={{marginTop:"-47px"}}>

                                    <div aria-label="breadcrumb" className=" -intro-x mr-auto hidden sm:flex">
                                        <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                            <li className="">
                                                <a href="/">Application</a>
                                            </li>
                                            <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                <a href="/discussions">Discussions</a>
                                            </li>

                                        </ol>
                                    </div>
                                    {/* <!-- BEGIN: Search --> */}
                                    <div className="search intro-x relative mr-3 sm:mr-6" style={{ backgroundColor: "transparent" }}>
                                        <div className="relative hidden sm:block" >
                                            <input data-tw-merge="" type="text" placeholder="Search..." className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70" onClick={toggleSearchPopup} />
                                            <Search data-tw-merge="" data-lucide="search" className="stroke-1.5 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600 dark:text-slate-500" />
                                        </div>
                                        {isSearchPopupVisible && <SearchPopup />}
                                    </div>
                                    {/* <!-- END: Search  --> */}


                                    {/* <!-- BEGIN: Notifications --> */}
                                    <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative intro-x mr-auto sm:mr-6">
                                        <div data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer relative block text-slate-600 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"><i data-tw-merge="" data-lucide="bell" className="stroke-1.5 w-5 h-5 dark:text-slate-500" onClick={toggleNotificationPopup}><BellRing /></i></div>
                                        {isNotificationPopupVisible && <NotificationPopup />}
                                    </div>
                                    {/* <!-- END: Notifications  --> */}


                                    {/* <!-- BEGIN: Profile Menu --> */}
                                    <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative">
                                        <button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg" onClick={toggleProfilePopup}><img src={profile4} alt="Midone - Tailwind Admin Dashboard Template" /></button>
                                        {isProfilePopupVisible && <ProfilePopup />}
                                    </div>
                                    {/* <!-- END: Profile Menu --> */}

                                </div>
                                {/* <!-- END: Top Bar --> */}

                                <div className="discussion-details">
                                    <div className="discussion-content">
                                        <h1 className="main-title">Discussions</h1>
                                        <p className="discussion-para">Discuss the Kaggle platform & machine learning topics - this includes sharing feedback, asking questions, and more.</p>
                                        <Link to="#" className='btn'>
                                            <div className='w-[155px] justify-center mt-4' style={{ borderRadius: "20px", padding: "8px 16px 8px 20px", border: "1px solid black" }}>
                                                <div className=" text-[14px] font-medium mx-auto" >Your Discussions</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="datasets-image">
                                        <img src={img1} alt="logo-1" width={220} height={170} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex  gap-4 ' >
                            <Link to="/discussions/community"> <button
                                className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                                style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                            >
                                <span className='ml-2 text-[14px] flex flex-row gap-1'> Community   <Boxes size={20}/></span>
                            </button></Link>

                            <Link to="/discussions/community"> <button
                                className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                                style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                            >
                                <span className='ml-2 text-[14px] flex flex-row gap-1'>Collections <LibraryBig size={20}/></span>
                            </button></Link>


                            <Link to="/discussions/community"> <button
                                className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                                style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                            >
                                <span className='ml-2 text-[14px] flex flex-row gap-1'>Find Jobs  <SquareMousePointer size={20}/></span>
                            </button></Link>

                            <button
                                className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                                style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                                onClick={toggleModal}

                            >
                                <span className='ml-2 text-[14px] flex flex-row gap-1'>Tags  <Tags size={20}/></span>
                            </button>
                            {isOpen && (
                        <div className="fixed inset-0 flex justify-center items-center z-50">
                          <div className="absolute inset-0 bg-black opacity-50"></div>
                          <div className="dataform bg-white sm:bg-red-400 p-8 rounded shadow-md z-50">
                            <h2 className="text-2xl font-bold mb-4">Select Tags</h2>
                            <form onSubmit={handleSubmit}>
                              <div className="mb-4">

                              <div className='flex mb-6'>
                {/* <span className='flex items-center  mr-3' style={{padding:"6px 12px" ,backgroundColor: "#1e40ad", color: "white", fontSize: "14px" , borderRadius:"16px" }}><ArrowDownNarrowWide size={16}/><span className='ml-2'>Filters</span> </span> */}
               
                <div className="flex flex-row flex-wrap gap-4 mainy m-1 mr-2">
                <span
                  className="bg-darkblue-100 mr-3 hover:bg-blue-600 text-white font-[600] flex justify-center items-center"

                  style={{ borderRadius: "20px", padding: "0px 16px 0px 12px" }}
                >
                  <ArrowDownNarrowWide /> <span className='ml-2  text-[14px]'>Filters</span>
                </span>
                  {data.map((item) => (
                    <div
                      className=" flex mr-3"
                      key={item.id}
                    >
                      <button
                        onClick={() => handle(item.id)}
                        style={{ borderRadius: "16px", padding: "6px 12px" }}
                        className={`text-[14 px] font-[400] border border-gray-400  ${buttonStates[item.id] ? 'bg-darkblue-100 text-white ' : 'bg-white text-black'}`}
                      >
                        {item.title}
                      </button>
                    </div>
                  ))}
                </div>
</div>


                                
                              </div>
                              <div className="text-right">
                                <button
                                  className="bg-blue-600 hover:bg-darkblue-200 text-white font-bold py-2 px-4 rounded mr-2"
                                //   type="submit"
                                >
                                  Submit
                                </button>
                                <button
                                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                                  onClick={toggleModal}
                                >
                                  Cancel
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}


                        </div>
                    </div>


                    {/* stackoverflow part */}


                    <div>
                        <div className='dis-stack'>
                            <div className='dis-head flex'>
                                <h1 className='main-title text-[2.1rem]'>All Questions</h1>
                                <button
                                    className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                                    onClick={() => setvisible(true)}
                                    style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                                >
                                  <FaPlus className='plus-icon' />  <span className='ml-2 text-[14px]'>Ask a Question</span>
                                </button>

                                <Model isOpen={visible} onRequestClose={() => setvisible(true)}
                                    style={{


                                        content: {
                                            // position: "absolute",
                                            background: "white",
                                            zIndex: "2",
                                            display: "flex",
                                            // justifyContent: "center",
                                            color: "black",
                                            width: "500px",
                                            marginLeft: "500px"

                                        }
                                    }}
                                >

                                    <form className='formpaper'>

                                        <div className='paperbut'>
                                            <button onClick={() => setvisible(false)}>
                                                X
                                            </button>
                                        </div>
                                        <div className='research-intake'>


                                            <div className='dis-form-labe'>
                                                <h1 className='dis-he' style={{ marginTop: "-50px", color: "white", fontSize: "24px" }}> Ask a Question</h1>
                                            </div>
                                            <div className='dis-form-labe'>
                                                <label>Question Title : </label>
                                                <input type='text' className=' w-full' style={{ height: "40px", margin: "5px 0", color: "black" }} />
                                                <p style={{ fontSize: "12px", color: "#f4f6f8" }}>Be specific and imagine you're asking a question to another person.</p>
                                            </div>

                                            <div className='dis-form-labe'>
                                                <label >Detail Explaination of Your Problem: </label>
                                                <textarea type="text" className='w-full' style={{ height: "150px", margin: "5px 0", color: "black" }}></textarea>
                                                <p style={{ fontSize: "12px", color: "#f4f6f8" }}>Introduces the problem and expand on what you put in the title. Minimum 20 characters.</p>
                                            </div>

                                            <div className='dis-form-labe'>
                                                <label>Tags: </label>
                                                <input type='text' className='w-full' style={{ height: "30px", margin: "5px 0", color: "black" }} />
                                                <p style={{ fontSize: "12px", color: "#f4f6f8" }}>Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.</p>
                                            </div>

                                        </div>

                                        <div style={{ position: "relative" }}>
                                            <button className='research-submit'>Submit</button>
                                        </div>
                                    </form>


                                </Model>

                            </div>

                            <div className='dis-search'>
                                <div className="flex min-h-[56px] items-center gap-4 rounded-[5px] px-8  border border-gray-300" style={{ borderRadius: "5px", fontSize: "20px", padding: "5px", backgroundColor:"#f1f5f9"}}>


                                    <input
                                        className="dis-se flex h-10 w-full rounded-md border-none px-8 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-center my-1 bg-white font-medium"
                                        placeholder="Search for Questions"
                                        type="text"
                                        style={{backgroundColor:""}}
                                    />
                                    <div className='pr-6'>

                                        <Search size={24} />
                                    </div>
                                </div>
                                {/* <input className='dis-sea' type='text' placeholder='Search for Question'/> */}
                            </div>

                            <div className='dis-question '>

                                {
                                    questions.map((item) => (
                                        <div className=' transform transition-transform duration-300 hover:scale-105' style={{ borderRadius: "5px", marginBottom: "30px" ,backgroundColor:"white" }} key={item.id}>
                                            <div className='dis-card' style={{ borderRadius: "5px", marginBottom: "30px" }}>
                                                <div className=''>
                                                    <h2 className='dis-card-head pb-1'>{item.title}</h2>
                                                </div>

                                                <div className='dis-card-tag'>
                                                    <div className='dis-card-tag1 text-center'>NEXTJS</div>
                                                    <div className='dis-card-tag1 text-center'>SSR</div>
                                                </div>

                                                <div className='flex' style={{ justifyContent: "space-between", marginTop: "10px" }}>

                                                    <div className='flex'>
                                                        <></>
                                                        <span style={{ fontSize: "14px", color: "black" }}>{item.name}</span>
                                                        <Dot />
                                                        <span>{item.time}</span>
                                                    </div>

                                                    <div className='flex'>
                                                        <div className='flex' style={{ marginRight: "10px", }}>
                                                            <ThumbsUp />
                                                            <span style={{ marginTop: "5px" }}>{item.votes}</span>
                                                        </div>

                                                        <div className='flex' style={{ marginRight: "10px", }}>
                                                            <MessageCircle />
                                                            <span style={{ marginTop: "5px" }}>{item.answer}</span>
                                                        </div>

                                                        <div className='flex' style={{ marginRight: "10px", }}>
                                                            <Eye />
                                                            <span style={{ marginTop: "5px" }}>{item.views}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    {/* end of stack overflow */}








































                    {/* <div className='container'>
                                <div className="trending-section">
                                    <div className="top-trending top-learning">
                                        <div className="trending-logo">
                                            <img src={forumImg} alt="logo" className="timeline-icon" />
                                            <h1 className="trending-title">Forums</h1>
                                        </div>
                                    </div>
                                </div>
                                {
                                    forumData.map(data => {
                                        return (
                                            <NavLink to="#" key={data.id}>
                                                <ForumList  {...data} />
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                            <div className="container">
                                <div className="trending-section second">
                                    <div className="top-trending top-learning">
                                        <div className="trending-logo ">
                                            <div className="discuss-logo">
                                                <img src={groupImg} alt="discussion" /></div>
                                            <h1 className="trending-title">Discussions across BharatAi</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="outer-section">
                                <div className="filter-section">
                                    <FilterSearchBar btnData={btnData[0]} />
                                    <div className="option-section">
                                        {
                                            data.map((data) => {
                                                return (
                                                    <NavLink to="#" key={data.id}>
                                                        <div className="options">{data.title}
                                                        </div>
                                                    </NavLink>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                {
                                    discussData.map(data => {
                                        return (
                                            <NavLink to="#" key={data.id}>
                                                <DiscussionList {...data} />
                                            </NavLink>
                                        )
                                    })
                                }
                            </div> */}
                </section>
            </div>
        </div>
    )
}
