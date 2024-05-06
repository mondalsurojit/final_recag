import React from 'react'
import './Blog.css'
import { NavLink } from 'react-router-dom'
import img1 from '../../assets/blog-icon1.svg'
import img2 from '../../assets/blog-img1.png'
import img3 from '../../assets/blog-img2.png'
import img4 from '../../assets/blog-search.svg'
import img5 from '../../assets/blog-twitter.svg'
import img6 from '../../assets/blog-fb.svg'
import img7 from '../../assets/blog-img7.png'
import img8 from '../../assets/blog-img8.jpg'
import img9 from '../../assets/blog-img9.jpg'
import img10 from '../../assets/blog-img10.jpg'
import img11 from '../../assets/blog-img11.jpg'
import img12 from '../../assets/blog-img12.jpg'
import img13 from '../../assets/blog-img13.jpg'
import img14 from '../../assets/blog-img14.png'
import img15 from '../../assets/blog-img155.jpg'


import "../css/vendors/tippy.css"
import "../css/vendors/litepicker.css"
import "../css/vendors/tiny-slider.css"
import "../css/themes/rubick/side-nav.css"
import "../css/vendors/leaflet.css"
import "../css/vendors/simplebar.css"
import "../css/components/mobile-menu.css"
import Mobilemenu from '../Dashboard/Mobilemenu'
import Simplemenu from '../Dashboard/Simplemenu'
import { BellRing, Search } from 'lucide-react'
import profile4 from "../image/fakers/profile-4.jpg"


const BlogsListData = [
    {
        id: 1,
        title: "When his hobbies went on hiatus, this Kaggler made fighting COVID-19 with data his mission",
        desc: "With sports (and everything else) cancelled, Kaggler David Mezzetti finds purpose in Kaggle's CORD-19 Challenges",
        image: img8,
        date: "July 30,2020",
        time: "8 min"
    },
    {
        id: 2,
        title: "Gaining a sense of control over the COVID-19 pandemic | A Winner's Interview with Daniel Wolffram",
        desc: "How one Kaggler took top marks across multiple Covid-related challenges.",
        image: img9,
        date: "July 23,2020",
        time: "8 min"
    },
    {
        id: 3,
        title: "Top Marks for Student Kaggler in Bengali.AI | A Winner's Interview with Linsho Kaku",
        desc: "Kaggler, deoxy takes 1st place and sets the stage for his next competition.",
        image: img10,
        date: "April 21,2020",
        time: "4 min"
    },
    {
        id: 4,
        title: "First-time Competitor to Kaggle Grandmaster Within a Year | A Winner's Interview with Limerobot",
        desc: "Join us in congratulating Sanghoon Kim aka Limerobot on his third place finish in Booz Allen Hamilton’s 2019 Data Science Bowl.",
        image: img11,
        date: "March 24,2020",
        time: "7 min"
    },
    {
        id: 5,
        title: "“The 3 ingredients to our success.” | Winners dish on their solution to Google's QUEST Q&A Labeling",
        desc: "First place foursome, ‘Bibimorph’ share their winning approach to the Quest Q&A Labeling competition by Google, and more!",
        image: img12,
        date: "March 4,2020",
        time: "10 min"
    },
    {
        id: 6,
        title: "Uni Friends Team Up & Give Back to Education — Making Everyone a Winner | Kaggle Interview",
        desc: "Congratulations to the winningest duo of the 2019 Data Science Bowl, ‘Zr’, and Ouyang Xuan (Shawn), who took first place and split 100K",
        image: img13,
        date: "Feb 27,2020",
        time: "4 min"
    },
    {
        id: 7,
        title: "From Football Newbies to NFL (data) Champions | A Winner’s Interview with The Zoo",
        desc: "In our first winner’s interview of 2020, we’d like to congratulate The Zoo on their first place win in the NFL Big Data Bowl competition…",
        image: img13,
        date: "Jan 28,2020",
        time: "16 min"
    },
    {
        id: 8,
        title: "Instacart Market Basket Analysis",
        desc: "Winner’s Interview: 2nd place, Kazuki Onodera",
        image: img14,
        date: "Jan 8,2020",
        time: "11 min"
    },
    {
        id: 9,
        title: "Two Sigma Financial Modeling Code Competition, 5th Place Winners’ Interview: Team Best Fitting |…",
        desc: "Originally published: 05.11.2017",
        image: img15,
        date: "Dec 6,2020",
        time: "8 min"
    },
]

