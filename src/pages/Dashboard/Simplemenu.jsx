import React, { useEffect, useState } from 'react'
import log from "../image/logo.svg"

import {  Home } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { Component } from 'lucide-react';
import { FileCode2 } from 'lucide-react';
import { Laptop } from 'lucide-react';
import { BookMarked } from 'lucide-react';
import { Users } from 'lucide-react';
import { Radio } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { ScreenShare } from 'lucide-react';
import { GlobeLock } from 'lucide-react';
import { Anvil } from 'lucide-react';

import "./checkactive.js"


const Simplemenu = () => {

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);
    
    return (
        <div style={{ fontSize: "14px", color: "white" , backgroundColor:"#1e40ad"}}>


            {/* <!-- BEGIN: Simple Menu --> */}
            <div className="side-nav side-nav--simple hidden w-[200px] overflow-x-hidden pb-16 pr-5 md:block">
                <a className="intro-x flex items-center pl-5 pt-6" href="/">
                    <img className="w-6" src={log} alt="Midone - Tailwind Admin Dashboard Template" />
                    <span class="hidden ml-3 text-lg text-white xl:block" style={{zIndex:"0"}}>BharatTech</span>
                </a>
                <div className="side-nav__divider my-6"></div>
                <ul>
                    <li className="">
                        <a href="/dashboard" className={`side-menu flex items-center pl-5 ${activeLink === '/dashboard' ? 'active' : ''}`} >
                            <div className="side-menu__icon">
                                <Home size={20} />
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Dashboard
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Dataset" className={`side-menu flex items-center  ${activeLink === '/Dataset' ? 'active' : ''}`} >
                            <div className="side-menu__icon">
                                <LayoutDashboard size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Dataset                          
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/model" className={`side-menu flex items-center  ${activeLink === '/model' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <Component size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Model
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/code" className={`side-menu flex items-center  ${activeLink === '/code' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <FileCode2 size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Code
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/competition" className={`side-menu flex items-center  ${activeLink === '/competition' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <Laptop size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Competitions
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/courses" className={`side-menu flex items-center  ${activeLink === '/courses' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <BookMarked size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Courses
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/discussions" className={`side-menu flex items-center  ${activeLink === '/discussions' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <Users size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Discussions
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/rankings" className={`side-menu flex items-center  ${activeLink === '/rankings' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <Radio size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Rankings
                            </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/documentation" className={`side-menu flex items-center  ${activeLink === '/documentation' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <FileText size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Research Paper
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/blog" className={`side-menu flex items-center  ${activeLink === '/blog' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <Newspaper size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Blog
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/hostcomp" className={`side-menu flex items-center  ${activeLink === '/hostcomp' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <ScreenShare size={20}/>
                            </div>
                            <div className="side-menu__title ml-3">
                                Host Competitions
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/privacy" className={`side-menu flex items-center  ${activeLink === '/privacy' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <GlobeLock size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Privacy
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/team" className={`side-menu flex items-center  ${activeLink === '/team' ? 'active' : ''}`}>
                            <div className="side-menu__icon">
                                <Anvil size={20}/>
                            </div>
                            <div className="side-menu__title ml-3 pt-1">
                                Team
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <!-- END: Simple Menu --> */}
        </div>
    )
}

export default Simplemenu;