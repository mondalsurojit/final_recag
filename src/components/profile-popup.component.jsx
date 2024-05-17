import React from 'react';

const profilePopup = () => {
    return (
        <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999]">
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
        </div>
    )
}

export default profilePopup;