import React from 'react'
import Navbar from '../components/Navbar'
import ScrollIndicator from '../components/ScrollIndicator'
// import rightarrow from "../Images/right-arrow-svgrepo-com.svg"

import img1 from "../Images/svg-1.svg"

import Hero from '../components/Hero'
import Cardpart2 from '../components/Cardpart2'
import Cryptop03 from '../components/Cryptop03'
import Cryptop04 from '../components/Cryptop04'
// import Cryptop05 from '../components/Cryptop05'
import Cryptop06 from '../components/Cryptop06'
import Cryptop7 from '../components/Cryptop7'
import Footer from '../components/Footer'
function Home() {
    return (
        <div className='landingpage h-[100vh] w-[100%] bg-darkblue-100 ' style={{backgroundColor:"#2434b3"}}>
        
            <Navbar />
            <ScrollIndicator left="5%" right="auto" ballOffset="15" />
            <ScrollIndicator left="35%" right="auto" ballOffset="30" />
            <ScrollIndicator left="auto" right="35%" ballOffset="12" />
            <ScrollIndicator left="auto" right="5%" ballOffset="20" />

            {/* <p className='h-[500px]'></p> */}

            <div className=' gap-[5rem] h-[100vh] flex flex-row flex-wrap justify-between items-center px-[5.4%]'>


                <div className="">
                    <h1 className=" text-[5rem] tracking-[-3px] leading-[4.688rem] font-bold font-inherit text-white z-[6]  text-justify">
                        <p className="m-0">Crypto blockchain</p>
                        <p className="m-0">revolution is here</p>
                    </h1>

                    <h3 className="sm:text-[1.2rem] mt-4 leading-[1.625rem] font-medium font-inherit z-[1] text-white opacity-80">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetuer adipis cing
                        </p>
                        <p className="m-0">diam nonummy nibhie euismod tincidunt utlaoreet.</p>
                    </h3>
                    <div className='flex flex-row space-x-4'>


                        <button className="cursor-pointer mt-4 py-[1.375rem] pr-[1.938rem] pl-[2.5rem] bg-tomato w-[192.4px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[0.606rem] z-[1] border-[2px] border-solid border-tomato">
                            <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                                Read More
                            </div>
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                <img
                                    className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                    alt=""
                                    src={img1}
                                />
                            </div>
                        </button>
                        <button className="cursor-pointer mt-4 py-[1.375rem] pr-[1.938rem] pl-[2.5rem] bg-white w-[192.4px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[0.606rem] z-[1] border-[2px] border-solid border-white">
                            <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-midnightblue text-left inline-block min-w-[87.9px]">
                                Get Innovio
                            </div>
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem] opacity-100 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-[-1.5rem]">
                                <img
                                    className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                    alt=""
                                    src={img1}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                <div className=" flex justify-center items-center">
                    <div className="max-w-full max-h-full overflow-hidden">
                        <Hero />
                    </div>
                </div>
            </div>


            <div className='flex relative sm:flex-row flex-col flex-wrap sm:mt-[0rem] mt-[15rem] justify-evenly px-[1.5rem]'>
                <div className='mb-8'>
                    <Cardpart2 name={"Use network to buy & sell shares"} />
                </div>

                <div className='mb-8'>
                    <Cardpart2 name={"Introducing the marketplace sistem"} />
                </div>

                <div className='mb-8'>
                    <Cardpart2 name={"Powering data for the new blockchain"} />
                </div>
            </div>


            <div className=' bg-darkblue-100 sm:mt-[10rem] mt-[10rem] sm:px-[2rem] px-2'>
                <Cryptop03 />
            </div>


            <div className='p-5 mt-[5rem] '>
                <Cryptop04 />
            </div>

            <div className='mt-[10rem]'>
                <Cryptop06 />
            </div>

            <div className='mt-[1rem]'>
                <Cryptop7 />
            </div>

            <div className='mb-[10rem]'>
                <Footer />
            </div>

        </div>
    )
}

export default Home



