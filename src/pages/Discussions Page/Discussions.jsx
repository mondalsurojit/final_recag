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
import { BellRing, Dot, Eye, MessageCircle, Search, ThumbsUp } from 'lucide-react';
import Model from "react-modal"

export default function Discussions() {

    const [visible, setvisible] = useState(false);

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

    return (
        <div>




            <Mobilemenu />
            <div className="flex sm:m-8 m-2">
                <Simplemenu style={{ color: "#fff" }} />


                <section className={`discussion das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px" }}
                >
                    <div className="container">
                        <div className="discussion-section">
                            <div className="top-section">

                                {/* <!-- BEGIN: Top Bar --> */}
                                <div className="relative z-[51] flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-28px", padding: "0 10px", zIndex: "0" }}>

                                    {/* <!-- BEGIN: Breadcrumb --> */}
                                    <div aria-label="breadcrumb" className="flex -intro-x mr-auto hidden sm:flex">
                                        <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                            <li className="">
                                                <a href="/">Application</a>
                                            </li>
                                            <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                <a href="/">Discussions</a>
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

                                <div className="discussion-details">
                                    <div className="discussion-content">
                                        <h1 className="main-title">Discussions</h1>
                                        <p className="discussion-para">Discuss the Kaggle platform & machine learning topics - this includes sharing feedback, asking questions, and more.</p>
                                        <Link to="#" className='btn'>
                                            <div className="button second">
                                                <div className="button-content"> Your Discussions</div>
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
                        <div className='flex pl-5' >
                            <Link to="/discussions/community"><button className='dis-but' style={{ marginRight: "10px" }}>Community</button></Link>
                            <button className='dis-but' style={{ marginRight: "10px" }}>Collections</button>
                            <button className='dis-but' style={{ marginRight: "10px" }}>Tag</button>
                            <button className='dis-but' style={{ marginRight: "10px" }}>Find Jobs</button>
                        </div>
                    </div>


                    {/* stackoverflow part */}


                    <div>
                        <div className='dis-stack'>
                            <div className='dis-head flex'>
                                <h1 className='dis-he'>ALL Questions</h1>
                                <button className='dis-but' onClick={() => setvisible(true)}>Ask a Questions</button>

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
<h1 className='dis-he' style={{marginTop:"-50px" , color:"white" , fontSize:"24px" }}> Ask a Question</h1>
    </div>
    <div className='dis-form-labe'>
        <label>Question Title : </label>
        <input type='text' className=' w-full' style={{height:"40px" , margin:"5px 0" , color:"black"}}/>
        <p style={{fontSize:"12px" , color:"#f4f6f8"}}>Be specific and imagine you're asking a question to another person.</p>
    </div>

    <div className='dis-form-labe'>
        <label >Detail Explaination of Your Problem: </label>
        <textarea type="text" className='w-full' style={{height:"150px" , margin:"5px 0" , color:"black"}}></textarea>
        <p style={{fontSize:"12px" , color:"#f4f6f8"}}>Introduces the problem and expand on what you put in the title. Minimum 20 characters.</p>
    </div>

    <div className='dis-form-labe'>
        <label>Tags: </label>
        <input type='text' className='w-full' style={{height:"30px" , margin:"5px 0" , color:"black"}}/>
        <p style={{fontSize:"12px" , color:"#f4f6f8"}}>Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.</p>
    </div>

</div>

<div style={{ position:"relative"}}>
    <button className='research-submit'>Submit</button>
</div>
</form>


                                </Model>

                            </div>

                            <div className='dis-search'>
                                <div className="flex min-h-[56px] items-center gap-4 rounded-[5px] px-4 bg-white border border-gray-300" style={{ borderRadius: "5px", fontSize: "20px", padding: "5px" }}>

                                    <Search size={24} />
                                    <input
                                        className="dis-se flex h-10 w-full rounded-md border-none px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                                        placeholder="Search for Questions"
                                        type="text"
                                        value=""
                                    />
                                </div>
                                {/* <input className='dis-sea' type='text' placeholder='Search for Question'/> */}
                            </div>

                            <div className='dis-question '>

                                {
                                    questions.map((item) => (
                                        <div className='bg-white ' style={{ borderRadius: "5px", marginBottom: "30px" }} key={item.id}>
                                            <div className='dis-card' style={{ borderRadius: "5px", marginBottom: "30px" }}>
                                                <div className=''>
                                                    <h2 className='dis-card-head'>{item.title}</h2>
                                                </div>

                                                <div className='dis-card-tag'>
                                                    <div className='dis-card-tag1'>NEXTJS</div>
                                                    <div className='dis-card-tag1'>SSR</div>
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
