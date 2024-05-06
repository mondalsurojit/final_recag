import React from 'react'
import "../css/vendors/tippy.css"
import "../css/vendors/litepicker.css"
import "../css/vendors/tiny-slider.css"
import "../css/themes/rubick/side-nav.css"
import "../css/vendors/leaflet.css"
import "../css/vendors/simplebar.css"
import "../css/components/mobile-menu.css"

import profile15 from "../image/fakers/profile-15.jpg"
import profile8 from "../image/fakers/profile-8.jpg"
import profile14 from "../image/fakers/profile-14.jpg"
import profile12 from "../image/fakers/profile-12.jpg"
import preview15 from "../image/fakers/preview-15.jpg"
import preview1 from "../image/fakers/preview-1.jpg"
import preview2 from "../image/fakers/preview-2.jpg"
import preview12 from "../image/fakers/preview-12.jpg"
import profile4 from "../image/fakers/profile-4.jpg"
import profile9 from "../image/fakers/profile-9.jpg"
import profile5 from "../image/fakers/profile-5.jpg"
import profile11 from "../image/fakers/profile-11.jpg"
import profile3 from "../image/fakers/profile-3.jpg"
import preview6 from "../image/fakers/preview-6.jpg"
import profile6 from "../image/fakers/profile-6.jpg"
import preview3 from "../image/fakers/preview-3.jpg"
import profile13 from "../image/fakers/profile-13.jpg"
import profile10 from "../image/fakers/profile-10.jpg"
import profile2 from "../image/fakers/profile-2.jpg"

import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { BellRing } from 'lucide-react';
import { RefreshCcw } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { User } from 'lucide-react';



import Mobilemenu from './Mobilemenu.jsx'
import Simplemenu from './Simplemenu.jsx'
import "./dashb.css"


