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
import React, { useState } from 'react';
import './Mobilemenu.css'; // Import CSS styles for the mobile menu
import { Link } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import logo from "../../images/recaglogo.png"


function Mobilemenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='mobile' >
           
        </nav>
    );
}

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