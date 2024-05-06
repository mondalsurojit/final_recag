import React from 'react';
import img1 from "../Images/svg-1.svg"
import img2 from "../Images/link-4.svg"

function Cryptop7() {
    return (
        <div>
            <div className='mb-[5rem]'>
            <img
          className=" w-[49px] h-[49px] z-[11]"
          alt=""
          src={img2}
        />
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='flex justify-center items-center text-white font-bold sm:text-[3.75rem] text-[2rem]'>Get the latest app updates</h1>
                    <p className='text-white text-[1.2rem] max-w-[500px] flex justify-center items-center text-center p-2'>Lorem ipsum dolor sit amet, consectetuer piscing elit, sed diam nonummy nibh euism tincidunt ut.</p>
                </div>

                <div className='flex flex-row flex-wrap justify-center items-center mt-8 gap-[1.5rem]'>
                    <input placeholder="Enter Email" type="text" className='p-1 sm:w-[40%] w-[70%]  text-[1.5rem] bg-darkblue-100  outline-none border-b border-black text-white' />

                    <button className="cursor-pointer py-[1rem] pr-[1.5rem] pl-[2rem] bg-tomato w-[192.4px]    rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[0.606rem] z-[1] border-[2px] border-solid border-tomato">
                        <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.5rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                            Subscribe
                        </div>
                        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                            <img
                                className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                alt=""
                                src={img1}
                            />
                        </div>
                    </button>
                </div>
            </div>

           
        </div>
    );
}

export default Cryptop7;
