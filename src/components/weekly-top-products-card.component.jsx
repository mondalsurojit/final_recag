import React from 'react';

const WeeklyTopProductsData = ({ images, productName, productCategory, stock, status }) => {
    return (
        <tr data-tw-merge="" className="intro-x">

            <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                <div className="flex">
                    {images.map((image, index) => (
                        <div key={index} className={`image-fit zoom-in h-10 w-10 ${index !== 0 ? '-ml-5' : ''}`}>
                            <img data-placement="top" title={`Uploaded at some date`} src={image} alt="Product" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" />
                        </div>
                    ))}
                </div>
            </td>


            <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                <a className="whitespace-nowrap font-medium" href="/">
                    {productName}
                </a>
                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                    {productCategory}
                </div>
            </td>


            <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                {stock}
            </td>


            <td data-tw-merge="" className="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                <div className={`flex items-center justify-center ${status.toLowerCase() === 'active' ? 'text-success' : 'text-danger'}`}>
                    <i data-tw-merge="" data-lucide="check-square" className="stroke-1.5 mr-2 h-4 w-4"></i>
                    {status}
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
    )
}

export default WeeklyTopProductsData;