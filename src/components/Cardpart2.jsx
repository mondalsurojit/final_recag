import React from 'react'

function Cardpart2(data) {
    const {name} = data;
    return (
        <div>
            <div className=' relative flex flex-row flex-wrap sm:w-[360px] w-[380px] bg-slateblue hover:bg-white hover:text-black text-white   rounded-[5px] py-[1.875rem] pr-[2.469rem] pl-[2.5rem]'>
                <div className="flex flex-col items-start justify-start gap-[0.319rem]">
                    <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium shrink-0 text-royalblue-100 [debug_commit:f6aba90]">
                        Explore the Features
                    </div>
                    <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit hover:text-black  shrink-0 [debug_commit:f6aba90] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                        <p className="m-0">{name}</p>
                        {/* <p className="m-0">{name1}</p> */}
                    </h1>
                    <div className='flex flex-row gap-4 mt-[5rem]'>

                        <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
                            <div className="relative tracking-[0.42px] leading-[0.875rem] font-semibold inline-block min-w-[81.7px]">
                                Read More
                            </div>
                        </div>
                        <div className="h-[46px] w-[46px] relative rounded-27xl box-border border-[2px] border-solid border-lavender">
                            <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_0.5px)] bg-black w-px h-[15px]" />
                            <div className="absolute top-[calc(50%_-_0.5px)] left-[calc(50%_-_7.5px)] bg-black w-[15px] h-px z-[1]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardpart2