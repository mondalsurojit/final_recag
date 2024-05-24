import React, { useState } from 'react'
import './Team.css'
import img1 from '../../assets/member-1.jpg';
import img2 from '../../assets/member-2.jpg';
import img3 from '../../assets/member-3.jpg';
import img4 from '../../assets/member-4.jpg';
import img5 from '../../assets/member-5.jpg';
import img6 from '../../assets/member-6.jpg';
import img7 from '../../assets/member-7.jpg';
import img8 from '../../assets/member-8.jpg';
import Mobilemenu from '../Dashboard/Mobilemenu'
import Simplemenu from '../Dashboard/Simplemenu'
import { BellRing, Search } from 'lucide-react';
import profile4 from "../image/fakers/profile-4.jpg"
import SearchPopup from '../../components/search-popup.component';
import NotificationPopup from '../../components/notification-popup.component';
import ProfilePopup from '../../components/profile-popup.component';

export default function Team() {

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
            <div className=" flex sm:m-8 m-2">
                <Simplemenu />
                <section className={`team-section `} style={{ overflow: 'scroll', overflowX: "hidden", width: "100vw", backgroundColor: "#f1f5f9", borderRadius: "15px", padding: "2rem" }}>
                    <div className="team-container">
                        <div className="team-contents">


                             {/* <!-- BEGIN: Top Bar --> */}
                                <div className="relative z-[51] flex h-[67px] items-center border-b border-slate-200" style={{marginTop:"-37px"}}>

                                    <div aria-label="breadcrumb" className=" -intro-x mr-auto hidden sm:flex">
                                        <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                            <li className="">
                                                <a href="/">Application</a>
                                            </li>
                                            <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                                <a href="/model">Model</a>
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



                            <div className="team-title">
                                <h3 className="main">Meet Our Team</h3>
                            </div>
                            <div className="team-data grid-team">
                                <div className="member first">
                                    <a href="#">
                                        <img src={img1} alt="team-logo" />
                                    </a>
                                    <div className="team-content">
                                        <div className="mem-name">D. Sculley</div>
                                        <div className="designation">CEO</div>
                                        <div className="description">D. is the CEO at Kaggle. Prior to coming to Kaggle, he was a director at Google Brain, leading research teams working on robust, responsible, reliable and efficient ML and AI. In his career in ML, he has worked on nearly every aspect of machine learning, and has led both product and research teams including those on some of the most challenging business problems. Some of his well known work involves ML Technical Debt, ML Education, ML Robustness, production-critical ML, and ML for scientific applications such as protein design.</div>
                                    </div>
                                </div>
                                <div className="member second">
                                    <a href="#">
                                        <img src={img2} alt="team-logo" />
                                    </a>
                                    <div className="team-content">
                                        <div className="mem-name">Julia Elliott</div>
                                        <div className="designation">COO</div>
                                        <div className="description">
                                            Julia Elliott is Kaggle&apos;s COO, overseeing its Operations, Strategy, Marketing, Developer Relations, and Program Management functions. She holds a degree in electrical engineering from the University of Pennsylvania and a MBA from the University of North Carolina at Chapel Hill. Prior to Kaggle, she worked at IBM and Upwork and is skilled at building scalable operational solutions for technology products that provide customer solutions. She&apos;s passionate about making technology more inclusive and accessible to historically marginalized communities.
                                        </div>
                                    </div>
                                </div>
                                <div className="member third">
                                    <a href="#">
                                        <img src={img3} alt="team-logo" />
                                    </a>
                                    <div className="team-content">
                                        <div className="mem-name">Jeff Moser</div>
                                        <div className="designation">Chief Architect</div>
                                        <div className="description">
                                            Good software is a game of inches where polishing is very important. My main strategy is to invest a lot of blood, sweat, and tears into a product and then multiply its value by the number of its happy users.
                                        </div>
                                    </div>
                                </div>
                                <div className="member fourth">
                                    <a href="#">
                                        <img src={img4} alt="team-logo" />
                                    </a>
                                    <div className="team-content">
                                        <div className="mem-name">William Cukierski</div>
                                        <div className="designation">Head of Competitions and Data Scientist</div>
                                        <div className="description">
                                            Will Cukierski has a bachelor’s degree in physics from Cornell University and a Ph.D. in biomedical engineering from Rutgers, where he studied applications of machine learning to cancer research. He has published on graph theory, dimensionality reduction, clustering, and image analysis.
                                        </div>
                                    </div>
                                </div>
                                <div className="member fifth">
                                    <a href="#">
                                        <img src={img5} alt="team-logo" />
                                    </a>
                                    <div className="team-content">
                                        <div className="mem-name">Jerad Rose</div>
                                        <div className="designation">
                                            Developer
                                        </div>
                                        <div className="description">
                                            Jerad is a full-stack software engineer with a focus on building highly interactive web applications. Before jumping on board the Kaggle train, he was an architect for Humana. He has a drive for building online communities, founding & running his own web community since 2002.
                                        </div>
                                    </div>
                                </div>
                                <div className="member sixth">
                                    <a href="#">
                                        <img src={img6} alt="team-logo" />
                                    </a>
                                    <div className="team-content">
                                        <div className="mem-name">Meghan O&apos;Connell</div>
                                        <div className="designation">Strategy and Operations</div>
                                        <div className="description">Meghan graduated from Santa Clara University with a double bachelor&apos;s degree in Economics and Marketing. Prior to joining Kaggle, Meghan worked as the Manager of Professional Services for a boutique outsourcing firm, where she was responsible for scaling project management operations.</div>
                                    </div>
                                </div>
                                <div className="member seventh">
                                    <a href="#">
                                        <img src={img7} alt="team-logo" />
                                    </a>
                                    <div className="team-content">
                                        <div className="mem-name">Myles O&apos;Neill</div>
                                        <div className="designation">Designer</div>
                                        <div className="description">Myles is passionate about solving complex problems using elegant designs. He holds a bachelor&apos;s degree in computer science and genetics from the Australian National University. Myles likes to create things in his spare time. He recently Kickstarted and published his own board game.</div>
                                    </div>
                                </div>
                                <div className="member eighth">
                                    <a href="#">
                                        <img src={img8} alt="team-logo" />
                                    </a>
                                    <div className="team-content">
                                        <div className="mem-name">Meg Risdal</div>
                                        <div className="designation">Product Manager</div>
                                        <div className="description">Meg holds Master&apos;s degrees in linguistics from UCLA and NC State University where she studied laboratory phonology and sociophonetics. Prior to Kaggle, she was a data scientist in market research and product manager at Stack Overflow. She&apos;s passionate about open technical communities.</div>
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
