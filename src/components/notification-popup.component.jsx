import React from "react";
import profile8 from "../image/fakers/profile-8.jpg";
import profile12 from "../image/fakers/profile-12.jpg";
import profile14 from "../image/fakers/profile-14.jpg";
import profile15 from "../image/fakers/profile-15.jpg";
import profile4 from "../image/fakers/profile-4.jpg";

const NotificationPopup = () => {
  return (
    <div
      data-transition=""
      data-selector=".show"
      data-enter="transition-all ease-linear duration-150"
      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
      data-leave="transition-all ease-linear duration-150"
      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
      className="dropdown-menu absolute z-[9999]"
      style={{
        display: "block",
        inset: "0px 0px auto auto",
        transform: "translate(-5px, 27px)",
        zIndex: "9999 !important"
      }}
    >
      <div
        data-tw-merge=""
        className="dropdown-content rounded-md border-transparent bg-white shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-2 w-[280px] p-5 sm:w-[350px]"
      >
        <div className="mb-5 font-medium">Notifications</div>
        <div className="cursor-pointer relative flex items-center">
          <div className="image-fit relative mr-1 h-12 w-12 flex-none">
            <img
              className="rounded-full"
              src={profile15}
              alt="Midone - Tailwind Admin Dashboard Template"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
          </div>
          <div className="ml-2 overflow-hidden">
            <div className="flex items-center">
              <a className="mr-5 truncate font-medium" href="/">
                Tom Cruise
              </a>
              <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                05:09 AM
              </div>
            </div>
            <div className="mt-0.5 w-full truncate text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 20
            </div>
          </div>
        </div>
        <div className="cursor-pointer relative flex items-center mt-5">
          <div className="image-fit relative mr-1 h-12 w-12 flex-none">
            <img
              className="rounded-full"
              src={profile8}
              alt="Midone - Tailwind Admin Dashboard Template"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
          </div>
          <div className="ml-2 overflow-hidden">
            <div className="flex items-center">
              <a className="mr-5 truncate font-medium" href="/">
                Arnold Schwarzenegger
              </a>
              <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                01:10 PM
              </div>
            </div>
            <div className="mt-0.5 w-full truncate text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </div>
          </div>
        </div>
        <div className="cursor-pointer relative flex items-center mt-5">
          <div className="image-fit relative mr-1 h-12 w-12 flex-none">
            <img
              className="rounded-full"
              src={profile14}
              alt="Midone - Tailwind Admin Dashboard Template"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
          </div>
          <div className="ml-2 overflow-hidden">
            <div className="flex items-center">
              <a className="mr-5 truncate font-medium" href="/">
                Tom Cruise
              </a>
              <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                01:10 PM
              </div>
            </div>
            <div className="mt-0.5 w-full truncate text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </div>
          </div>
        </div>
        <div className="cursor-pointer relative flex items-center mt-5">
          <div className="image-fit relative mr-1 h-12 w-12 flex-none">
            <img
              className="rounded-full"
              src={profile12}
              alt="Midone - Tailwind Admin Dashboard Template"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
          </div>
          <div className="ml-2 overflow-hidden">
            <div className="flex items-center">
              <a className="mr-5 truncate font-medium" href="/">
                Al Pacino
              </a>
              <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                06:05 AM
              </div>
            </div>
            <div className="mt-0.5 w-full truncate text-slate-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </div>
          </div>
        </div>
        <div className="cursor-pointer relative flex items-center mt-5">
          <div className="image-fit relative mr-1 h-12 w-12 flex-none">
            <img
              className="rounded-full"
              src={profile4}
              alt="Midone - Tailwind Admin Dashboard Template"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
          </div>
          <div className="ml-2 overflow-hidden">
            <div className="flex items-center">
              <a className="mr-5 truncate font-medium" href="/">
                Al Pacino
              </a>
              <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                05:09 AM
              </div>
            </div>
            <div className="mt-0.5 w-full truncate text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 20
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
