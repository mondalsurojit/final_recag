import React, { useState } from 'react'
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

import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Search, BellRing, RefreshCcw, ShoppingCart, CreditCard, Monitor, User } from 'lucide-react';

import Mobilemenu from './Mobilemenu.jsx'
import Simplemenu from './Simplemenu.jsx'
import "./dashb.css"

import SalesReport from "../../components/sales-report.component.jsx";
import ReportBox from '../../components/report-box.component.jsx';
import WeeklyTop from '../../components/weekly-top.component.jsx';
import SalesReport2 from '../../components/sales-report2.component.jsx';

import OfficialStoresMap from '../../components/official-stores-map.component.jsx';
import WeeklyBestSellersCard from '../../components/weekly-best-sellers-card.component.jsx';

import GeneralReportCard1 from '../../components/general-report-card1.component.jsx';
import GeneralReportCard2 from '../../components/general-report-card2.component.jsx';

import WeeklyTopProductsData from '../../components/weekly-top-products-card.component.jsx';
import ImportantNotesSlider from '../../components/important-notes-slider.component.jsx';
import TransactionsCard from '../../components/transactions-card.component.jsx';
import RecentActivitiesCard from '../../components/recent-activities-card.component.jsx';
import SearchPopup from '../../components/search-popup.component.jsx';
import NotificationPopup from '../../components/notification-popup.component.jsx';
import ProfilePopup from '../../components/profile-popup.component.jsx';
import Breadcrumb from '../../components/breadcrumb.component.jsx'


