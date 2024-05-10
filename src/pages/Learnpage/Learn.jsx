import React, { useContext, useState } from 'react'
import { AppContext } from '../context/context';
import './Learn.css';
import { MdOutlineViewList, MdOutlineCalendarViewMonth } from "react-icons/md";
import img1 from '../../assets/learn-img1.svg'
import img2 from '../../assets/learn-img2.svg'
import img3 from '../../assets/learn-img3.svg'
import img4 from '../../assets/course-img1.svg';
import img5 from '../../assets/course-img2.svg';
import img6 from '../../assets/course-img3.svg';
import img7 from '../../assets/course-img4.svg';
import img8 from '../../assets/course-img5.svg';
import img9 from '../../assets/course-img6.svg';
import img10 from '../../assets/course-img7.svg';
import img11 from '../../assets/course-img8.svg';
import img12 from '../../assets/course-img9.svg';
import img13 from '../../assets/course-img10.svg';
import img14 from '../../assets/course-img11.svg';
import img15 from '../../assets/course-img12.svg';
import img16 from '../../assets/learn-guide-img1.svg';
import img17 from '../../assets/learn-guide-img2.svg';
import img18 from '../../assets/learn-guide-img3.svg';
import img19 from '../../assets/learn-guide-img4.svg';
import img20 from '../../assets/learn-guide-img5.svg';
import img21 from '../../assets/learn-guide-img6.svg';
import { ListView } from '../ListView';
import { GridView } from '../GridView';
import { GridView2 } from '../Gridview2';
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
import { BellRing, GripVertical, Search } from 'lucide-react';
import { FaPlus } from 'react-icons/fa';

import Model from "react-modal"

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {  Paper } from '@mui/material';
import Basicstep1 from './steps/Basicstep1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
// import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
const steps = [
    'BASIC',
    'CURRICULUM',
    'MEDIA',
    // 'PRICE',
    'PUBLISH'
];

