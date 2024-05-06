import React from 'react';
import img1 from "../Images/icon-6.svg";
import img2 from "../Images/svg-4.svg";
import img3 from "../Images/h4holdersingleimg1png@2x.png";

function Cryptop04() {
  return (
    <div>
      <section className="relative max-w-full  text-left text-lightsteelblue font-montserrat flex sm:flex-row flex-col sm:gap-[9rem] gap-8 items-center justify-center px-4">
        <div className="w-full max-w-[425.6px] flex flex-col sm:items-start items-center justify-start gap-6">
          <h1 className="text-[2.6rem] font-extrabold justify-center items-center leading-[2.5rem] text-white ">
            All-in-one gateway
          </h1>
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <img className="h-8 w-8" alt="" src={img1} />
              <p className="text-sm leading-relaxed">
                Vel illum dolore eu feugiat nulla facilisis at vero eros et accuqui blandit praesent luptatum zzril delenit augue duis.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img className="h-8 w-8" alt="" src={img1} />
              <p className="text-sm leading-relaxed">
                Autem vel eum iriure dolor in hendrerit in vulputate velit essedo lore eu feugiat nulla facilisis at vero eros et accumsan.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img className="h-8 w-8" alt="" src={img1} />
              <p className="text-sm leading-relaxed">
                Vel illum dolore eu feugiat nulla facilisis at vero eros et accuqui blandit praesent luptatum zzril delenit augue duis.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white rounded-md px-4 py-2">
            <span className="text-sm font-semibold text-midnightblue">Read More</span>
            <img className="h-4 w-4" alt="" src={img2} />
          </button>
        </div>
        <div className="w-full max-w-[600px] sm:w-auto">
          <img className="w-full sm:h-[600px] h-[400px]" alt="" src={img3} />
        </div>
      </section>
    </div>
  );
}


export default Cryptop04;