function Dashboard() {
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
        setIsSearchPopupVisible(false);
        setIsNotificationPopupVisible(false);
        setIsProfilePopupVisible(false);
    }

    // closeOtherPopups();
    return (
        <div>
            {/* style={{padding:"20px 30px"}} */}

            <Mobilemenu />
            <div className="mt-[4.7rem] flex md:mt-0">
                <Simplemenu style={{ color: "#fff" }} />


                {/* <!-- BEGIN: Content --> */}
                <div className="das md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]" style={{ overflowX: "hidden", overflowY: "scroll", height: "100%", margin: "20px 30px 20px 0" }}>
                    {/* <!-- BEGIN: Top Bar --> */}
                    <div className="relative z-[51] flex h-[67px] items-center border-b border-slate-200" style={{ zIndex: "0" }}>

                      <Breadcrumb/>

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

                    <div className="grid grid-cols-12 gap-6" style={{ zIndex: "0" }}>
                        <div className="col-span-12 2xl:col-span-9">
                            <div className="grid grid-cols-12 gap-6">
                                {/* <!-- BEGIN: General Report --> */}
                                <div className="col-span-12 mt-8" style={{ zIndex: "0" }}>
                                    <div className="intro-y flex h-10 items-center">
                                        <h2 className="mr-5 truncate text-lg font-medium">General Report</h2>
                                        <a className="ml-auto flex items-center text-primary" href="/">
                                            <i data-tw-merge="" data-lucide="refresh-ccw" className="stroke-1.5 mr-3 h-4 w-4"><RefreshCcw style={{ marginRight: "2px", height: "15px", width: "30px" }} /></i>
                                            Reload Data
                                        </a>
                                    </div>
                                    <div className="mt-5 grid grid-cols-12 gap-6">
                                        <div className="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                                            <div className="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                                                <div className="box p-4">
                                                    <div className="flex">
                                                        <i data-tw-merge="" data-lucide="shopping-cart" className="stroke-1.5 h-[28px] w-[28px] text-primary"><ShoppingCart width={28} height={28} /></i>
                                                        <div className="ml-auto">
                                                            <div data-placement="top" title="33% Higher than last month" className="cursor-pointer flex items-center rounded-full bg-success py-[3 px] pl-2 pr-1 text-xs font-medium text-white">33%
                                                                <i data-tw-merge="" data-lucide="chevron-up" className="stroke-1.5 ml-0.5 h-4 w-4 mt-1"><ChevronUp style={{ marginTop: "-6px", marginLeft: "-2px" }} /></i>
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
                                                        <i data-tw-merge="" data-lucide="credit-card" className="stroke-1.5 h-[28px] w-[28px] text-pending"><CreditCard width={28} height={28} /></i>
                                                        <div className="ml-auto">
                                                            <div data-placement="top" title="2% Lower than last month" className=" cursor-pointer flex items-center rounded-full bg-danger py-[3px] pl-2 pr-1 text-xs font-medium text-white">2%
                                                                <i data-tw-merge="" data-lucide="chevron-down" className="stroke-1.5 ml-0.5 h-4 w-4"><ChevronDown style={{ marginTop: "-5px", marginLeft: "-3px" }} /></i>
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
                                                        <i data-tw-merge="" data-lucide="monitor" className="stroke-1.5 h-[28px] w-[28px] text-warning"><Monitor height={28} width={28} /></i>
                                                        <div className="ml-auto">
                                                            <div data-placement="top" title="12% Higher than last month" className=" cursor-pointer flex items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white">12%
                                                                <i data-tw-merge="" data-lucide="chevron-up" className="stroke-1.5 ml-0.5 h-4 w-4"><ChevronUp style={{ marginTop: "-6px", marginLeft: "-2px" }} /></i>
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
                                                        <i data-tw-merge="" data-lucide="user" className="stroke-1.5 h-[28px] w-[28px] text-success"><User height={28} width={28} /></i>
                                                        <div className="ml-auto">
                                                            <div data-placement="top" title="22% Higher than last month" className=" cursor-pointer flex items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white">22%
                                                                <i data-tw-merge="" data-lucide="chevron-up" className="stroke-1.5 ml-0.5 h-4 w-4"><ChevronUp style={{ marginTop: "-6px", marginLeft: "-2px" }} /></i>
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
                                            <input data-tw-merge="" type="text" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 datepicker !box pl-10 sm:w-56" />
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
                                            <SalesReport />
                                            {/* <div className="w-auto h-[275px]">
                                                <canvas id="report-line-chart" className="chart -mb-6 mt-6"></canvas>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- END: Sales Report --> */}


                                {/* <!-- BEGIN: Weekly Top Seller --> */}
                                <ReportBox
                                    className="col-span-12 mt-8 sm:col-span-6 lg:col-span-3"
                                    title="Weekly Top Seller"
                                    linkText="Show More"
                                    reportComponent={WeeklyTop}
                                />
                                {/* <!-- END: Weekly Top Seller --> */}


                                {/* <!-- BEGIN: Sales Report --> */}
                                <ReportBox
                                    className="col-span-12 mt-8 sm:col-span-6 lg:col-span-3"
                                    title="Sales Report"
                                    linkText="Show More"
                                    reportComponent={SalesReport2}
                                    reportComponentHeight={200}
                                />
                                {/* <!-- END: Sales Report -->

                                {/* <!-- BEGIN: Official Store --> */}
                                <div className="col-span-12 mt-6 xl:col-span-8">
                                    <div className="intro-y block h-10 items-center sm:flex">
                                        <h2 className="mr-5 truncate text-lg font-medium">Official Store</h2>
                                        <div className="relative mt-3 text-slate-500 sm:ml-auto sm:mt-0">
                                            <i data-tw-merge="" data-lucide="map-pin" className="stroke-1.5 absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4"></i>
                                            <input data-tw-merge="" type="text" placeholder="Filter by city" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 !box pl-10 sm:w-56" />
                                        </div>
                                    </div>
                                    <div className="intro-y box mt-12 p-5 sm:mt-5">
                                        <div>
                                            250 Official stores in 21 countries, click the marker to see
                                            location details.
                                        </div>
                                        {/* <div data-lat="-6.2425342" data-long="106.8626478" data-sources="" data-api-key="1e86fd5a7f60486a8e899411776f60d5" className="leaflet z-0 [&_.leaflet-tile-pane]:saturate-[.3] mt-5 h-[310px] rounded-md bg-slate-200">
                                        </div> */}
                                        <OfficialStoresMap />
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
                                        <WeeklyBestSellersCard
                                            name="Kevin Spacey"
                                            imgUrl={profile9}
                                            alt="Midone - Tailwind Admin Dashboard Template"
                                            date="7 March 2022"
                                            sales="137 Sales" />

                                        <WeeklyBestSellersCard
                                            name="Al Pacino"
                                            imgUrl={profile5}
                                            alt="Midone - Tailwind Admin Dashboard Template"
                                            date="21 July 2022"
                                            sales="137 Sales" />

                                        <WeeklyBestSellersCard
                                            name="Robert De Niro"
                                            imgUrl={profile11}
                                            alt="Midone - Tailwind Admin Dashboard Template"
                                            date="19 November 2021"
                                            sales="137 Sales" />

                                        <WeeklyBestSellersCard
                                            name="Russell Crowe"
                                            imgUrl={profile3}
                                            alt="Midone - Tailwind Admin Dashboard Template"
                                            date="6 September 2021"
                                            sales="137 Sales" />

                                        <a className="intro-y block w-full rounded-md border border-dotted border-slate-400 py-4 text-center text-slate-500 dark:border-darkmode-300" href="#">
                                            View More
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- END: Weekly Best Sellers --> */}

                                {/* <!-- BEGIN: General Report --> */}
                                <div className="col-span-12 mt-8 grid grid-cols-12 gap-6">
                                    <GeneralReportCard1
                                        heading="Target Sales"
                                        subheading="300 Sales"
                                        percentage="20%" />

                                    <GeneralReportCard2
                                        heading="Social Media"
                                        subheading="320 Followers" />

                                    <GeneralReportCard1
                                        heading="New Products"
                                        subheading="1450 Products"
                                        percentage="45%" />

                                    <GeneralReportCard2
                                        heading="Posted Ads"
                                        subheading=" 180 Campaign" />
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
                                                <WeeklyTopProductsData
                                                    images={[preview6, profile6, profile9]}
                                                    productName={"Nike Air Max 270"}
                                                    productCategory={"Sport & Outdoor"}
                                                    stock={202}
                                                    status={"Inactive"}
                                                />

                                                <WeeklyTopProductsData
                                                    images={[preview3, profile13, profile12]}
                                                    productName={"Sony Master Series A9G"}
                                                    productCategory={"Electronic"}
                                                    stock={96}
                                                    status={"Inactive"}
                                                />

                                                <WeeklyTopProductsData
                                                    images={[preview3, profile10, profile5]}
                                                    productName={"Nike Tanjun"}
                                                    productCategory={"Sport & Outdoor"}
                                                    stock={50}
                                                    status={"Active"}
                                                />

                                                <WeeklyTopProductsData
                                                    images={[preview1, profile10, profile4]}
                                                    productName={"Apple MacBook Pro 13"}
                                                    productCategory={"PC & Laptop"}
                                                    stock={170}
                                                    status={"Inactive"}
                                                />

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

                                            <TransactionsCard
                                                name="Kevin Spacey"
                                                imgUrl={profile9}
                                                alt="Midone - Tailwind Admin Dashboard Template"
                                                date="7 March 2022"
                                                sales="-$121" />

                                            <TransactionsCard
                                                name="Al Pacino"
                                                imgUrl={profile5}
                                                alt="Midone - Tailwind Admin Dashboard Template"
                                                date="21 July 2022"
                                                sales="-$72" />

                                            <TransactionsCard
                                                name="Kevin Spacey"
                                                imgUrl={profile11}
                                                alt="Midone - Tailwind Admin Dashboard Template"
                                                date="19 November 2021"
                                                sales="+$45" />

                                            <TransactionsCard
                                                name="Russell Crowe"
                                                imgUrl={profile3}
                                                alt="Midone - Tailwind Admin Dashboard Template"
                                                date="6 September 2021"
                                                sales="-$44" />

                                            <TransactionsCard
                                                name="Robert De Niro"
                                                imgUrl={profile2}
                                                alt="Midone - Tailwind Admin Dashboard Template"
                                                date="22 November 2022"
                                                sales="+$21" />

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

                                            <RecentActivitiesCard
                                                profile={profile9}
                                                name={"Hugh Jackman"}
                                                time={"07:00 PM"}
                                                activity={"Has joined the team"}
                                                images={[]} />

                                            <RecentActivitiesCard
                                                profile={profile14}
                                                name={"Robert De Niro"}
                                                time={"07:00 PM"}
                                                activity={"Added 3 new photos"}
                                                images={[profile14, profile13, profile10]} />

                                            <div className="intro-x my-4 text-center text-xs text-slate-500">
                                                12 November
                                            </div>

                                            <RecentActivitiesCard
                                                profile={profile15}
                                                name={"Christian Bale"}
                                                time={"07:00 PM"}
                                                activity={"Has changed Samsung Galaxy S20 Ultra price & description"}
                                                images={[]} />

                                            <RecentActivitiesCard
                                                profile={profile10}
                                                name={"Al Pacino"}
                                                time={"07:00 PM"}
                                                activity={"Has changed Nike Tanjun description"}
                                                images={[]} />
                                        </div>
                                    </div>
                                    {/* <!-- END: Recent Activities --> */}

                                    {/* <!-- BEGIN: Important Notes --> */}
                                    <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto">
                                        <div className="intro-x flex h-10 items-center">
                                            <h2 className="mr-auto truncate text-lg font-medium">
                                                Important Notes
                                            </h2>
                                            <button data-tw-merge="" data-carousel="important-notes" data-target="prev" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed tiny-slider-navigator mr-2 border-slate-300 px-2 text-slate-600 dark:text-slate-300"><ChevronLeft className="stroke-1.5 h-4 w-4" /></button>
                                            <button data-tw-merge="" data-carousel="important-notes" data-target="next" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed tiny-slider-navigator mr-2 border-slate-300 px-2 text-slate-600 dark:text-slate-300"><ChevronRight className="stroke-1.5 h-4 w-4" /></button>
                                        </div>
                                        <div className="intro-x mt-5">
                                            <div className="box zoom-in">
                                                <ImportantNotesSlider />
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

export default Dashboard;