import React from 'react';
import Slider from 'react-slick';
import ImportantNotes from './important-notes.component';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "red" }}
//             onClick={onClick}
//         />

//         // <button data-tw-merge="" data-carousel="important-notes" data-target="prev" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed tiny-slider-navigator mr-2 border-slate-300 px-2 text-slate-600 dark:text-slate-300"><ChevronLeft className="stroke-1.5 h-4 w-4" /></button>
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }

const ImportantNotesSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        accessibility: true,
    };

    return (
        <div data-config="" id="important-notes" className="tiny-slider">
            <Slider {...settings}>
                <ImportantNotes />
                <ImportantNotes />
                <ImportantNotes />
            </Slider>
        </div>
    );
};

export default ImportantNotesSlider;
