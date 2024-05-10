import React, { useEffect, useState } from 'react';
import log from "../image/logo.svg";

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

const Simplemenu = () => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);

    return (
        <div className="bg-red">

            <div className="side-nav side-nav--simple hidden w-[230px] overflow-x-hidden pb-16 md:block">
                <a className="intro-x flex items-center  pt-6 ml-4" href="/">
                    <img className="w-6" src={log} alt="Midone - Tailwind Admin Dashboard Template" />
                    <span className="hidden ml-6 text-[1.5rem] text-white xl:block" style={{zIndex:"0"}}>BharatTech</span>
                </a>
                <div className="side-nav__divider my-6 " ></div>
                <ul className='ml-4 text-[1.25rem]'>
                    <li className="pt-4">
                        <a href="/dashboard" className={`side-menu flex items-center  ${activeLink === '/dashboard' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <Home size={22} />
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Dashboard
                            </div>
                        </a>
                    </li>
                    <li className='pt-6'>
                        <a href="/Dataset" className={`side-menu flex items-center  ${activeLink === '/Dataset' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <LayoutDashboard size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Dataset
                            </div>
                        </a>
                    </li>
                    <li className='pt-6'>
                        <a href="/model" className={`side-menu flex items-center  ${activeLink === '/model' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <Component size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Model
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/code" className={`side-menu flex items-center  ${activeLink === '/code' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <FileCode2 size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Code
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/competition" className={`side-menu flex items-center  ${activeLink === '/competition' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <Laptop size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Competition
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/courses" className={`side-menu flex items-center  ${activeLink === '/courses' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <BookMarked size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Courses
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/discussions" className={`side-menu flex items-center  ${activeLink === '/discussions' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <Users size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Discussions
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/rankings" className={`side-menu flex items-center  ${activeLink === '/rankings' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <Radio size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Rankings
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/documentation" className={`side-menu flex items-center  ${activeLink === '/documentation' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <FileText size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Documentation
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/blog" className={`side-menu flex items-center  ${activeLink === '/blog' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <Newspaper size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                                Blog
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/hostcomp" className={`side-menu flex items-center  ${activeLink === '/hostcomp' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <ScreenShare/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                               Host Competition
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/privavcy" className={`side-menu flex items-center  ${activeLink === '/privavcy' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <GlobeLock size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                              Privavcy
                            </div>
                        </a>
                    </li>

                    <li className='pt-6'>
                        <a href="/team" className={`side-menu flex items-center  ${activeLink === '/team' ? 'bg-white text-black p-3 rounded-l-3xl' : 'text-white'}`} >
                            <div className="side-menu__icon">
                                <Anvil size={22}/>
                            </div>
                            <div className="side-menu__title ml-6 pt-1">
                              Team
                            </div>
                        </a>
                    </li>
                    {/* Add other menu items here */}
                </ul>
            </div>
        </div>
    );
}

export default Simplemenu;