export default function Learn() {
    const { gridView, setGridView, setGridView2, gridView2 } = useContext(AppContext);

    const [currentStep, setCurrentStep] = useState(0);

    const handleclick = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleprevious = () => {
        console.log("ok")
        setCurrentStep(currentStep - 1);
    };

    const getcurrentstep = (currentStep) =>{

        switch (currentStep) {
            case 0: return <Basicstep1 handleclick={handleclick}/>;

            case 1: return <Step2 handleclick={handleclick} handleprevious={handleprevious}/>;

            case 2: return <Step3 handleclick={handleclick} handleprevious={handleprevious}/>;


            // case 3: return <Step4 handleclick={handleclick} handleprevious={handleprevious}/>;

            case 3: return <Step5 handleclick={handleclick} handleprevious={handleprevious}/>
            break;

            default: return <Basicstep1 handleclick={handleclick}/>;

        
        }
    }
    const learnData = [
        {
            id: 1,
            image: img4,
            title: "Intro to Programming",
            time: "5 hours",
            project: "! guided project",
            prerequisite: "No prerequisites",
            subtitle: "Get started with Python, if you have no coding experience.",
        },
        {
            id: 2,
            image: img5,
            title: "Python",
            time: "5 hours",
            link: "Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 3,
            image: img6,
            title: "Intro to Machine Learning",
            time: "5 hours",
            link: "Python",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 4,
            image: img7,
            title: "Pandas",
            time: "5 hours",
            link: "Python",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 5,
            image: img8,
            title: "Intermediate Machine Learning",
            time: "4 hours",
            link: "Intro to Machine Learning",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 6,
            image: img9,
            title: "Data Visualization",
            time: "5 hours",
            prerequisite: "No prerequisite",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 7,
            image: img10,
            title: "Featured Engineering",
            time: "4 hours",
            link: "Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 8,
            image: img11,
            title: "Intro to SQL",
            time: "3 hours",
            link: "Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 9,
            image: img12,
            title: "Advanced SQL",
            time: "5 hours",
            link: "Intro to SQL",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 10,
            image: img13,
            title: "Intro to Deep Learning",
            time: "5 hours",
            link: "Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 11,
            image: img14,
            title: "Computer Vision",
            time: "5 hours",
            link: "Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        },
        {
            id: 12,
            image: img15,
            title: "Time Series",
            time: "5 hours",
            link: "Intro to Programming",
            subtitle: "Learn the most important language for data science..",
        }

    ]
    const courseData = [
        {
            id: 1,
            image: img16,
            title: "JAX Guide",
            subtitle: "JAX is a library for high-performance machine learning."
        },
        {
            id: 2,
            image: img17,
            title: "TensorFlow Guide",
            subtitle: "TensorFlow is a library for developing and training machine learning models."
        },
        {
            id: 3,
            image: img18,
            title: "Transfer Learning for CV Guide",
            subtitle: "Transfer Learning is the practice of using a pre-trained model towards a new task."
        },
        {
            id: 4,
            image: img19,
            title: "Kaggle Competitions Guide",
            subtitle: "Kaggle Competitions are machine learning challenges, often with large prizes."
        },
        {
            id: 5,
            image: img20,
            title: "Natural Language Processing Guide",
            subtitle: "NLP is a subfield of ML concerned with understanding text."
        },
        {
            id: 6,
            image: img21,
            title: "R Guide",
            subtitle: "R is a programming language for statistical analysis and visualization."
        },
    ]

    const utubecard = [
        {
            id: "1",
            video: "https://www.youtube.com/embed/uL4girSQ-fU?si=HZIh3XvbDvCmeL81",
            title: "The course name can: Shown here",
            category: "category",
            subcategory: "sub-category",
            name: "provider name",
            price: "price"
        },
        {
            id: "2",
            video: "https://www.youtube.com/embed/Kc0IRQBqB0A?si=Kcmlz7wpFiQrWlCb",
            title: "The course name can: Shown here",
            category: "category",
            subcategory: "sub-category",
            name: "provider name",
            price: "price"
        },
        {
            id: "3",
            video: "https://www.youtube.com/embed/uL4girSQ-fU?si=HZIh3XvbDvCmeL81",
            title: "The course name can: Shown here",
            category: "category",
            subcategory: "sub-category",
            name: "provider name",
            price: "price"
        },
        {
            id: "4",
            video: "https://www.youtube.com/embed/Kc0IRQBqB0A?si=Kcmlz7wpFiQrWlCb",
            title: "The course name can: Shown here",
            category: "category",
            subcategory: "sub-category",
            name: "provider name",
            price: "price"
        },

    ]

    const [visible, setvisible] = useState(false);
    return (
        <div>




            <Mobilemenu />
            <div className="flex sm:m-8 m-2">
                <Simplemenu style={{ color: "#fff" }} />
                <section className={`learn das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px" }}
                >
                    <div className="container">
                        <div className="learn-section">
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
                                                <a href="/">Courses</a>
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

                                <div className="learn-details">
                                    <div className="learn-content">
                                        <h1 className="main-title">Learn</h1>
                                        <p className="learn-para">Gain the skills you need to do independent data science projects.</p>
                                    </div>
                                    <div className="datasets-image">
                                        <img src={img1} alt="logo-1" />
                                    </div>
                                </div>


                                <div className='buttons' style={{ padding: "20px" }}>
                                    <div className="button first" style={{ backgroundColor: " #1e40ad " }}>
                                        <FaPlus className='plus-icon' />
                                        <button style={{ color: "white" }} onClick={() => setvisible(true)}>
                                            <div style={{ color: "white" }}>Add Paper</div>
                                        </button>

                                        <Model isOpen={visible} onRequestClose={() => setvisible(false)}

                                            style={{


                                                content: {
                                                    background: "white",
                                                    zIndex: "2",
                                                    display: "flex",
                                                    color: "black",
                                                    width: "1100px",
                                                    marginLeft: "200px"

                                                }
                                            }}
                                        >

                                            <form className='formpape'>

                                                <div className='paperbut'>
                                                    <button onClick={() => setvisible(false)}>
                                                        X
                                                    </button>
                                                </div>


                                                <div style={{ marginTop: "70px" }}>
                                                    <h1 style={{ color: "black", fontSize: "20px", fontWeight: "500", marginLeft: "30px" }}> Create New Courses </h1>
                                                    <Box sx={{ width: '100%', marginTop: "30px" }}>
                                                        <Stepper activeStep={currentStep} alternativeLabel>
                                                            {steps.map((label) => (
                                                                <Step key={label}>
                                                                    <StepLabel>{label}</StepLabel>
                                                                </Step>
                                                            ))}
                                                        </Stepper>
                                                    </Box>

                                                    <Box  style={{color:"black"}}>
                                                        {getcurrentstep(currentStep)}
                                                    </Box>
                                                </div>
                                            </form>

                                        </Model>



                                    </div>
                                    <div className="button second">
                                        <div className="button-content">Your Work</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="trending-section">
                            <div className="top-trending top-learning">
                                <div className="trending-logo">
                                    <img src={img3} alt="newsstand" className="timeline-icon" />
                                    <h1 className="trending-title">Courses</h1>
                                </div>
                                <div className="learn-view">
                                    <div className="learn-side-data learn-view" role="button" onKeyDown={() => setGridView(false)} onClick={() => setGridView(false)} tabIndex={0} >
                                        < MdOutlineViewList className='md-view' title='list view' />
                                    </div>
                                    <div className="learn-side-data learn-view" role="button" onKeyDown={() => setGridView(true)} onClick={() => setGridView(true)} tabIndex={0}>
                                        <MdOutlineCalendarViewMonth className='md-view' title='grid view' />
                                    </div>
                                </div>
                            </div>
                            <div className="learn-desc">
                                <p className="learn-para">We pare down complex topics to their key practical components, so you gain usable skills in a few hours (instead of weeks or months). The courses are provided at no cost to you, and you can now earn certificates. <a href="/" className="lined"> Learn more</a>.</p>
                            </div>
                            {
                                gridView ?
                                    (<>
                                        <div className="learn-grid4">
                                            {
                                                learnData.map((data) => {
                                                    return (
                                                        <GridView key={data.id} {...data} />

                                                    )
                                                })
                                            }
                                        </div>
                                    </>) :
                                    (
                                        learnData.map((data) => {
                                            return (<ListView key={data.id} {...data} />)
                                        })
                                    )
                            }

                        </div>
                        <div className="trending-section second">
                            <div className="top-trending top-learning">
                                <div className="trending-logo">
                                    <img src={img2} alt="newsstand" className="timeline-icon" />
                                    <h1 className="trending-title">Guide</h1>
                                </div>
                                <div className="learn-view">
                                    <div className="learn-side-data learn-view" onKeyDown={() => setGridView2(false)} onClick={() => setGridView2(false)} tabIndex={0} role="button">
                                        < MdOutlineViewList className='md-view' title='list view' />
                                    </div>
                                    <div className="learn-side-data learn-view" onKeyDown={() => setGridView2(true)} onClick={() => setGridView2(true)} tabIndex={0} role="button">
                                        <MdOutlineCalendarViewMonth className='md-view' title='grid view' />
                                    </div>
                                </div>
                            </div>
                            <div className="learn-desc">
                                <p className="learn-para">Explore these curated collections of high-quality learning resources authored by the Kaggle community. <a href="/" className="lined"> Learn more</a>.</p>
                            </div>
                            {
                                gridView2 ?
                                    (<>
                                        <div className="learn-grid4">
                                            {
                                                courseData.map((data) => {
                                                    return (
                                                        <GridView2 key={data.id} {...data} />

                                                    )
                                                })
                                            }
                                        </div>
                                    </>) :
                                    (
                                        courseData.map((data) => {
                                            return (<ListView key={data.id} {...data} />)
                                        })
                                    )
                            }

                        </div>


                    </div>



                    <div style={{ marginBottom: "20px", justifyContent: "space-between", margin: "10px" }} className='flex'>

                        {
                            utubecard.map((item) => (
                                <div className='course-card' key={item.id}>
                                    <div className='course-video'>
                                        <iframe
                                            width="290"
                                            height="150"
                                            src={item.video}
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                    <div style={{ padding: "10px" }}>
                                        <div className='flex course-line1'>
                                            <div>109k views</div>
                                            <div>15 days ago</div>
                                            <div><GripVertical /></div>
                                        </div>

                                        <h1 style={{ fontSize: "20px", color: "black", padding: "15px 0" }}>{item.title}</h1>

                                        <div style={{ fontSize: "18px" }}>{item.category} | {item.subcategory}</div>

                                        <div className='flex' style={{ justifyContent: "space-between", padding: "20px 0 10px", color: "black", fontSize: "15px" }}>
                                            <div>{item.name}</div>
                                            <div>{item.price}</div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </section>
            </div>
        </div>
    )
}
