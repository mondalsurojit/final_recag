import React from 'react';

const Breadcrumb = () => {
    return (
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
    )
}

export default Breadcrumb;