function Dashboard() {
  return (
    <div>


    

    <Mobilemenu/>
    <div className="mt-[4.7rem] flex md:mt-0">
    <Simplemenu style={{color:"#fff"}}/>
    
        
            {/* <!-- BEGIN: Content --> */}
            <div className="das md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]" style={{overflow:"scroll", height:"100vh"}}>
                {/* <!-- BEGIN: Top Bar --> */}
                <div className="relative z-[51] flex h-[67px] items-center border-b border-slate-200" style={{zIndex:"0"}}>
                    {/* <!-- BEGIN: Breadcrumb --> */}
                    <div aria-label="breadcrumb" className="flex -intro-x mr-auto hidden sm:flex">
                        <ol className="flex items-center text-theme-1 dark:text-slate-300">
                            <li className="">
                                <a href="/">Application</a>
                            </li>
                            <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                <a href="/">Dashboard</a>
                            </li>
                        </ol>
                    </div>
                    {/* <!-- END: Breadcrumb --> */}

                    {/* <!-- BEGIN: Search --> */}
                    <div className="search intro-x relative mr-3 sm:mr-6" style={{backgroundColor:"#f1f5f9"}}>
                        <div className="relative hidden sm:block" >
                            <input data-tw-merge="" type="text" placeholder="Search..." className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70"/>
                            <i data-tw-merge="" data-lucide="search" className="stroke-1.5 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600 dark:text-slate-500"><Search style={{marginTop:"-3"}}/></i>
                        </div>

                        <a className="relative text-slate-600 sm:hidden" href="#">
                            <i data-tw-merge="" data-lucide="search" className="stroke-1.5 w-5 h-5 dark:text-slate-500"><Search/></i>
                        </a>

                        {/* search bar ke under pop page  */}
                        {/* <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="mt-5 invisible opacity-0 translate-y-1" data-enter-to="mt-[3px] visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="mt-[3px] visible opacity-100 translate-y-0" data-leave-to="mt-5 invisible opacity-0 translate-y-1" className="search-result absolute right-0 z-10 mt-[3px] hidden">
                            <div className="box w-[450px] p-5">
                                <div className="mb-2 font-medium">Pages</div>
                                <div className="mb-5">
                                    <a className="flex items-center" href="#">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success dark:bg-success/10">
                                            <i data-tw-merge="" data-lucide="inbox" className="stroke-1.5 h-4 w-4"></i>
                                        </div>
                                        <div className="ml-3">Mail Settings</div>
                                    </a>
                                    <a className="mt-2 flex items-center" href="#">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pending/10 text-pending">
                                            <i data-tw-merge="" data-lucide="users" className="stroke-1.5 h-4 w-4"></i>
                                        </div>
                                        <div className="ml-3">Users & Permissions</div>
                                    </a>
                                    <a className="mt-2 flex items-center" href="/">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary/80 dark:bg-primary/20">
                                            <i data-tw-merge="" data-lucide="credit-card" className="stroke-1.5 h-4 w-4"></i>
                                        </div>
                                        <div className="ml-3">Transactions Report</div>
                                    </a>
                                </div>
                                <div className="mb-2 font-medium">Users</div>
                                <div className="mb-5">
                                    <a className="mt-2 flex items-center" href="/">
                                        <div className="image-fit h-8 w-8">
                                            <img className="rounded-full" src={profile15} alt="Midone - Tailwind Admin Dashboard Template"/>
                                        </div>
                                      <div className="ml-3">Tom Cruise</div>
                                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                                            tomcruise@left4code.com
                                        </div>
                                    </a>
                                    <a className="mt-2 flex items-center" href="/">
                                        <div className="image-fit h-8 w-8">
                                            <img className="rounded-full" src={profile8} alt="Midone - Tailwind Admin Dashboard Template"/>
                                        </div>
                                        <div className="ml-3">Arnold Schwarzenegger</div>
                                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                                            arnoldschwarzenegger@left4code.com
                                        </div>
                                    </a>
                                    <a className="mt-2 flex items-center" href="/">
                                        <div className="image-fit h-8 w-8">
                                            <img className="rounded-full" src={profile14} alt="Midone - Tailwind Admin Dashboard Template"/>
                                        </div>
                                        <div className="ml-3">Tom Cruise</div>
                                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                                            tomcruise@left4code.com
                                        </div>
                                    </a>
                                    <a className="mt-2 flex items-center" href="/">
                                        <div className="image-fit h-8 w-8">
                                            <img className="rounded-full" src={profile12} alt="Midone - Tailwind Admin Dashboard Template"/>
                                        </div>
                                        <div className="ml-3">Al Pacino</div>
                                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                                            alpacino@left4code.com
                                        </div>
                                    </a>
                                </div>
                                <div className="mb-2 font-medium">Products</div>
                                <a className="mt-2 flex items-center" href="/">
                                    <div className="image-fit h-8 w-8">
                                        <img className="rounded-full" src={preview15} alt="Midone - Tailwind Admin Dashboard Template"/>
                                    </div>
                                    <div className="ml-3">Nikon Z6</div>
                                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                                        Photography
                                    </div>
                                </a>
                                <a className="mt-2 flex items-center" href="/">
                                    <div className="image-fit h-8 w-8">
                                        <img className="rounded-full" src={preview1} alt="Midone - Tailwind Admin Dashboard Template"/>
                                    </div>
                                    <div className="ml-3">Sony A7 III</div>
                                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                                        Photography
                                    </div>
                                </a>
                                <a className="mt-2 flex items-center" href="/">
                                    <div className="image-fit h-8 w-8">
                                        <img className="rounded-full" src={preview2} alt="Midone - Tailwind Admin Dashboard Template"/>
                                    </div>
                                    <div className="ml-3">Samsung Q90 QLED TV</div>
                                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                                        Electronic
                                    </div>
                                </a>
                                <a className="mt-2 flex items-center" href="/">
                                    <div className="image-fit h-8 w-8">
                                        <img className="rounded-full" src={preview12} alt="Midone - Tailwind Admin Dashboard Template"/>
                                    </div>
                                    <div className="ml-3">Samsung Q90 QLED TV</div>
                                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                                        Electronic
                                    </div>
                                </a>
                            </div>
                        </div> */}
                    </div>
                    {/* <!-- END: Search  --> */}

                    {/* <!-- BEGIN: Notifications --> */}
                    <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative intro-x mr-auto sm:mr-6">
                        <div data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer relative block text-slate-600 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"><i data-tw-merge="" data-lucide="bell" className="stroke-1.5 w-5 h-5 dark:text-slate-500"><BellRing/></i></div>


{/* notification ke under pop up page hai */}

                        {/* <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden">
                            <div data-tw-merge="" className="dropdown-content rounded-md border-transparent bg-white shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-2 w-[280px] p-5 sm:w-[350px]">
                                <div className="mb-5 font-medium">Notifications</div>
                                <div className="cursor-pointer relative flex items-center">
                                    <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                                        <img className="rounded-full" src={profile15} alt="Midone - Tailwind Admin Dashboard Template"/>
                                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600">
                                        </div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a className="mr-5 truncate font-medium" href="/">
                                                Tom Cruise
                                            </a>
                                            <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                                                05:09 AM
                                            </div>
                                        </div>
                                        <div className="mt-0.5 w-full truncate text-slate-500">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                                        <img className="rounded-full" src={profile8} alt="Midone - Tailwind Admin Dashboard Template"/>
                                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600">
                                        </div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a className="mr-5 truncate font-medium" href="/">
                                                Arnold Schwarzenegger
                                            </a>
                                            <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                                                01:10 PM
                                            </div>
                                        </div>
                                        <div className="mt-0.5 w-full truncate text-slate-500">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                                        <img className="rounded-full" src={profile14} alt="Midone - Tailwind Admin Dashboard Template"/>
                                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600">
                                        </div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a className="mr-5 truncate font-medium" href="/">
                                                Tom Cruise
                                            </a>
                                            <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                                                01:10 PM
                                            </div>
                                        </div>
                                        <div className="mt-0.5 w-full truncate text-slate-500">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                                        <img className="rounded-full" src={profile12} alt="Midone - Tailwind Admin Dashboard Template"/>
                                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600">
                                        </div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a className="mr-5 truncate font-medium" href="/">
                                                Al Pacino
                                            </a>
                                            <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                                                06:05 AM
                                            </div>
                                        </div>
                                        <div className="mt-0.5 w-full truncate text-slate-500">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                                        <img className="rounded-full" src={profile4} alt="Midone - Tailwind Admin Dashboard Template"/>
                                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600">
                                        </div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a className="mr-5 truncate font-medium" href="/">
                                                Al Pacino
                                            </a>
                                            <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                                                05:09 AM
                                            </div>
                                        </div>
                                        <div className="mt-0.5 w-full truncate text-slate-500">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <!-- END: Notifications  --> */}

                    {/* <!-- BEGIN: Account Menu --> */}
                    <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg"><img src={profile4} alt="Midone - Tailwind Admin Dashboard Template"/>
                        </button>

{/* profile section under page */}
{/*                         
                        <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden">
                            <div data-tw-merge="" className="dropdown-content rounded-md border-transparent p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-px w-56 bg-theme-1 text-white">
                                <div className="p-2 font-medium font-normal">
                                    <div className="font-medium">Tom Cruise</div>
                                    <div className="mt-0.5 text-xs text-white/70 dark:text-slate-500">
                                        DevOps Engineer
                                    </div>
                                </div>
                                <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400 bg-white/[0.08]">
                                </div>
                                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5"><i data-tw-merge="" data-lucide="user" className="stroke-1.5 mr-2 h-4 w-4"></i>
                                    Profile</a>
                                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5"><i data-tw-merge="" data-lucide="edit" className="stroke-1.5 mr-2 h-4 w-4"></i>
                                    Add Account</a>
                                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5"><i data-tw-merge="" data-lucide="lock" className="stroke-1.5 mr-2 h-4 w-4"></i>
                                    Reset Password</a>
                                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5"><i data-tw-merge="" data-lucide="help-circle" className="stroke-1.5 mr-2 h-4 w-4"></i>
                                    Help</a>
                                <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400 bg-white/[0.08]">
                                </div>
                                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5"><i data-tw-merge="" data-lucide="toggle-right" className="stroke-1.5 mr-2 h-4 w-4"></i>
                                    Logout</a>
                            </div>
                        </div> */}
                    </div>
                    {/* <!-- END: Account Menu --> */}

                </div>
                {/* <!-- END: Top Bar --> */}

                <div className="grid grid-cols-12 gap-6" style={{zIndex:"0"}}>
                    <div className="col-span-12 2xl:col-span-9">
                        <div className="grid grid-cols-12 gap-6">
                            {/* <!-- BEGIN: General Report --> */}
                            <div className="col-span-12 mt-8" style={{zIndex:"0"}}>
                                <div className="intro-y flex h-10 items-center">
                                    <h2 className="mr-5 truncate text-lg font-medium">General Report</h2>
                                    <a className="ml-auto flex items-center text-primary" href="/">
                                        <i data-tw-merge="" data-lucide="refresh-ccw" className="stroke-1.5 mr-3 h-4 w-4"><RefreshCcw style={{marginRight:"2px" , height:"15px" , width:"30px"}}/></i>
                                        Reload Data
                                    </a>
                                </div>
                                <div className="mt-5 grid grid-cols-12 gap-6">
                                    <div className="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                                        <div className="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                                            <div className="box p-4">
                                                <div className="flex">
                                                    <i data-tw-merge="" data-lucide="shopping-cart" className="stroke-1.5 h-[28px] w-[28px] text-primary"><ShoppingCart width={28} height={28}/></i>
                                                    <div className="ml-auto">
                                                        <div data-placement="top" title="33% Higher than last month" className="cursor-pointer flex items-center rounded-full bg-success py-[3 px] pl-2 pr-1 text-xs font-medium text-white">33%
                                                            <i data-tw-merge="" data-lucide="chevron-up" className="stroke-1.5 ml-0.5 h-4 w-4 mt-1"><ChevronUp style={{ marginTop:"-6px", marginLeft:"-2px"}}/></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-6 text-3xl font-medium leading-8">4.710</div>
                                                <div className="mt-1 text-base text-slate-500">Item Sales</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                                        <div className="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                                            <div className="box p-4">
                                                <div className="flex">
                                                    <i data-tw-merge="" data-lucide="credit-card" className="stroke-1.5 h-[28px] w-[28px] text-pending"><CreditCard width={28} height={28}/></i>
                                                    <div className="ml-auto">
                                                        <div data-placement="top" title="2% Lower than last month" className=" cursor-pointer flex items-center rounded-full bg-danger py-[3px] pl-2 pr-1 text-xs font-medium text-white">2%
                                                            <i data-tw-merge="" data-lucide="chevron-down" className="stroke-1.5 ml-0.5 h-4 w-4"><ChevronDown style={{ marginTop:"-5px", marginLeft:"-3px"}}/></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-6 text-3xl font-medium leading-8">3.721</div>
                                                <div className="mt-1 text-base text-slate-500">New Orders</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                                        <div className="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                                            <div className="box p-4">
                                                <div className="flex">
                                                    <i data-tw-merge="" data-lucide="monitor" className="stroke-1.5 h-[28px] w-[28px] text-warning"><Monitor height={28} width={28}/></i>
                                                    <div className="ml-auto">
                                                        <div data-placement="top" title="12% Higher than last month" className=" cursor-pointer flex items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white">12%
                                                            <i data-tw-merge="" data-lucide="chevron-up" className="stroke-1.5 ml-0.5 h-4 w-4"><ChevronUp style={{ marginTop:"-6px", marginLeft:"-2px"}}/></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-6 text-3xl font-medium leading-8">2.149</div>
                                                <div className="mt-1 text-base text-slate-500">
                                                    Total Products
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                                        <div className="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                                            <div className="box p-4">
                                                <div className="flex">
                                                    <i data-tw-merge="" data-lucide="user" className="stroke-1.5 h-[28px] w-[28px] text-success"><User height={28} width={28}/></i>
                                                    <div className="ml-auto">
                                                        <div data-placement="top" title="22% Higher than last month" className=" cursor-pointer flex items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white">22%
                                                            <i data-tw-merge="" data-lucide="chevron-up" className="stroke-1.5 ml-0.5 h-4 w-4"><ChevronUp style={{ marginTop:"-6px", marginLeft:"-2px"}}/></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-6 text-3xl font-medium leading-8">152.040</div>
                                                <div className="mt-1 text-base text-slate-500">
                                                    Unique Visitor
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END: General Report --> */}

                            {/* <!-- BEGIN: Sales Report --> */}
                            <div className="col-span-12 mt-8 lg:col-span-6">
                                <div className="intro-y block h-10 items-center sm:flex">
                                    <h2 className="mr-5 truncate text-lg font-medium">Sales Report</h2>
                                    <div className="relative mt-3 text-slate-500 sm:ml-auto sm:mt-0">
                                        <i data-tw-merge="" data-lucide="calendar" className="stroke-1.5 absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4"></i>
                                        <input data-tw-merge="" type="text" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 datepicker !box pl-10 sm:w-56"/>
                                    </div>
                                </div>
                                <div className="intro-y box mt-12 p-5 sm:mt-5">
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        <div className="flex">
                                            <div>
                                                <div className="text-lg font-medium text-primary dark:text-slate-300 xl:text-xl">
                                                    $15,000
                                                </div>
                                                <div className="mt-0.5 text-slate-500">This Month</div>
                                            </div>
                                            <div className="mx-4 h-12 w-px border border-r border-dashed border-slate-200 dark:border-darkmode-300 xl:mx-5">
                                            </div>
                                            <div>
                                                <div className="text-lg font-medium text-slate-500 xl:text-xl">
                                                    $10,000
                                                </div>
                                                <div className="mt-0.5 text-slate-500">Last Month</div>
                                            </div>
                                        </div>
                                        <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative mt-5 md:ml-auto md:mt-0"><button data-tw-merge="" data-tw-toggle="dropdown" aria-expanded="false" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 font-normal">Filter by Category
                                                <i data-tw-merge="" data-lucide="chevron-down" className="stroke-1.5 ml-2 h-4 w-4"></i></button>
                                            <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden">
                                                <div data-tw-merge="" className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 h-32 w-40 overflow-y-auto">
                                                    <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item" href='/'>PC & Laptop</a>
                                                    <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">Smartphone</a>
                                                    <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">Electronic</a>
                                                    <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">Photography</a>
                                                    <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">Sport</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative before:content-[''] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600 after:content-[''] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600">
                                        <div className="w-auto h-[275px]">
                                            <canvas id="report-line-chart" className="chart -mb-6 mt-6"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END: Sales Report --> */}

                            {/* <!-- BEGIN: Weekly Top Seller --> */}
                            <div className="col-span-12 mt-8 sm:col-span-6 lg:col-span-3">
                                <div className="intro-y flex h-10 items-center">
                                    <h2 className="mr-5 truncate text-lg font-medium">Weekly Top Seller</h2>
                                    <a className="ml-auto truncate text-primary" href="#"> Show More </a>
                                </div>
                                <div className="intro-y box mt-5 p-5">
                                    <div className="mt-3">
                                        <div className="w-auto h-[213px]">
                                            <canvas id="report-pie-chart" className="chart"></canvas>
                                        </div>
                                    </div>
                                    <div className="mx-auto mt-8 w-52 sm:w-auto">
                                        <div className="flex items-center">
                                            <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                                            <span className="truncate">17 - 30 Years old</span>
                                            <span className="ml-auto font-medium">62%</span>
                                        </div>
                                        <div className="mt-4 flex items-center">
                                            <div className="mr-3 h-2 w-2 rounded-full bg-pending"></div>
                                            <span className="truncate">31 - 50 Years old</span>
                                            <span className="ml-auto font-medium">33%</span>
                                        </div>
                                        <div className="mt-4 flex items-center">
                                            <div className="mr-3 h-2 w-2 rounded-full bg-warning"></div>
                                            <span className="truncate">&gt;= 50 Years old</span>
                                            <span className="ml-auto font-medium">10%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END: Weekly Top Seller --> */}

                            {/* <!-- BEGIN: Sales Report --> */}
                            <div className="col-span-12 mt-8 sm:col-span-6 lg:col-span-3">
                                <div className="intro-y flex h-10 items-center">
                                    <h2 className="mr-5 truncate text-lg font-medium">Sales Report</h2>
                                    <a className="ml-auto truncate text-primary" href="#"> Show More </a>
                                </div>
                                <div className="intro-y box mt-5 p-5">
                                    <div className="mt-3">
                                        <div className="w-auto h-[213px]">
                                            <canvas id="report-donut-chart" className="chart"></canvas>
                                        </div>
                                    </div>
                                    <div className="mx-auto mt-8 w-52 sm:w-auto">
                                        <div className="flex items-center">
                                            <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                                            <span className="truncate">17 - 30 Years old</span>
                                            <span className="ml-auto font-medium">62%</span>
                                        </div>
                                        <div className="mt-4 flex items-center">
                                            <div className="mr-3 h-2 w-2 rounded-full bg-pending"></div>
                                            <span className="truncate">31 - 50 Years old</span>
                                            <span className="ml-auto font-medium">33%</span>
                                        </div>
                                        <div className="mt-4 flex items-center">
                                            <div className="mr-3 h-2 w-2 rounded-full bg-warning"></div>
                                            <span className="truncate">&gt;= 50 Years old</span>
                                            <span className="ml-auto font-medium">10%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END: Sales Report --> */}

                            {/* <!-- BEGIN: Official Store --> */}
                            <div className="col-span-12 mt-6 xl:col-span-8">
                                <div className="intro-y block h-10 items-center sm:flex">
                                    <h2 className="mr-5 truncate text-lg font-medium">Official Store</h2>
                                    <div className="relative mt-3 text-slate-500 sm:ml-auto sm:mt-0">
                                        <i data-tw-merge="" data-lucide="map-pin" className="stroke-1.5 absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4"></i>
                                        <input data-tw-merge="" type="text" placeholder="Filter by city" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 !box pl-10 sm:w-56"/>
                                    </div>
                                </div>
                                <div className="intro-y box mt-12 p-5 sm:mt-5">
                                    <div>
                                        250 Official stores in 21 countries, click the marker to see
                                        location details.
                                    </div>
                                    <div data-lat="-6.2425342" data-long="106.8626478" data-sources="" data-api-key="1e86fd5a7f60486a8e899411776f60d5" className="leaflet z-0 [&_.leaflet-tile-pane]:saturate-[.3] mt-5 h-[310px] rounded-md bg-slate-200">
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END: Official Store --> */}

                            {/* <!-- BEGIN: Weekly Best Sellers --> */}
                            <div className="col-span-12 mt-6 xl:col-span-4">
                                <div className="intro-y flex h-10 items-center">
                                    <h2 className="mr-5 truncate text-lg font-medium">
                                        Weekly Best Sellers
                                    </h2>
                                </div>
                                <div className="mt-5">
                                    <div className="intro-y">
                                        <div className="box zoom-in mb-3 flex items-center px-4 py-4">
                                            <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-md">
                                                <img src={profile9} alt="Midone - Tailwind Admin Dashboard Template"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Kevin Spacey</div>
                                                <div className="mt-0.5 text-xs text-slate-500">
                                                    7 March 2022
                                                </div>
                                            </div>
                                            <div className="cursor-pointer rounded-full bg-success px-2 py-1 text-xs font-medium text-white">
                                                137 Sales
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-y">
                                        <div className="box zoom-in mb-3 flex items-center px-4 py-4">
                                            <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-md">
                                                <img src={profile5} alt="Midone - Tailwind Admin Dashboard Template"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Al Pacino</div>
                                                <div className="mt-0.5 text-xs text-slate-500">
                                                    21 July 2022
                                                </div>
                                            </div>
                                            <div className="cursor-pointer rounded-full bg-success px-2 py-1 text-xs font-medium text-white">
                                                137 Sales
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-y">
                                        <div className="box zoom-in mb-3 flex items-center px-4 py-4">
                                            <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-md">
                                                <img src={profile11} alt="Midone - Tailwind Admin Dashboard Template"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Robert De Niro</div>
                                                <div className="mt-0.5 text-xs text-slate-500">
                                                    19 November 2021
                                                </div>
                                            </div>
                                            <div className="cursor-pointer rounded-full bg-success px-2 py-1 text-xs font-medium text-white">
                                                137 Sales
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-y">
                                        <div className="box zoom-in mb-3 flex items-center px-4 py-4">
                                            <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-md">
                                                <img src={profile3} alt="Midone - Tailwind Admin Dashboard Template"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Russell Crowe</div>
                                                <div className="mt-0.5 text-xs text-slate-500">
                                                    6 September 2021
                                                </div>
                                            </div>
                                            <div className="cursor-pointer rounded-full bg-success px-2 py-1 text-xs font-medium text-white">
                                                137 Sales
                                            </div>
                                        </div>
                                    </div>
                                    <a className="intro-y block w-full rounded-md border border-dotted border-slate-400 py-4 text-center text-slate-500 dark:border-darkmode-300" href="#">
                                        View More
                                    </a>
                                </div>
                            </div>
                            {/* <!-- END: Weekly Best Sellers --> */}

                            {/* <!-- BEGIN: General Report --> */}
                            <div className="col-span-12 mt-8 grid grid-cols-12 gap-6">
                                <div className="intro-y col-span-12 sm:col-span-6 2xl:col-span-3">
                                    <div className="box zoom-in p-5">
                                        <div className="flex items-center">
                                            <div className="w-2/4 flex-none">
                                                <div className="truncate text-lg font-medium">Target Sales</div>
                                                <div className="mt-1 text-slate-500">300 Sales</div>
                                            </div>
                                            <div className="relative ml-auto flex-none">
                                                <div className="w-[90px] h-[90px]">
                                                    <canvas className="chart report-donut-chart-1"></canvas>
                                                </div>
                                                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center font-medium">
                                                    20%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y col-span-12 sm:col-span-6 2xl:col-span-3">
                                    <div className="box zoom-in p-5">
                                        <div className="flex">
                                            <div className="mr-3 truncate text-lg font-medium">
                                                Social Media
                                            </div>
                                            <div className="ml-auto flex cursor-pointer items-center truncate rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-darkmode-400">
                                                320 Followers
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="w-auto h-[58px]">
                                                <canvas className="chart simple-line-chart-1 -ml-1"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y col-span-12 sm:col-span-6 2xl:col-span-3">
                                    <div className="box zoom-in p-5">
                                        <div className="flex items-center">
                                            <div className="w-2/4 flex-none">
                                                <div className="truncate text-lg font-medium">New Products</div>
                                                <div className="mt-1 text-slate-500">1450 Products</div>
                                            </div>
                                            <div className="relative ml-auto flex-none">
                                                <div className="w-[90px] h-[90px]">
                                                    <canvas className="chart report-donut-chart-1"></canvas>
                                                </div>
                                                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center font-medium">
                                                    45%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y col-span-12 sm:col-span-6 2xl:col-span-3">
                                    <div className="box zoom-in p-5">
                                        <div className="flex">
                                            <div className="mr-3 truncate text-lg font-medium">Posted Ads</div>
                                            <div className="ml-auto flex cursor-pointer items-center truncate rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-darkmode-400">
                                                180 Campaign
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="w-auto h-[58px]">
                                                <canvas className="chart simple-line-chart-1 -ml-1"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END: General Report --> */}

                            {/* <!-- BEGIN: Weekly Top Products --> */}
                            <div className="col-span-12 mt-6">
                                <div className="intro-y block h-10 items-center sm:flex">
                                    <h2 className="mr-5 truncate text-lg font-medium">
                                        Weekly Top Products
                                    </h2>
                                    <div className="mt-3 flex items-center sm:ml-auto sm:mt-0">
                                        <button data-tw-merge="" className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box flex text-slate-600 dark:text-slate-300"><i data-tw-merge="" data-lucide="file-text" className="stroke-1.5 mr-2 hidden h-4 w-4 sm:block"></i>
                                            Export to Excel</button>
                                        <button data-tw-merge="" className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box ml-3 flex text-slate-600 dark:text-slate-300"><i data-tw-merge="" data-lucide="file-text" className="stroke-1.5 mr-2 hidden h-4 w-4 sm:block"></i>
                                            Export to PDF</button>
                                    </div>
                                </div>
                                <div className="intro-y mt-8 overflow-auto sm:mt-0 lg:overflow-visible">
                                    <table data-tw-merge="" className="w-full text-left border-separate border-spacing-y-[10px] sm:mt-2">
                                        <thead data-tw-merge="" className="">
                                            <tr data-tw-merge="" className="">
                                                <th data-tw-merge="" className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0">
                                                    IMAGES
                                                </th>
                                                <th data-tw-merge="" className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0">
                                                    PRODUCT NAME
                                                </th>
                                                <th data-tw-merge="" className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center">
                                                    STOCK
                                                </th>
                                                <th data-tw-merge="" className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center">
                                                    STATUS
                                                </th>
                                                <th data-tw-merge="" className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center">
                                                    ACTIONS
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr data-tw-merge="" className="intro-x">
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <div className="flex">
                                                        <div className="image-fit zoom-in h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 7 March 2022" src={preview6} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                        <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 21 December 2020" src={profile6} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                        <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 7 June 2022" src={profile9} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <a className="whitespace-nowrap font-medium" href="#">
                                                        Nike Air Max 270
                                                    </a>
                                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                                        Sport & Outdoor
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    202
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <div className="flex items-center justify-center text-danger">
                                                        <i data-tw-merge="" data-lucide="check-square" className="stroke-1.5 mr-2 h-4 w-4"></i>
                                                        Inactive
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                                                    <div className="flex items-center justify-center">
                                                        <a className="mr-3 flex items-center" href="#">
                                                            <i data-tw-merge="" data-lucide="check-square" className="stroke-1.5 mr-1 h-4 w-4"></i>
                                                            Edit
                                                        </a>
                                                        <a className="flex items-center text-danger" href="#">
                                                            <i data-tw-merge="" data-lucide="trash" className="stroke-1.5 mr-1 h-4 w-4"></i>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-tw-merge="" className="intro-x">
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <div className="flex">
                                                        <div className="image-fit zoom-in h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 21 July 2022" src={preview3} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                        <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 28 December 2021" src={profile13} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                        <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 22 March 2021" src={profile12} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <a className="whitespace-nowrap font-medium" href="/">
                                                        Sony Master Series A9G
                                                    </a>
                                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                                        Electronic
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    96
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <div className="flex items-center justify-center text-danger">
                                                        <i data-tw-merge="" data-lucide="check-square" className="stroke-1.5 mr-2 h-4 w-4"></i>
                                                        Inactive
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                                                    <div className="flex items-center justify-center">
                                                        <a className="mr-3 flex items-center" href="#">
                                                            <i data-tw-merge="" data-lucide="check-square" className="stroke-1.5 mr-1 h-4 w-4"></i>
                                                            Edit
                                                        </a>
                                                        <a className="flex items-center text-danger" href="#">
                                                            <i data-tw-merge="" data-lucide="trash" className="stroke-1.5 mr-1 h-4 w-4"></i>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-tw-merge="" className="intro-x">
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <div className="flex">
                                                        <div className="image-fit zoom-in h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 19 November 2021" src={preview3} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                        <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 14 November 2021" src={profile10} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                        <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 10 April 2021" src={profile5} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <a className="whitespace-nowrap font-medium" href="#">
                                                        Nike Tanjun
                                                    </a>
                                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                                        Sport & Outdoor
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    50
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <div className="flex items-center justify-center text-success">
                                                        <i data-tw-merge="" data-lucide="check-square" className="stroke-1.5 mr-2 h-4 w-4"></i>
                                                        Active
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                                                    <div className="flex items-center justify-center">
                                                        <a className="mr-3 flex items-center" href="#">
                                                            <i data-tw-merge="" data-lucide="check-square" className="stroke-1.5 mr-1 h-4 w-4"></i>
                                                            Edit
                                                        </a>
                                                        <a className="flex items-center text-danger" href="#">
                                                            <i data-tw-merge="" data-lucide="trash" className="stroke-1.5 mr-1 h-4 w-4"></i>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-tw-merge="" className="intro-x">
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <div className="flex">
                                                        <div className="image-fit zoom-in h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 6 September 2021" src={preview1} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                        <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 16 August 2022" src={profile10} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                        <div className="image-fit zoom-in -ml-5 h-10 w-10">
                                                            <img data-placement="top" title="Uploaded at 15 January 2022" src={profile4} alt="Midone - Tailwind Admin Dashboard Template" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <a className="whitespace-nowrap font-medium" href="/">
                                                        Apple MacBook Pro 13
                                                    </a>
                                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                                        PC & Laptop
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    170
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                                    <div className="flex items-center justify-center text-danger">
                                                        <i data-tw-merge="" data-lucide="check-square" className="stroke-1.5 mr-2 h-4 w-4"></i>
                                                        Inactive
                                                    </div>
                                                </td>
                                                <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                                                    <div className="flex items-center justify-center">
                                                        <a className="mr-3 flex items-center" href="#">
                                                            <i data-tw-merge="" data-lucide="check-square" className="stroke-1.5 mr-1 h-4 w-4"></i>
                                                            Edit
                                                        </a>
                                                        <a className="flex items-center text-danger" href="#">
                                                            <i data-tw-merge="" data-lucide="trash" className="stroke-1.5 mr-1 h-4 w-4"></i>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="intro-y mt-3 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
                                    <div className="w-full sm:mr-auto sm:w-auto">
                                        <ul className="flex w-full mr-0 sm:mr-auto sm:w-auto">
                                            <li className="flex-1 sm:flex-initial">
                                                <a data-tw-merge="" className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"><i data-tw-merge="" data-lucide="chevrons-left" className="stroke-1.5 h-4 w-4"></i></a>
                                            </li>
                                            <li className="flex-1 sm:flex-initial">
                                                <a data-tw-merge="" className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"><i data-tw-merge="" data-lucide="chevron-left" className="stroke-1.5 h-4 w-4"></i></a>
                                            </li>
                                            <li className="flex-1 sm:flex-initial">
                                                <a data-tw-merge="" className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">...</a>
                                            </li>
                                            <li className="flex-1 sm:flex-initial">
                                                <a data-tw-merge="" className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">1</a>
                                            </li>
                                            <li className="flex-1 sm:flex-initial">
                                                <a data-tw-merge="" className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box dark:bg-darkmode-400">2</a>
                                            </li>
                                            <li className="flex-1 sm:flex-initial">
                                                <a data-tw-merge="" className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">3</a>
                                            </li>
                                            <li className="flex-1 sm:flex-initial">
                                                <a data-tw-merge="" className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">...</a>
                                            </li>
                                            <li className="flex-1 sm:flex-initial">
                                                <a data-tw-merge="" className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"><i data-tw-merge="" data-lucide="chevron-right" className="stroke-1.5 h-4 w-4"></i></a>
                                            </li>
                                            <li className="flex-1 sm:flex-initial">
                                                <a data-tw-merge="" className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"><i data-tw-merge="" data-lucide="chevrons-right" className="stroke-1.5 h-4 w-4"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <select data-tw-merge="" className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 !box mt-3 w-20 sm:mt-0">
                                        <option>10</option>
                                        <option>25</option>
                                        <option>35</option>
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                            {/* <!-- END: Weekly Top Products --> */}

                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-3">
                        <div className="-mb-10 pb-10 2xl:border-l">
                            <div className="grid grid-cols-12 gap-x-6 gap-y-6 2xl:gap-x-0 2xl:pl-6">
                                {/* <!-- BEGIN: Transactions --> */}
                                <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12 2xl:mt-8">
                                    <div className="intro-x flex h-10 items-center">
                                        <h2 className="mr-5 truncate text-lg font-medium">Transactions</h2>
                                    </div>
                                    <div className="mt-5">
                                        <div className="intro-x">
                                            <div className="box zoom-in mb-3 flex items-center px-5 py-3">
                                                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                                    <img src={profile9} alt="Midone - Tailwind Admin Dashboard Template"/>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Kevin Spacey</div>
                                                    <div className="mt-0.5 text-xs text-slate-500">
                                                        7 March 2022
                                                    </div>
                                                </div>
                                                <div className="text-danger">
                                                    -$121
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intro-x">
                                            <div className="box zoom-in mb-3 flex items-center px-5 py-3">
                                                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                                    <img src={profile5} alt="Midone - Tailwind Admin Dashboard Template"/>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Al Pacino</div>
                                                    <div className="mt-0.5 text-xs text-slate-500">
                                                        21 July 2022
                                                    </div>
                                                </div>
                                                <div className="text-danger">
                                                    -$72
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intro-x">
                                            <div className="box zoom-in mb-3 flex items-center px-5 py-3">
                                                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                                    <img src={profile11} alt="Midone - Tailwind Admin Dashboard Template"/>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Robert De Niro</div>
                                                    <div className="mt-0.5 text-xs text-slate-500">
                                                        19 November 2021
                                                    </div>
                                                </div>
                                                <div className="text-success">
                                                    +$45
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intro-x">
                                            <div className="box zoom-in mb-3 flex items-center px-5 py-3">
                                                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                                    <img src={profile3} alt="Midone - Tailwind Admin Dashboard Template"/>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Russell Crowe</div>
                                                    <div className="mt-0.5 text-xs text-slate-500">
                                                        6 September 2021
                                                    </div>
                                                </div>
                                                <div className="text-danger">
                                                    -$44
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intro-x">
                                            <div className="box zoom-in mb-3 flex items-center px-5 py-3">
                                                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                                    <img src={profile2} alt="Midone - Tailwind Admin Dashboard Template"/>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Robert De Niro</div>
                                                    <div className="mt-0.5 text-xs text-slate-500">
                                                        22 November 2022
                                                    </div>
                                                </div>
                                                <div className="text-success">
                                                    +$21
                                                </div>
                                            </div>
                                        </div>
                                        <a className="intro-x block w-full rounded-md border border-dotted border-slate-400 py-3 text-center text-slate-500 dark:border-darkmode-300" href="#">
                                            View More
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- END: Transactions --> */}

                                {/* <!-- BEGIN: Recent Activities --> */}
                                <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
                                    <div className="intro-x flex h-10 items-center">
                                        <h2 className="mr-5 truncate text-lg font-medium">
                                            Recent Activities
                                        </h2>
                                        <a className="ml-auto truncate text-primary" href="#"> Show More </a>
                                    </div>
                                    <div className="relative mt-5 before:absolute before:ml-5 before:mt-5 before:block before:h-[85%] before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                                        <div className="intro-x relative mb-3 flex items-center">
                                            <div className="before:absolute before:ml-5 before:mt-5 before:block before:h-px before:w-20 before:bg-slate-200 before:dark:bg-darkmode-400">
                                                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                                    <img src={profile9} alt="Midone - Tailwind Admin Dashboard Template"/>
                                                </div>
                                            </div>
                                            <div className="box zoom-in ml-4 flex-1 px-5 py-3">
                                                <div className="flex items-center">
                                                    <div className="font-medium">
                                                        Hugh Jackman
                                                    </div>
                                                    <div className="ml-auto text-xs text-slate-500">07:00 PM</div>
                                                </div>
                                                <div className="mt-1 text-slate-500">Has joined the team</div>
                                            </div>
                                        </div>
                                        <div className="intro-x relative mb-3 flex items-center">
                                            <div className="before:absolute before:ml-5 before:mt-5 before:block before:h-px before:w-20 before:bg-slate-200 before:dark:bg-darkmode-400">
                                                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                                    <img src={profile14} alt="Midone - Tailwind Admin Dashboard Template"/>
                                                </div>
                                            </div>
                                            <div className="box zoom-in ml-4 flex-1 px-5 py-3">
                                                <div className="flex items-center">
                                                    <div className="font-medium">
                                                        Robert De Niro
                                                    </div>
                                                    <div className="ml-auto text-xs text-slate-500">07:00 PM</div>
                                                </div>
                                                <div className="text-slate-500">
                                                    <div className="mt-1">Added 3 new photos</div>
                                                    <div className="mt-2 flex">
                                                        <div data-placement="top" title="Nike Air Max 270" className="tooltip cursor-pointer image-fit zoom-in mr-1 h-8 w-8"><img className="rounded-md border border-white" src={profile14} alt="Midone - Tailwind Admin Dashboard Template"/></div>
                                                        <div data-placement="top" title="Sony Master Series A9G" className="tooltip cursor-pointer image-fit zoom-in mr-1 h-8 w-8"><img className="rounded-md border border-white" src={profile13} alt="Midone - Tailwind Admin Dashboard Template"/></div>
                                                        <div data-placement="top" title="Nike Tanjun" className="tooltip cursor-pointer image-fit zoom-in mr-1 h-8 w-8"><img className="rounded-md border border-white" src={profile10} alt="Midone - Tailwind Admin Dashboard Template"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intro-x my-4 text-center text-xs text-slate-500">
                                            12 November
                                        </div>
                                        <div className="intro-x relative mb-3 flex items-center">
                                            <div className="before:absolute before:ml-5 before:mt-5 before:block before:h-px before:w-20 before:bg-slate-200 before:dark:bg-darkmode-400">
                                                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                                    <img src={profile15} alt="Midone - Tailwind Admin Dashboard Template"/>
                                                </div>
                                            </div>
                                            <div className="box zoom-in ml-4 flex-1 px-5 py-3">
                                                <div className="flex items-center">
                                                    <div className="font-medium">
                                                        Arnold Schwarzenegger
                                                    </div>
                                                    <div className="ml-auto text-xs text-slate-500">07:00 PM</div>
                                                </div>
                                                <div className="mt-1 text-slate-500">
                                                    Has changed
                                                    <a className="text-primary" href="/">
                                                        Samsung Galaxy S20 Ultra
                                                    </a>
                                                    price and description
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intro-x relative mb-3 flex items-center">
                                            <div className="before:absolute before:ml-5 before:mt-5 before:block before:h-px before:w-20 before:bg-slate-200 before:dark:bg-darkmode-400">
                                                <div className="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                                    <img src={profile10} alt="Midone - Tailwind Admin Dashboard Template"/>
                                                </div>
                                            </div>
                                            <div className="box zoom-in ml-4 flex-1 px-5 py-3">
                                                <div className="flex items-center">
                                                    <div className="font-medium">
                                                        Al Pacino
                                                    </div>
                                                    <div className="ml-auto text-xs text-slate-500">07:00 PM</div>
                                                </div>
                                                <div className="mt-1 text-slate-500">
                                                    Has changed
                                                    <a className="text-primary" href="/">
                                                        Samsung Galaxy S20 Ultra
                                                    </a>
                                                    description
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- END: Recent Activities --> */}

                                {/* <!-- BEGIN: Important Notes --> */}
                                <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto">
                                    <div className="intro-x flex h-10 items-center">
                                        <h2 className="mr-auto truncate text-lg font-medium">
                                            Important Notes
                                        </h2>
                                        <button data-tw-merge="" data-carousel="important-notes" data-target="prev" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed tiny-slider-navigator mr-2 border-slate-300 px-2 text-slate-600 dark:text-slate-300"><i data-tw-merge="" data-lucide="chevron-left" className="stroke-1.5 h-4 w-4"></i></button>
                                        <button data-tw-merge="" data-carousel="important-notes" data-target="next" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed tiny-slider-navigator mr-2 border-slate-300 px-2 text-slate-600 dark:text-slate-300"><i data-tw-merge="" data-lucide="chevron-right" className="stroke-1.5 h-4 w-4"></i></button>
                                    </div>
                                    <div className="intro-x mt-5">
                                        <div className="box zoom-in">
                                            <div data-config="" id="important-notes" className="tiny-slider">
                                                <div className="p-5">
                                                    <div className="truncate text-base font-medium">
                                                        Lorem Ipsum is simply dummy text
                                                    </div>
                                                    <div className="mt-1 text-slate-400">20 Hours ago</div>
                                                    <div className="mt-1 text-justify text-slate-500">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s.
                                                    </div>
                                                    <div className="mt-5 flex font-medium">
                                                        <button data-tw-merge="" type="button" className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100 [&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80 px-2 py-1">View Notes</button>
                                                        <button data-tw-merge="" type="button" className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 ml-auto px-2 py-1">Dismiss</button>
                                                    </div>
                                                </div>
                                                <div className="p-5">
                                                    <div className="truncate text-base font-medium">
                                                        Lorem Ipsum is simply dummy text
                                                    </div>
                                                    <div className="mt-1 text-slate-400">20 Hours ago</div>
                                                    <div className="mt-1 text-justify text-slate-500">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s.
                                                    </div>
                                                    <div className="mt-5 flex font-medium">
                                                        <button data-tw-merge="" type="button" className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100 [&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80 px-2 py-1">View Notes</button>
                                                        <button data-tw-merge="" type="button" className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 ml-auto px-2 py-1">Dismiss</button>
                                                    </div>
                                                </div>
                                                <div className="p-5">
                                                    <div className="truncate text-base font-medium">
                                                        Lorem Ipsum is simply dummy text
                                                    </div>
                                                    <div className="mt-1 text-slate-400">20 Hours ago</div>
                                                    <div className="mt-1 text-justify text-slate-500">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s.
                                                    </div>
                                                    <div className="mt-5 flex font-medium">
                                                        <button data-tw-merge="" type="button" className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100 [&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80 px-2 py-1">View Notes</button>
                                                        <button data-tw-merge="" type="button" className="transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 ml-auto px-2 py-1">Dismiss</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- END: Important Notes --> */}

                                {/* <!-- BEGIN: Schedules --> */}
                                <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 xl:col-start-1 xl:row-start-2 2xl:col-span-12 2xl:col-start-auto 2xl:row-start-auto">
                                    <div className="intro-x flex h-10 items-center">
                                        <h2 className="mr-5 truncate text-lg font-medium">Schedules</h2>
                                        <a className="ml-auto flex items-center truncate text-primary" href="#">
                                            <i data-tw-merge="" data-lucide="plus" className="stroke-1.5 mr-1 h-4 w-4"></i>
                                            Add New Schedules
                                        </a>
                                    </div>
                                    <div className="mt-5">
                                        <div className="intro-x box">
                                            <div className="p-5">
                                                <div className="flex">
                                                    <i data-tw-merge="" data-lucide="chevron-left" className="stroke-1.5 w-5 h-5 text-slate-500"></i>
                                                    <div className="mx-auto text-base font-medium">April</div>
                                                    <i data-tw-merge="" data-lucide="chevron-right" className="stroke-1.5 w-5 h-5 text-slate-500"></i>
                                                </div>
                                                <div className="mt-5 grid grid-cols-7 gap-4 text-center">
                                                    <div className="font-medium">Su</div>
                                                    <div className="font-medium">Mo</div>
                                                    <div className="font-medium">Tu</div>
                                                    <div className="font-medium">We</div>
                                                    <div className="font-medium">Th</div>
                                                    <div className="font-medium">Fr</div>
                                                    <div className="font-medium">Sa</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">29</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">30</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">31</div>
                                                    <div className="relative rounded py-0.5">1</div>
                                                    <div className="relative rounded py-0.5">2</div>
                                                    <div className="relative rounded py-0.5">3</div>
                                                    <div className="relative rounded py-0.5">4</div>
                                                    <div className="relative rounded py-0.5">5</div>
                                                    <div className="relative rounded bg-success/20 py-0.5 dark:bg-success/30">
                                                        6
                                                    </div>
                                                    <div className="relative rounded py-0.5">7</div>
                                                    <div className="relative rounded bg-primary py-0.5 text-white">
                                                        8
                                                    </div>
                                                    <div className="relative rounded py-0.5">9</div>
                                                    <div className="relative rounded py-0.5">10</div>
                                                    <div className="relative rounded py-0.5">11</div>
                                                    <div className="relative rounded py-0.5">12</div>
                                                    <div className="relative rounded py-0.5">13</div>
                                                    <div className="relative rounded py-0.5">14</div>
                                                    <div className="relative rounded py-0.5">15</div>
                                                    <div className="relative rounded py-0.5">16</div>
                                                    <div className="relative rounded py-0.5">17</div>
                                                    <div className="relative rounded py-0.5">18</div>
                                                    <div className="relative rounded py-0.5">19</div>
                                                    <div className="relative rounded py-0.5">20</div>
                                                    <div className="relative rounded py-0.5">21</div>
                                                    <div className="relative rounded py-0.5">22</div>
                                                    <div className="relative rounded bg-pending/20 py-0.5 dark:bg-pending/30">
                                                        23
                                                    </div>
                                                    <div className="relative rounded py-0.5">24</div>
                                                    <div className="relative rounded py-0.5">25</div>
                                                    <div className="relative rounded py-0.5">26</div>
                                                    <div className="relative rounded bg-primary/10 py-0.5 dark:bg-primary/50">
                                                        27
                                                    </div>
                                                    <div className="relative rounded py-0.5">28</div>
                                                    <div className="relative rounded py-0.5">29</div>
                                                    <div className="relative rounded py-0.5">30</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">1</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">2</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">3</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">4</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">5</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">6</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">7</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">8</div>
                                                    <div className="relative rounded py-0.5 text-slate-500">9</div>
                                                </div>
                                            </div>
                                            <div className="border-t border-slate-200/60 p-5">
                                                <div className="flex items-center">
                                                    <div className="mr-3 h-2 w-2 rounded-full bg-pending"></div>
                                                    <span className="truncate">UI/UX Workshop</span>
                                                    <span className="font-medium xl:ml-auto">23th</span>
                                                </div>
                                                <div className="mt-4 flex items-center">
                                                    <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                                                    <span className="truncate"> VueJs Frontend Development </span>
                                                    <span className="font-medium xl:ml-auto">10th</span>
                                                </div>
                                                <div className="mt-4 flex items-center">
                                                    <div className="mr-3 h-2 w-2 rounded-full bg-warning"></div>
                                                    <span className="truncate">Laravel Rest API</span>
                                                    <span className="font-medium xl:ml-auto">31th</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- END: Schedules --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END: Content --> */}
        </div>
     </div>




    // </div>
  )
}

export default Dashboard