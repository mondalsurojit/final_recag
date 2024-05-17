import React, { useEffect, useState } from 'react'
import img1 from "../Images/h4lightteammemberimg1jpg@2x.png"
import img5 from "../Images/h4lightteammemberimg2jpg@2x.png"
import img6 from "../Images/h4lightteammemberimg3jpg@2x.png"
import img7 from "../Images/h4lightteammemberimg4jpg@2x.png"
import img8 from "../Images/h4lightteammemberimg5jpg@2x.png"
import img9 from "../Images/h4lightteammemberimg6jpg@2x.png"
import img10 from "../Images/h4lightteammemberimg7jpg@2x.png"
import img11 from "../Images/h4lightteammemberimg8jpg@2x.png"
import img12 from "../Images/h4holdersingleimg2png@2x.png"
import img2 from "../Images/icon-9.svg"
import img3 from "../Images/icon-10.svg"
import img4 from "../Images/linkdin(www.recag.in)(www.bharat-tech.org).png"
import img33 from "../Images/icon-33.svg"
import img34 from "../Images/svg.svg"

import img41 from "../Images/icons8-source-code-75.png"
import img42 from "../Images/icons8-dataset-100.png"
import img43 from "../Images/icons8-ai-75.png"
import img44 from "../Images/icons8-cap-75.png"
import img45 from "../Images/icons8-search-in-list-75.png"
import img46 from "../Images/icons8-competition-80.png"
import img47 from "../Images/icons8-software-75.png"
import img49 from "../Images/icons8-community-75.png"
import img48 from "../Images/icons8-code-fork-75.png"
import imgy from "../Images/svg-1.svg"
import img61 from "../Images/icon-35.svg"

