import React, { useEffect, useState } from 'react';
import log from "../image/logo.svg";
import { 
    Home, LayoutDashboard, Component, FileCode2, 
    Laptop, BookMarked, Users, Radio, FileText, 
    Newspaper, ScreenShare, GlobeLock, Anvil 
} from 'lucide-react';

const Simplemenu = () => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);

    const menuItems = [
        { href: "/dashboard", icon: Home, label: "Dashboard" },
        { href: "/Dataset", icon: LayoutDashboard, label: "Dataset" },
        { href: "/model", icon: Component, label: "Model" },
        { href: "/code", icon: FileCode2, label: "Code" },
        { href: "/competition", icon: Laptop, label: "Competition" },
        { href: "/courses", icon: BookMarked, label: "Courses" },
        { href: "/discussions", icon: Users, label: "Discussions" },
        { href: "/rankings", icon: Radio, label: "Rankings" },
        { href: "/documentation", icon: FileText, label: "Documentation" },
        { href: "/blog", icon: Newspaper, label: "Blog" },
        { href: "/host-competition", icon: ScreenShare, label: "Host Competition" },
        { href: "/privacy", icon: GlobeLock, label: "Privacy" },
        { href: "/team", icon: Anvil, label: "Team" }
    ];

    return (
        <div className="bg-darkblue-500">
            <div className="side-nav side-nav--simple">
                <a className="intro-x flex items-center pt-6 ml-4" href="/">
                    <img className="w-6 ml-5 " src={log} alt="Midone - Tailwind Admin Dashboard Template" />
                    <span className="hidden ml-3 text-white text-[19px]  xl:block">BharatTech</span>
                </a>
                <div className="side-nav__divider my-6"></div>
                <ul className="ml-4 text-xl mt-6">
                    {menuItems.map((item, index) => (
                        <li key={index} className="">
                            <a 
                                href={item.href} 
                                className={`side-menu ${activeLink === item.href ? 'side-menu--active' : ''}`}
                            >
                                <div className="side-menu__icon">
                                    <item.icon size={22} />
                                </div>
                                <div className="side-menu__title ml-3">
                                    {item.label}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Simplemenu;
