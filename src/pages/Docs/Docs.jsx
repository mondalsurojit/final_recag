import React, { useState } from 'react'
import './Docs.css'
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
import { BellRing, Search } from 'lucide-react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Model from "react-modal"

export default function Docs() {

    const [visible, setvisible] = useState(false)

    const paper = [
        {
            id: "1",
            title: "Competitions",
            discription: "Find challenges for every Explore and run machine learning code with Kaggle Notebooks, a cloud computational environment that enables reproducible and collaborative analysis",
            name: "Mukesh Banarji",
            category: "Nlp",
            date: "22-09-24",
            link: "https://mdbootstrap.com/docs/standard/extended/sidebar/"
        },
        {
            id: "2",
            title: "Competitions",
            discription: "Find challenges for every Explore and run machine learning code with Kaggle Notebooks, a cloud computational environment that enables reproducible and collaborative analysis",
            name: "Mukesh Banarji",
            category: "Nlp",
            date: "22-09-24",
            link: "https://mdbootstrap.com/docs/standard/extended/sidebar/"
        },
        {
            id: "3",
            title: "Competitions",
            discription: "Find challenges for every Explore and run machine learning code with Kaggle Notebooks, a cloud computational environment that enables reproducible and collaborative analysis",
            name: "Mukesh Banarji",
            category: "Nlp",
            date: "22-09-24",
            link: "https://mdbootstrap.com/docs/standard/extended/sidebar/"
        },
        {
            id: "4",
            title: "Competitions",
            discription: "Find challenges for every Explore and run machine learning code with Kaggle Notebooks, a cloud computational environment that enables reproducible and collaborative analysis",
            name: "Mukesh Banarji",
            category: "Nlp",
            date: "22-09-24",
            link: "https://mdbootstrap.com/docs/standard/extended/sidebar/"
        },
        {
            id: "5",
            title: "Competitions",
            discription: "Find challenges for every Explore and run machine learning code with Kaggle Notebooks, a cloud computational environment that enables reproducible and collaborative analysis",
            name: "Mukesh Banarji",
            category: "Nlp",
            date: "22-09-24",
            link: "https://mdbootstrap.com/docs/standard/extended/sidebar/"
        },
        {
            id: "6",
            title: "Competitions",
            discription: "Find challenges for every Explore and run machine learning code with Kaggle Notebooks, a cloud computational environment that enables reproducible and collaborative analysis",
            name: "Mukesh Banarji",
            category: "Nlp",
            date: "22-09-24",
            link: "https://mdbootstrap.com/docs/standard/extended/sidebar/"
        },

    ]
    return (
        <div>




            <Mobilemenu />
            <div className="flex sm:m-8 m-2">
                <Simplemenu style={{ color: "#fff" }} />
                <section className={`docs-section das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px" }}
                >
                    <div className='container'>

                        {/* <!-- BEGIN: Top Bar --> */}
                        <div className="relative flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-28px", padding: "0 10px", zIndex: "0" }}>

                            {/* <!-- BEGIN: Breadcrumb --> */}
                            <div aria-label="breadcrumb" className="flex -intro-x mr-auto hidden sm:flex">
                                <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                    <li className="">
                                        <a href="/">Application</a>
                                    </li>
                                    <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                        <a href="/">Research Paper</a>
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
                        <div className="docs-heading">Some Research About Datasets</div>

                        <div className='buttons' style={{ padding: "20px" }}>
                            <div className="button first" style={{ backgroundColor: " #1e40ad " }}>
                                <FaPlus className='plus-icon' />
                                <button style={{ color: "white" }} onClick={() => setvisible(true)}>
                                    <div style={{ color: "white" }}>Add Paper</div>
                                </button>

                                <Model isOpen={visible} onRequestClose={() => setvisible(false)}

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


                                            <div className='research-data'>
                                                <label>Title : </label>
                                                <input type='text' className='research-input' style={{marginLeft:"70px"}}/>
                                            </div>

                                            <div className='research-data'>
                                                <label >Description <br/>of Paper  : </label>
                                                <textarea type="text" className='research-input'></textarea>
                                            </div>

                                            <div className='research-data'>
                                                <label>Name of <br/>Publisher : </label>
                                                <input type='text' className='research-input my-4' style={{marginLeft:"30px"}}/>
                                            </div>

                                            <div className='research-data'>
                                                <label>Category : </label>
                                                <input type='text' className='research-input' style={{marginLeft:"35px"}}/>
                                            </div>

                                            <div className='research-data'>
                                                <label>Year of <br/> Published : </label>
                                                <input type='date' className='research-input' style={{marginLeft:"30px"}}/>
                                            </div>

                                            <div className='research-data'>
                                                <label>Pdf Link : </label>
                                                <input type='text' className='research-input' style={{marginLeft:"45px"}}/>
                                            </div>
                                        </div>

                                        <div style={{ position:"relative"}}>
                                            <button className='research-submit'>Submit</button>
                                        </div>
                                    </form>

                                </Model>



                            </div>
                            <div className="button second">
                                <div className="button-content">Your Work</div>
                            </div>
                        </div>

                        <div className="docs-content">

                            {paper.map((item) => (
                                <div key={item.id}>
                                    <a href={item.link}>
                                        <div className="docs-card">
                                            <div className="docs-card-title">{item.title}</div>
                                            <div className="docs-card-para">{item.discription}</div>
                                            <div className='publisher-name'>{item.name}</div>
                                            <div className='Book-category'>{item.category}</div>
                                            <div className='published-year'>{item.date}</div>
                                        </div>
                                    </a>

                                </div>
                            ))}

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