// import "../pages/tada.css"
function Cryptop06() {

    const [isHovered, setIsHovered] = useState(false);

    const card = [
        {
            id: "1",
            img: img1,
            post: "Executive",
            name: "Cheryl Patterson"
        },
        {
            id: "2",
            img: img5,
            post: "Manager",
            name: "Richard Guzman"
        },
        {
            id: "3",
            img: img6,
            post: "Economist",
            name: "Andrea Walker"
        },
        {
            id: "4",
            img: img7,
            post: "Ceo",
            name: "Jonathan Hunt"
        },
        {
            id: "5",
            img: img8,
            post: "Developer",
            name: "Vincent Lucas"
        },
        {
            id: "6",
            img: img9,
            post: "Account",
            name: "Hannah Torres"
        },
        {
            id: "10",
            img: img10,
            post: "Designer",
            name: "Jacob Sandoval"
        },
        {
            id: "11",
            img: img11,
            post: "UI/UX Designer",
            name: "Melissa Ortega"
        },
    ]


    const inputcluster = [
        {
            id: "1",
            heading: "Code",
            img: img41
        },
        {
            id: "2",
            heading: "Dataset",
            img: img42
        },
        {
            id: "3",
            heading: "Model",
            img: img43
        },
        {
            id: "4",
            heading: "Learn",
            img: img44
        },
        {
            id: "5",
            heading: "Research",
            img: img45
        },
        {
            id: "6",
            heading: "Host competitions",
            img: img46
        },
        {
            id: "7",
            heading: "Open source",
            img: img47
        },
        {
            id: "8",
            heading: "Code together",
            img: img48
        },
        {
            id: "9",
            heading: "Community",
            img: img49
        },
    ]
    return (
        <div>
            <section className="relative   flex flex-row items-end justify-start sm:gap-[1.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat ">

                <div className="flex-1 flex flex-col items-center justify-end pt-[0rem] px-[0rem] pb-[1.563rem] box-border ">
                    <div className=" flex flex-col   items-center justify-center py-[0rem]  px-[1.25rem] box-border max-w-full">
                        <h1 className="m-0 sm:w-[648px] relative text-inherit tracking-[-2.4px] leading-[4.05rem] font-bold font-inherit flex items-center justify-center shrink-0 z-[2] mq450:text-[2.25rem] mq450:leading-[2.438rem] mq1050:text-[3.5rem] mq1050:leading-[3.25rem]   ">
                            Meet the professionals
                        </h1>
                        <p className="text-[1.2rem] sm:w-[648px] flex py-4 flex-row">Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem, nonfringilla dui enim et ante eleiz.</p>
                    </div>

                    <div className='mt-4 flex flex-row flex-wrap gap-[1.91rem] justify-evenly'>

                        {
                            card.map((data) => (
                                <Card key={data.id} data={data} />
                            ))
                        }
                    </div>



                </div>

            </section>


            {/*  */}




            <section className="  mt-[5rem] sm:px-[7rem] p-0 flex flex-row items-start justify-start sm:gap-[1.188rem] max-w-full text-center sm:text-[3.75rem] text-[3rem] text-white font-montserrat ">

                {/* <div className="flex-1 flex  sm:flex-row flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.563rem] box-border "> */}
                {/* part7 */}
                <div className='mt-[10rem]'></div>
                <div className="  self-stretch  flex flex-row flex-wrap  items-start justify-start  max-w-full lg:flex-wrap gap-[11rem]">
                    <div className=" flex flex-row  items-end justify-start gap-[1.188rem]  max-w-full lg:flex-1 mq450:flex-wrap mq750:min-w-full">

                        <div className=" flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[3.438rem] box-border min-w-[430px] min-h-[352px] max-w-full p-1">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[2.038rem] max-w-full">
                                <h1 className="m-0 p-1 text-[3.4rem] relative  tracking-[-2px] leading-[3.188rem] font-bold font-inherit flex items-center max-w-full box-border pr-[0rem] z-[4] mq450:text-[1.875rem] mq450:leading-[1.938rem] mq1050:text-[2.5rem] mq1050:leading-[2.563rem]">
                                    The right solution
                                </h1>

                                <div className="self-stretch p-2 flex flex-col items-start justify-start gap-[2.356rem] max-w-full text-[1.1rem] text-royalblue-100 ">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] ">
                                        <div className="w-[350.8px] flex flex-row items-end justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full gap-[1.25rem]">
                                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                                <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium inline-block min-w-[93.5px]">
                                                    Development
                                                </div>
                                            </div>
                                            <button className="cursor-pointer [border:none] pt-[0.438rem] pb-[0.563rem] pr-[0.625rem] pl-[0.8rem] bg-royalblue-100 h-8 rounded flex flex-col items-start justify-start box-border gap-[0.563rem]">
                                                <div className="h-4 relative text-[0.813rem] tracking-[0.26px] leading-[2.063rem] font-medium font-montserrat text-white text-left flex items-center shrink-0 min-w-[28.8px]">
                                                    60%
                                                </div>
                                                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.45rem]">
                                                    <div className="h-[5px] w-3 relative box-border border-t-[5px] border-solid border-royalblue-100 border-r-[6px] border-l-[6px]" />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="self-stretch rounded-10xs bg-white overflow-hidden flex flex-row items-start justify-start z-[4]">
                                            <div className="h-1.5 w-[304.8px] relative bg-royalblue-100 overflow-hidden shrink-0" />
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] ">
                                        <div className="self-stretch flex flex-row items-end justify-between py-[0rem] pr-[0.938rem] pl-[0rem] gap-[1.25rem] mq450:flex-wrap">
                                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                                <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium inline-block min-w-[91.4px] box-border pr-[0rem]">
                                                    UI/UX Design
                                                </div>
                                            </div>
                                            <button className="cursor-pointer [border:none] pt-[0.438rem] pb-[0.563rem] pr-[0.688rem] pl-[0.831rem] bg-tomato h-8 rounded flex flex-col items-start justify-start box-border gap-[0.563rem]">
                                                <div className="h-4 relative text-[0.813rem] tracking-[0.26px] leading-[2.063rem] font-medium font-montserrat text-white text-left flex items-center shrink-0 min-w-[27.7px]">
                                                    92%
                                                </div>
                                                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[0.419rem]">
                                                    <div className="h-[5px] w-3 relative box-border border-t-[5px] border-solid border-tomato border-r-[6px] border-l-[6px]" />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="self-stretch h-1.5 rounded-10xs bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border max-w-full z-[4]">
                                            <div className="self-stretch flex-1 relative bg-tomato overflow-hidden max-w-full" />
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] ">
                                        <div className="w-[442.3px] flex flex-row items-end justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq450:flex-wrap">
                                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                                <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium inline-block min-w-[92.7px]">
                                                    Compatibility
                                                </div>
                                            </div>
                                            <button className="cursor-pointer [border:none] pt-[0.438rem] pb-[0.563rem] pr-[0.681rem] pl-[0.825rem] bg-darkblue-200 h-8 rounded flex flex-col items-start justify-start box-border gap-[0.563rem] ">
                                                <div className="h-4 relative text-[0.813rem] tracking-[0.26px] leading-[2.063rem] font-medium font-montserrat text-white text-left flex items-center shrink-0 min-w-[27.9px]">
                                                    78%
                                                </div>
                                                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[0.425rem]">
                                                    <div className="h-[5px] w-3 relative box-border border-t-[5px] border-solid border-darkblue-200 border-r-[6px] border-l-[6px]" />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="self-stretch h-1.5 rounded-10xs bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full z-[4]">
                                            
                                        <div className="self-stretch rounded-10xs bg-white overflow-hidden flex flex-row items-start justify-start z-[4]">
                                            <div className="h-1.5 w-[390.8px] relative bg-royalblue-100 overflow-hidden shrink-0" />
                                        </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row items-end justify-end gap-[1.188rem] min-w-[400px] max-w-full mq750:flex-wrap mq750:min-w-full p-2">
                        <img
                            className="h-[280.7px] sm:h-[275px] flex-1 relative  overflow-hidden object-cover  z-[4] mq450:min-w-full"
                            loading="lazy"
                            alt=""
                            src={img12}
                        />
                        {/* <div className="h-[436.7px] w-px bg-mediumslateblue-200 flex flex-col items-start justify-start relative z-[3] mq750:w-full mq750:h-px">
                <div className="w-[5px] h-[5px] absolute !m-[0] top-[-13.856rem] left-[calc(50%_-_2.5px)] rounded-8xs bg-white" />
            </div> */}
                    </div>
                </div>
                {/* part7end */}

                {/* </div> */}

            </section>




            {/*  */}








            <section className=" flex flex-row items-start justify-start sm:gap-[1.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat ">


                <div className="p-[4rem] flex-1 flex flex-col items-start justify-start pt-[6.25rem] pb-[0rem] sm:pr-[1.563rem] pr-[0rem] pl-[0rem] box-border">
                    {/* <div className="self-stretch flex flex-col items-start justify-start gap-[0.694rem] max-w-full"> */}




                        <div className="  flex sm:flex-row flex-col items-start justify-evenly pt-[0rem]  pb-[1.175rem] box-border max-w-full gap-[3.25rem] lg:flex-wrap ">
                            <div className=" flex sm:flex-row flex-col items-start justify-start gap-[1.875rem]   lg:flex-1 mq750:flex-wrap mq750:min-w-full pl-8">
                                <div className="relative flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] max-w-[350px] w-[350px] min-h-[232px] hover:bg-white hover:text-slateblue">
                                    <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                                        <span>{`$10,083.035 `}</span>
                                        <span className="text-tomato">-30.94YTD</span>
                                    </div>
                                    <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                                        Bitcoin
                                    </h1>
                                    {/* Button */}
                                    <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                        Read More
                                    </button>
                                    {/* Invisible hover area */}
                                    <div className="absolute inset-0 opacity-0 hover:opacity-100"></div>
                                </div>

                                <div className="relative w-[350px] flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] max-w-[350px] min-h-[232px] hover:bg-white hover:text-slateblue">
                                    <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                                        <span>{`$10,083.035 `}</span>
                                        <span className="text-tomato">-30.94YTD</span>
                                    </div>
                                    <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                                        Etherum
                                    </h1>
                                    {/* Button */}
                                    <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                        Read More
                                    </button>
                                    {/* Invisible hover area */}
                                    <div className="absolute inset-0 opacity-0 hover:opacity-100"></div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start bottom-1 justify-end pt-[0rem] px-[0rem] pb-[0.744rem] box-border  max-w-full text-[3.125rem] text-white lg:flex-1 mq750:min-w-full sm:pt-[6.5rem]">
                                <div className="flex flex-col items-center justify-center gap-[1.344rem] max-w-full">
                                    <h1 className="m-0 relative text-inherit tracking-[-2px] leading-[3.188rem] font-bold font-inherit inline-block max-w-full z-[6] mq450:text-[1.875rem] mq450:leading-[1.938rem] mq1050:text-[2.5rem] mq1050:leading-[2.563rem]">
                                        Our crypto pricing
                                    </h1>
                                    <div className="flex p-1 flex-row items-start justify-start gap-[0rem] text-[0.938rem] text-lightsteelblue">
                                        <img
                                            className="h-6 w-[17px] relative overflow-hidden shrink-0"
                                            alt=""
                                            src={img33}
                                        />
                                        <div className="relative leading-[1.5rem] font-medium z-[6]">
                                            <p className="m-0">
                                                Vel illum dolore eu feugiat nulla facilisis at vero eroset acc uquiblandit praesent luptatum zzril delenit augue duis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex sm:flex-row flex-col items-start justify-evenly pt-[0rem]  pb-[1.175rem] box-border max-w-full gap-[3.25rem] lg:flex-wrap ">
                            <div className=" flex flex-col items-start justify-start pt-[1.181rem] px-[0rem] pb-[0rem] box-border  max-w-full lg:flex-1 mq750:min-w-full">
                                <div className="self-stretch flex sm:flex-row flex-col items-start justify-start gap-[1.875rem] mq750:flex-wrap pl-8">
                                    <div className="relative w-[350px] flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] max-w-[350px] min-h-[232px] hover:bg-white hover:text-slateblue">
                                        <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                                            <span>{`$10,083.035 `}</span>
                                            <span className="text-tomato">-30.94YTD</span>
                                        </div>
                                        <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                                            Ripple
                                        </h1>
                                        {/* Button */}
                                        <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                            Read More
                                        </button>
                                        {/* Invisible hover area */}
                                        <div className="absolute inset-0 opacity-0 hover:opacity-100"></div>
                                    </div>
                                    <div className="relative w-[350px] flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] max-w-[350px] min-h-[232px] hover:bg-white hover:text-slateblue">
                                        <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                                            <span>{`$10,083.035 `}</span>
                                            <span className="text-tomato">-30.94YTD</span>
                                        </div>
                                        <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                                            Dash
                                        </h1>
                                        {/* Button */}
                                        <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs  opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50">
                                            Read More
                                        </button>
                                        {/* Invisible hover area */}
                                        {/* <div className="absolute inset-0 opacity-0 hover:opacity-100"></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-[2.719rem] max-w-full text-[0.938rem] text-lightsteelblue lg:flex-1 mq750:min-w-full">
                                <div className="flex flex-row p-1 items-start justify-start gap-[0.5rem]">
                                    <img
                                        className="h-6 w-[17px] relative overflow-hidden shrink-0 [debug_commit:f6aba90]"
                                        alt=""
                                        src={img33}
                                    />
                                    <div className="relative leading-[1.5rem] font-medium shrink-0 [debug_commit:f6aba90] z-[6]">
                                        <p className="m-0">
                                            Autem vel eum iriure dolor in hendrerit in vulputate velit
                                            es
                                        </p>
                                        <p className="m-0">
                                            dolore eu feugiat nulla facilisis at vero eros et.
                                        </p>
                                    </div>
                                </div>
                                <button className="cursor-pointer [border:none] py-[1.375rem] pr-[2.194rem] pl-[2.5rem] bg-tomato rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.6rem] z-[6]">
                                    <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                                        Read More
                                    </div>
                                    <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                        <img
                                            className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                            alt=""
                                            src={img34}
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>













                        <div className=" p-[1rem] self-stretch flex mt-[10rem] sm:flex-row flex-col flex-wrap items-end justify-evenly gap-[2rem] max-w-full text-[1.688rem] text-white">
                            {/* <div className="w-[388.7px] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.125rem] box-border min-h-[512px] max-w-full">
<div className="self-stretch flex flex-col items-start justify-start gap-[3.438rem]"> */}
                            {
                                inputcluster.map((item) => (
                                    <InputCluster key={item.id} item={item} />
                                ))
                            }
                            {/* </div>
</div> */}

                        </div>


                    </div>
                {/* </div> */}
            </section>


            {/* part8 end */}





            {/* part9  */}

            <section className="sm:pl-[5rem] pl-0 flex flex-row items-end justify-start sm:gap-[1.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat box-border bg-[url('https://innovio.qodeinteractive.com/wp-content/uploads/2018/10/h4-backround-img-1.png')] bg-cover bg-no-repeat bg-[top] ">

                <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.563rem] box-border">

                    <div className=" flex flex-row items-start justify-start gap-[1.188rem] max-w-full">
                        {/* <div className="h-[827.6px] w-px bg-mediumslateblue-200 flex flex-row items-start justify-start relative">
            <div className="h-[5px] w-[5px] absolute !m-[0] bottom-[-2.019rem] left-[calc(50%_-_2.5px)] rounded-8xs bg-white" />
        </div> */}
                        <div className="h-[827.6px] p-[0.5rem] flex-1 relative ">
                            {/* <div className="absolute top-[0rem] left-[26.769rem] bg-mediumslateblue-200 h-[827.6px] flex flex-row items-end justify-start pt-[12.313rem] px-[0rem] pb-[12.3rem] box-border">
                <div className="ml-[-0.125rem] h-[5px] w-[5px] relative rounded-8xs bg-white shrink-0 [debug_commit:f6aba90]" />
            </div> */}
                            <h1 className="m-0 absolute top-[16.194rem] text-inherit tracking-[-2.4px] leading-[4.05rem] font-bold font-inherit flex items-center  h-[129.6px] z-[1] mq450:text-[2.25rem] mq450:leading-[2.438rem] mq1050:text-[3rem] mq1050:leading-[3.25rem]">
                                <span className=" mb-8 flex flex-row flex-wrap w-[420px]">
                                    <p className="m-0 ">Mining platform of the future!</p>

                                </span>
                            </h1>
                            <button className="cursor-pointer [border:none] py-[1.375rem] pr-[2.181rem] pl-[2.5rem] bg-tomato absolute top-[26.225rem] left-[2rem] rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.606rem]">
                                <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[87.5px]">
                                    Buy Tokens
                                </div>
                                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                    <img
                                        className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                        alt=""
                                        src={imgy}
                                    />
                                </div>
                            </button>
                            <button className="cursor-pointer [border:none] py-[1.375rem] pr-[2.188rem] pl-[2.5rem] bg-white absolute top-[26.225rem] left-[13.638rem] rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.606rem]">
                                <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-midnightblue text-left inline-block min-w-[91.9px]">
                                    Sign In Now
                                </div>
                                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                    <img
                                        className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                        alt=""
                                        src={imgy}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* top pe le jane wala icon <img
