import React, { useState } from 'react'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../Images/recaglogo.png"
import { Search } from 'lucide-react'
import img1 from "../Images/svg-2.svg";

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Dataset', href: '/dataset', current: false },
  { name: 'Model', href: '/model', current: false },
  { name: 'Courses', href: '/courses', current: false },
  { name: 'Competition', href: '/competition', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (name) => {
    setHoveredButton(name);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  
  return (
    <Disclosure as="nav" className=" bg-darkblue-100 z-10 fixed w-full border-b border-gray-500">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">

                <div className="flex flex-shrink-0 items-center justify-center">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                </div>


                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-white' : 'text-gray-300 hover:text-tomato',
                      'relative rounded-md px-3 py-2 text-[1.2rem] font-[600]'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    onMouseEnter={() => handleMouseEnter(item.name)} // Pass the button name to the event handler
                  onMouseLeave={handleMouseLeave}
                  >
                  <div className='flex flex-row'>
                 {hoveredButton === item.name && <img src={img1} alt="img"  className='mr-2'/>} {/* Show the image only when the button is hovered */}
                  {item.name}
                  </div>
                  
                  </a>
                ))}
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <div className="relative flex items-center ml-2 mr-2">
                  <input
                    placeholder="Search..."
                    type="text"
                    className={`p-2 bg-slateblue text-white border-none outline-none rounded-md transition-all duration-300 ${expanded ? 'w-60' : 'w-0 hidden'}`}
                  />
                  <button
                    type="button"
                    className="ml-2 focus:outline-none text-white"
                    onClick={toggleExpand}
                  >
                    <Search size={24} />
                  </button>
                </div>

                <button
                  type="button"
                  className="relative rounded-full bg-darkblue p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>


              </div>

              </div>


            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? '  text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-bold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}


const CategoryButton = ({ category, ishover }) => {
  return (
    <div className={` flex flex-row items-end justify-start gap-[0.813rem] text-tomato cursor-pointer ${ishover ? 'active' : ''}`}>
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.406rem]">
        {ishover && <img className="w-[26px] h-[9px] relative overflow-hidden shrink-0" alt="" src={img1} />}
      </div>
      <div className={`flex-1 relative tracking-[0.16px] leading-[1.5rem] font-semibold inline-block min-w-[97.4px] z-[2] ${ishover ? 'active' : ''}`}>
        {category}
      </div>
    </div>
  );
};