export default function Blog() {

    return (
        <div>




            <Mobilemenu />
            <div className="mt-[4.7rem] flex md:mt-0">
                <Simplemenu style={{ color: "#fff" }} />

                <section className={`blog das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px" }}
                >


                    {/* <!-- BEGIN: Top Bar --> */}
                    <div className="relative z-[51] flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "3px", padding: "0 20px" ,zIndex:"0"}}>

                        {/* <!-- BEGIN: Breadcrumb --> */}
                        <div aria-label="breadcrumb" className="flex -intro-x mr-auto hidden sm:flex">
                            <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                <li className="">
                                    <a href="/">Application</a>
                                </li>
                                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                    <a href="/">Blog</a>
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

                    
                    <div className="hero-container">
                        <a href="/">
                            <div className="blog-hero">
                                <div className="hero-img">
                                    <img src={img2} alt="blog-img" />
                                </div>
                            </div>
                        </a>
                        <div className="blog-links">
                            <div className="links-left-section">
                                <div className="buttons-links">
                                    <a href="/"><div className="first-btn">
                                        COMPETITION STORIES</div></a>
                                    <a href="/"><div className="second-btn">
                                        JOIN A COMPETITION</div></a>
                                </div>
                            </div>
                            <div className="links-right-section">
                                <a href="/"><div className="searchicon">
                                    <img src={img4} alt="link-images" />
                                </div></a>
                                <a href="/"><div className="twitter-icon">
                                    <img src={img5} alt="link-images" />
                                </div></a>
                                <a href="/"><div className="facebook-icon">
                                    <img src={img6} alt="link" />
                                </div></a>
                                <div className="follow">
                                    follow
                                </div>
                            </div>
                        </div>
                        <div className="blog-main">
                            <div className="blog-main-image">
                                <img src={img3} alt="main" />
                            </div>
                            <div className="blog-main-content">
                                <div className="main-title">I trained a model. What is next?</div>
                                <div className="main-description">This post was written by Vladimir Iglovikov, and is filled with advice that he wishes someone had shared when he was active on Kaggle.</div>
                                <div className="bottom-caption">
                                    <img src={img7} alt="user-logo" />
                                    <div className="caption-data">
                                        <div className="title">Kaggle Team</div>
                                        <div className="date">Sept 10,2020 {" . "} 11 min read</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid3">
                            {
                                BlogsListData.map(data => {
                                    return (
                                        <NavLink to={"/"} className="bloglist" key={data.id}>
                                            <BlogsList {...data} />
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                        <div className="bottom-links">
                            <a href='/'><div className="about-blog"><li>About Kaggle Blog</li></div></a>
                            <a href='/'><div className="latest-stories"><li>Latest Stories</li></div></a>
                            <a href='/'><div className="archive"><li>Archive</li></div></a>
                            <a href='/'><div className="about"><li>About Medium</li></div></a>
                            <a href='/'><div className="terms"><li>Terms</li></div></a>
                            <a href='/'><div className="privacy"><li>Privacy</li></div></a>
                            <a href='/'><div className="teams"><li>Teams</li></div></a>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}


const BlogsList = (data) => {
    const { title, desc, time, date, image } = data;
    return (
        <div className="blog-list">
            <div className="bloglist-image">
                <img src={image} alt="img8" />
            </div>
            <div className="bloglist-title">
                {`${title}`.slice(0, 60)}...
            </div>
            <div className="bloglist-para">
                {desc}
            </div>
            <div className="bottom-caption">
                <img src={img7} alt="user-logo" />
                <div className="caption-data">
                    <div className="title">Kaggle Team</div>
                    <div className="date">{date} {" . "} {time} read</div>
                </div>
            </div>
        </div>
    )
}