className="absolute  w-[49px] h-[49px] z-[11]"
alt=""
src={img53}
/> */}
                </div>

            </section>




        </div>
    )
}


const Card = ({ data }) => {
    return (
        <div className='mb-[2rem]'>
            <div className="h-[431.5px] sm:w-[280px] w-[370px] flex flex-col items-center justify-center gap-[1.513rem] text-left text-[0.813rem] text-royalblue-100 font-montserrat">
                <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src={data.img}
                />
                <div
                    className="flex flex-col items-center justify-center py-[0rem] pr-[1.25rem] pl-[0rem] gap-[2.1rem]"

                >
                    <div className="flex flex-col items-center justify-center gap-[0.363rem]">
                        <div
                            className="relative text-[1.1rem] tracking-[0.26px] leading-[0.975rem] capitalize font-medium inline-block min-w-[66.4px]"

                        >
                            {data.post}
                        </div>
                        <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit text-white mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                            {data.name}
                        </h1>
                    </div>
                    <div
                        className="w-[179.3px] flex flex-row items-center justify-center py-[0rem] px-[1rem] box-border"

                    >
                        <div className="flex-1 flex flex-row items-center justify-center gap-[1.25rem]">
                            
                            <div className="h-[50.9px] w-[50px] relative">
                                
                                <img
                                    className="absolute  left-[0rem] w-full h-full overflow-hidden z-[1]"
                                    alt=""
                                    src={img4}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function InputCluster({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div
        className={`self-stretch flex flex-row items-start justify-start gap-[2rem] text-left text-[1.688rem] text-white font-montserrat mq450:flex-wrap bg-cardblue p-2 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105`}
       
      >
        <img
          className="h-[78px] w-[70px] relative overflow-hidden shrink-0 object-cover hover:transform hover:translate-y-[-10px] transition-transform duration-250 ease-in-out"
          loading="lazy"
          alt=""
          src={item.img}
        />
        <div className="flex-1 flex flex-col items-start justify-start max-w-full pt-[1.206rem] px-[0rem] pb-[0rem] box-border min-w-[187px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.594rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.513rem]">
              <h1 className="m-0 relative text-inherit tracking-[-1.08px] leading-[2.025rem] font-bold font-inherit shrink-0 [debug_commit:f6aba90] mq450:text-[1.375rem] mq450:leading-[1.625rem]">
                {item.heading}
              </h1>
              <div className="relative text-[1rem]  leading-[1.5rem] font-medium text-lightsteelblue shrink-0 [debug_commit:f6aba90]">
                <p className="m-0">Lorem proin gravida nibh vel velit aua</p>
                <p className="m-0">liquean sollicitudin lorem quis bibe</p>
                <p className="m-0">auctor, nisi elit.</p>
              </div>
            </div>
            <div className="rounded-3xs flex flex-row items-start justify-start gap-[0.875rem] text-[0.875rem]">
              <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
                <div className="relative tracking-[0.42px] text-[1rem] leading-[0.875rem] font-semibold inline-block min-w-[81.7px]">
                  Read More
                </div>
              </div>
              <div className="h-[46px] w-[46px] relative rounded-27xl box-border border-[2px] border-solid border-mediumslateblue-100">
                <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_0.5px)] bg-white w-px h-[15px]" />
                <div className="absolute top-[calc(50%_-_0.5px)] left-[calc(50%_-_7.5px)] bg-white w-[15px] h-px z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  

  const ProgressBar = () => {
      const [progress, setProgress] = useState(0);
  
      useEffect(() => {
          const interval = setInterval(() => {
              // Increment progress by 10% every second
              setProgress((prevProgress) => (prevProgress + 10) % 101);
          }, 1000);
  
          return () => clearInterval(interval);
      }, []);
  
      return (
          <div className="self-stretch rounded-10xs bg-white overflow-hidden flex flex-row items-start justify-start z-[4]">
              <div className="h-1 w-[304.8px] relative overflow-hidden shrink-0">
                  <div className="progress-bar bg-blue-700 text-xs font-medium text-white text-center leading-none rounded-full" style={{ width: `${progress}%` }}>
                      {progress}%
                  </div>
              </div>
          </div>
      );
  };
  

  


  


export default Cryptop06


