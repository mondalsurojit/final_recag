// import React, { useState } from 'react';
// import log from "../image/logo.svg";
// import { BarChart2, XCircle } from 'lucide-react';
import { Home } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { Component } from 'lucide-react';
import { FileCode2 } from 'lucide-react';
import { Laptop } from 'lucide-react';
import { BookMarked } from 'lucide-react';
import { Users } from 'lucide-react';
import { Radio } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { ScreenShare } from 'lucide-react';
import { GlobeLock } from 'lucide-react';
import { Anvil } from 'lucide-react';

// function Mobilemenu() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         console.log("ok");
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div>
//             <div className="rubick px-5 sm:px-8 py-4 before:content-[''] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 dark:before:from-darkmode-800 dark:before:to-darkmode-800 before:fixed before:inset-0 before:z-[-1]">
//                 <div className={`mobile-menu group top-0 inset-x-0 fixed z-[60] border-b border-white/[0.08] md:hidden before:content-[''] before:w-full before:h-screen before:z-10 before:fixed before:inset-x-0 ${menuOpen ? 'bg-blue-500' : ''}`}>
//                     <div className="flex items-end px-3 py-4" style={{ height: "70px" }}>
//                         <Link className="mr-auto flex" to="/">
//                             <img className="w-6" src={log} alt="Midone - Tailwind Admin Dashboard Template" />
//                         </Link>
//                         <button onClick={toggleMenu} style={{ position: "fixed", top: "0", right: "0", marginTop: "20px", marginRight: "15px", cursor: "pointer" }}>
//                             {menuOpen ? <XCircle style={{ color: "white", height: "2rem", width: "2rem", transform: "rotate(-90deg)" }} /> : <BarChart2 rotate={90} style={{ color: "white", height: "2rem", width: "2rem", transform: "rotate(-90deg)" }} />}
//                         </button>
//                     </div>

//                     <div className={menuOpen ? "block" : "hidden"}>
//                         <Link to="/" className="fixed top-0 right-0 mt-4 mr-4">
//                             <i data-tw-merge="" data-lucide="x-circle" className="stroke-1.5 mobile-menu-toggler h-8 w-8 -rotate-90 transform text-white"><XCircle /></i>
//                         </Link>


//                         <ul style={{ zIndex: "-1" }}>
//                             <li>
//                                 <Link className="menu menu--active" to="/dashboard">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="home" className="stroke-1.5 w-5 h-5"><Home /></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Dashboard
//                                     </div>

//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/dataset">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="shopping-bag" className="stroke-1.5 w-5 h-5"><LayoutDashboard/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Dataset
//                                     </div>
//                                 </Link>                             
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/model">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="inbox" className="stroke-1.5 w-5 h-5"><Component/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Model
//                                     </div>
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/code">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="hard-drive" className="stroke-1.5 w-5 h-5"><FileCode2/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Code
//                                     </div>
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/competition">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="credit-card" className="stroke-1.5 w-5 h-5"><Laptop/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Competitions
//                                     </div>
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/courses">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="message-square" className="stroke-1.5 w-5 h-5"><BookMarked/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Courses
//                                     </div>
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/discussions">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="file-text" className="stroke-1.5 w-5 h-5"><Users/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Discussions
//                                     </div>
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/rankings">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="calendar" className="stroke-1.5 w-5 h-5"><Radio/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Rankings
//                                     </div>
//                                 </Link>
//                             </li>

//                             {/* <li className="menu__divider my-6"></li> */}
//                             <li>
//                                 <Link className="menu" to="/documentation">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="edit" className="stroke-1.5 w-5 h-5"><FileText/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Research Paper
//                                     </div>
//                                 </Link>                                
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/blog">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="users" className="stroke-1.5 w-5 h-5"><Newspaper/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Blog
//                                     </div>
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/hostcomp">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="trello" className="stroke-1.5 w-5 h-5"><ScreenShare/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Host Competitions
//                                     </div>
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link className="menu" to="/privacy">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="layout" className="stroke-1.5 w-5 h-5"><GlobeLock/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Privacy
//                                     </div>
//                                 </Link>
//                             </li>

//                             {/* <li className="menu__divider my-6"></li> */}

//                             <li>
//                                 <Link className="menu" to="/team">
//                                     <div className="menu__icon">
//                                         <i data-tw-merge="" data-lucide="inbox" className="stroke-1.5 w-5 h-5"><Linknvil/></i>
//                                     </div>
//                                     <div className="menu__title">
//                                         Team
//                                     </div>
//                                 </Link>
//                             </li>

//                             {/* <!-- END: First Child --> */}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             {/* <!-- END: Mobile Menu --> */}
//         </div>
//     )
// }

// export default Mobilemenu
import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import log from "../../Images/recaglogo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}



const navigation = [
        { href: "/dashboard", icon: Home, name: "Dashboard" },
        { href: "/Dataset", icon: LayoutDashboard, name: "Dataset" },
        { href: "/model", icon: Component, name: "Model" },
        { href: "/code", icon: FileCode2, name: "Code" },
        { href: "/competition", icon: Laptop, name: "Competition" },
        { href: "/courses", icon: BookMarked, name: "Courses" },
        { href: "/discussions", icon: Users, name: "Discussions" },
        { href: "/rankings", icon: Radio, name: "Rankings" },
        { href: "/documentation", icon: FileText, name: "Documentation" },
        { href: "/blog", icon: Newspaper, name: "Blog" },
        { href: "/host-competition", icon: ScreenShare, name: "Host Competition" },
        { href: "/privacy", icon: GlobeLock, name: "Privacy" },
        { href: "/team", icon: Anvil, name: "Team" }
  ]

