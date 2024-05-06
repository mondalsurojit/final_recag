import React from 'react'
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
import { FilterSearchBar } from '../FilterSearchBar';
import { GoTriangleUp } from 'react-icons/go';
import { NavLink, Link } from 'react-router-dom';

import "../css/vendors/tippy.css"
import "../css/vendors/litepicker.css"
import "../css/vendors/tiny-slider.css"
import "../css/themes/rubick/side-nav.css"
import "../css/vendors/leaflet.css"
import "../css/vendors/simplebar.css"
import "../css/components/mobile-menu.css"
import Mobilemenu from '../Dashboard/Mobilemenu'
import profile4 from "../image/fakers/profile-4.jpg"
import { BellRing, Search } from 'lucide-react';

function Community() {

    const btnData = [
        { searchData: "Search datasets" }
    ]

    const data = [
        {
            id: 1,
            title: "Your Activity"
        },
        {
            id: 2,
            title: "Bookmarks"
        },
        {
            id: 3,
            title: "Beginners"
        },
        {
            id: 4,
            title: "Data Visualization"
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
            title: "Neural Networks"
        },
        {
            id: 8,
            title: "More Filters"
        }
    ];
     const forumData = [
        {
            id: 1,
            image: img2,
            title: "General",
            time: "2 hours",
            user1: " Mrityunjay Pathak",
            user2: "Akshat Gupta",
            user3: "Charan Reddy007",
            subtitle: "Announcements, resources, and interesting discussions",
        },
        {
            id: 2,
            image: img3,
            title: "Getting Started",
            time: "2 hours",
            user1: " Mrityunjay Pathak",
            user2: "Akshat Gupta",
            subtitle: "The first stop for new Kagglers",
        },
        {
            id: 3,
            image: img4,
            title: "Product Feedback",
            time: "12 hours",
            user1: " Mrityunjay Pathak",
            user2: "Akshat Gupta",
            subtitle: "Tell us what you love, hate, and wish for",
            recent: "Recent Topics by User1,User2,User3"
        },
        {
            id: 4,
            image: img5,
            title: "Questions and Answers",
            time: "an hour",
            user1: " Mrityunjay Pathak",
            user2: "Akshat Gupta",
            subtitle: "Technical advice from other data scientists",
            recent: "Recent Topics by User1,User2,User3"
        },
        {
            id: 5,
            image: img6,
            title: "Competition Hosting",
            time: "7 days",
            user1: " Mrityunjay Pathak",
            user2: "Akshat Gupta",
            subtitle: "Advice and support on running your own competitions",
        },
        {
            id: 6,
            image: img7,
            title: "Accomplishments",
            time: "2 hours",
            user1: " Mrityunjay Pathak",
            user2: "Akshat Gupta",
            subtitle: "Celebrate success , share achievements!",
        },

    ]
    const discussData = [
        {
            id: 1,
            title: "World Record? 5 Days Kaggle Expert Record!!! ",
            time: "2 hours",
            user1: " Mrityunjay Pathak",
            user2: "Akshat Gupta",
            rating: 37,
            comments: 49
        },
        {
            id: 2,
            title: "Top 1000 Notebook in just 7 Days",
            time: "2 hours",
            user1: " Mrityunjay Pathak",
            user2: "Akshat Gupta",
            rating: 34,
            comments: 78
        },
        {
            id: 3,
            title: "I have become an expert in Kaggle Notebooks",
            time: "2 hours",
            user1: " Mrityunjay Pathak",
            user2: "Akshat Gupta",
            rating: 47,
            comments: 59
        },
    ] 

  return (
    <div>
        
    
    
        <div>




            <Mobilemenu />
            <div className="mt-[4.7rem] flex md:mt-0">
                {/* <Simplemenu style={{ color: "#fff" }} /> */}


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
                                                <a href="/">Discussion</a>
                                            </li>
                                            <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                <a href="/">Community</a>
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
                                        <Link to="/discussions" className='btn'>
                                            <div className="">
                                            <button className='dis-but'>Ask a Question</button>
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








































                    <div className='container'>
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
                            </div>
                </section>
            </div>
        </div>
 
    </div>
  )
}



const ForumList = (data) => {
    const {image, title, subtitle, time, user1, user2, user3} = data;
            return (
            <div className="discussion-list">
                <div className='listview'>
                    <img src={image} alt="logo" />
                    <div className="discussion-main">
                        <div className="discussion-title">{title}</div>
                        <div className="discussion-desc">{subtitle}</div>
                        <div className="discussion-time">Last <Link to="#" className="lined">post</Link> {time} ago by {user1}</div>
                    </div>
                </div>
                <div className='rightview'>
                    <div className="user-images">
                        <div className="user1" />
                        <div className="user2" />
                        <div className="user3" />
                    </div>
                    <div className="user-topics">
                        Recent Topics by {user1},{user2},{user3}
                    </div>
                </div>
            </div>
            )
}
const DiscussionList = (data) => {
    const {title, time, user1, rating, comments} = data;
            return (
            <div className="discussion-list">
                <div className='listview'>
                    <div className="user" />
                    <div className="discussion-main list">
                        <div className="discussion-title">{title}</div>
                        <div className="discussion-desc">
                            <div className="dis-desc-1"><Link to="#" className="lined">{user1}</Link> {" . "} in <Link to="#" className="lined">Accomplishments</Link></div>
                            <div className="dis-desc-2">{" . "}Last <Link to="#" className="lined">comment</Link> {time} ago by {user1}</div>
                        </div>
                    </div>
                </div>
                <div className='right-view'>
                    <div className="rating">
                        <div className="rating-icon" title="upvote"><GoTriangleUp className='inc-icon' /></div>
                        <div className="rating-number">{rating}</div>
                    </div>
                    <div className="user-content">
                        <div className="comments">
                            {comments} comments {" . "}
                        </div>
                        <div className="dots">
                            <Link to="#"><img src={img8} alt="logo8" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            )
}

export default Community