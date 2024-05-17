import React from 'react';

import profile8 from "../image/fakers/profile-8.jpg";
import profile12 from "../image/fakers/profile-12.jpg";
import profile14 from "../image/fakers/profile-14.jpg";
import profile15 from "../image/fakers/profile-15.jpg";
import preview1 from "../image/fakers/preview-1.jpg";
import preview2 from "../image/fakers/preview-2.jpg";
import preview12 from "../image/fakers/preview-12.jpg";
import preview15 from "../image/fakers/preview-15.jpg";


const SearchPopup = () => {
    return (
        <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="mt-5 invisible opacity-0 translate-y-1" data-enter-to="mt-[3px] visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="mt-[3px] visible opacity-100 translate-y-0" data-leave-to="mt-5 invisible opacity-0 translate-y-1" className={`search-result absolute right-0 z-60 mt-[3px]`}>
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
                            <img className="rounded-full" src={profile15} alt="Midone - Tailwind Admin Dashboard Template" />
                        </div>
                        <div className="ml-3">Tom Cruise</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                            tomcruise@left4code.com
                        </div>
                    </a>
                    <a className="mt-2 flex items-center" href="/">
                        <div className="image-fit h-8 w-8">
                            <img className="rounded-full" src={profile8} alt="Midone - Tailwind Admin Dashboard Template" />
                        </div>
                        <div className="ml-3">Arnold Schwarzenegger</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                            arnoldschwarzenegger@left4code.com
                        </div>
                    </a>
                    <a className="mt-2 flex items-center" href="/">
                        <div className="image-fit h-8 w-8">
                            <img className="rounded-full" src={profile14} alt="Midone - Tailwind Admin Dashboard Template" />
                        </div>
                        <div className="ml-3">Tom Cruise</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                            tomcruise@left4code.com
                        </div>
                    </a>
                    <a className="mt-2 flex items-center" href="/">
                        <div className="image-fit h-8 w-8">
                            <img className="rounded-full" src={profile12} alt="Midone - Tailwind Admin Dashboard Template" />
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
                        <img className="rounded-full" src={preview15} alt="Midone - Tailwind Admin Dashboard Template" />
                    </div>
                    <div className="ml-3">Nikon Z6</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                        Photography
                    </div>
                </a>
                <a className="mt-2 flex items-center" href="/">
                    <div className="image-fit h-8 w-8">
                        <img className="rounded-full" src={preview1} alt="Midone - Tailwind Admin Dashboard Template" />
                    </div>
                    <div className="ml-3">Sony A7 III</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                        Photography
                    </div>
                </a>
                <a className="mt-2 flex items-center" href="/">
                    <div className="image-fit h-8 w-8">
                        <img className="rounded-full" src={preview2} alt="Midone - Tailwind Admin Dashboard Template" />
                    </div>
                    <div className="ml-3">Samsung Q90 QLED TV</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                        Electronic
                    </div>
                </a>
                <a className="mt-2 flex items-center" href="/">
                    <div className="image-fit h-8 w-8">
                        <img className="rounded-full" src={preview12} alt="Midone - Tailwind Admin Dashboard Template" />
                    </div>
                    <div className="ml-3">Samsung Q90 QLED TV</div>
                    <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                        Electronic
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SearchPopup;