const Mobilemenu = () => {
  return (
    <div className="block sm:hidden">
      <Disclosure as="nav" className="bg-darkblue-100">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src={log}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
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
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                  
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Mobilemenu;

// {/* <div className='d-flex tit'>
// <Link to="/" className=" " >
//     {/* <img src={logo} alt='logo' className='logo' /> */}
//     <span className='mo-tit'>Bharat Tech</span>
// </Link>
// <div className="menu" onClick={() => setMenuOpen(!menuOpen)} style={{ height: "1.5rem", width: "2rem", top: "1.5rem" }}>
//     <span></span>
//     <span></span>
//     <span></span>
// </div>

// <ul className={menuOpen ? "open" : ""} style={{ background: "#1e40ad", right: "0", marginTop: "55px" }}>
//     <li>
//         <Nav.Link className='mo-men'>
//             <Link to="/dashboard" className={`si-menu flex items-center `} >
//                 <div className="side-menu__icon">
//                     <Home size={20} />
//                 </div>
//                 <div className="side-menu__title ml-3 pt-1">
//                     Dashboard
//                 </div>
//             </Link>
//         </Nav.Link>
//     </li>
//     <li>
//         <Nav.Link className='mo-men'>
//             <Link to="/Dataset" className={`si-menu flex items-center  `} >
//                 <div className="side-menu__icon">
//                     <LayoutDashboard size={20} />
//                 </div>
//                 <div className="side-menu__title ml-3 pt-1">
//                     Dataset
//                 </div>
//             </Link>
//         </Nav.Link>
//     </li>
//     <li>
//         <Nav.Link className='mo-men'><Link to="/model" className={`si-menu flex items-center  `}>
//             <div className="side-menu__icon">
//                 <Component size={20} />
//             </div>
//             <div className="side-menu__title ml-3 pt-1">
//                 Model
//             </div>
//         </Link> </Nav.Link>
//     </li>
//     <li>
//         <Nav.Link className='mo-men'><Link to="/code" className={`si-menu flex items-center  `}>
//             <div className="side-menu__icon">
//                 <FileCode2 size={20} />
//             </div>
//             <div className="side-menu__title ml-3 pt-1">
//                 Code
//             </div>
//         </Link></Nav.Link>
//     </li>
    
//     <li>
//         <Nav.Link className='mo-men'>                        
//         <Link to="/competition" className={`si-menu flex items-center  `}>
//             <div className="side-menu__icon">
//                 <Laptop size={20}/>
//             </div>
//             <div className="side-menu__title ml-3 pt-1">
//                 Competitions
//             </div>
//         </Link></Nav.Link>
//     </li>

//     <li>
//         <Nav.Link className='mo-men'><Link to="/courses" className={`si-menu flex items-center  `}>
//             <div className="side-menu__icon">
//                 <BookMarked size={20}/>
//             </div>
//             <div className="side-menu__title ml-3 pt-1">
//                 Courses
//             </div>
//         </Link></Nav.Link>
//     </li>

//     <li>
//         <Nav.Link className='mo-men'><Link to="/discussions" className={`si-menu flex items-center  `}>
//             <div className="side-menu__icon">
//                 <Users size={20}/>
//             </div>
//             <div className="side-menu__title ml-3 pt-1">
//                 Discussions
//             </div>
//         </Link></Nav.Link>
//     </li>

//     <li>
//         <Nav.Link className='mo-men'><Link to="/rankings" className={`si-menu flex items-center  `}>
//             <div className="si-menu__icon">
//                 <Radio size={20}/>
//             </div>
//             <div className="side-menu__title ml-3 pt-1">
//                 Rankings
//             </div>
//         </Link></Nav.Link>
//     </li>

//     <li>
//         <Nav.Link className='mo-men'><Link to="/documentation" className={`si-menu flex items-center  `}>
//             <div className="side-menu__icon">
//                 <FileText size={20}/>
//             </div>
//             <div className="side-menu__title ml-3 pt-1">
//                 Research Paper
//             </div>
//         </Link></Nav.Link>
//     </li>

//     <li>
//         <Nav.Link className='mo-men'><Link to="/blog" className={`si-menu flex items-center  `}>
//             <div className="side-menu__icon">
//                 <Newspaper size={20}/>
//             </div>
//             <div className="side-menu__title ml-3 pt-1">
//                 Blog
//             </div>
//         </Link></Nav.Link>
//     </li>

//     <li>
//         <Nav.Link className='mo-men'><Link to="/hostcomp" className={`si-menu flex items-center  `}>
//             <div className="side-menu__icon">
//                 <ScreenShare size={20}/>
//             </div>
//             <div className="side-menu__title ml-3">
//                 Host Competitions
//             </div>
//         </Link></Nav.Link>
//     </li>

//     <li>
//         <Nav.Link className='mo-men'><Link to="/privacy" className={`si-menu flex items-center  `}>
//             <div className="si-menu__icon">
//                 <GlobeLock size={20}/>
//             </div>
//             <div className="side-menu__title ml-3 pt-1">
//                 Privacy
//             </div>
//         </Link></Nav.Link>
//     </li>





// </ul>


// </div> */}