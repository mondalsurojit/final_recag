import React from 'react';
import { Facebook, Github, Instagram, Phone, PinOff, Twitter } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Square } from 'lucide-react';
import logo from "../Images/recaglogo.png"

function Footer() {
  return (
    <footer className="bg-blacky  sm:p-[5rem] p-4 relative z-10"> {/* Set a higher z-index for the footer */}
      {/* Footer top section */}
      <div className="flex flex-col  sm:flex-row sm:flex-wrap justify-between">
        {/* Quick contact info */}
        <div className="mb-8">
          <div className="text-white">
            <p className="mb-4 text-[1.5rem]">Quick contact info</p>
            <p className="w-[380px] text-[0.9rem] mb-4 opacity-80">Lorem ipsum dolor sit amet ut, consectetu adipisicing elit, sed do eiusmod tempor minim.</p>
          </div>
          <div className="flex flex-col text-[0.899rem] opacity-80 mt-4">
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4">
              <span className="icon-pin mr-2 text-white"><PinOff size={20} /></span>
              184 Main Street Victoria
            </a>
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4">
              <span className="icon-paper-plane mr-2 text-white"><Mail size={20} /></span>
              email@qodeinteractive.com
            </a>
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4">
              <span className="icon-phone mr-2 text-white"><Phone size={20} /></span>
              +(123) 456 -7890
            </a>
          </div>
        </div>
        {/* Latest tweets */}
        <div className="mb-8">
          <div className="text-white">
            <p className="text-[1.5rem] mb-4">Read our latest tweets:</p>
            <p className="text-[0.9rem] opacity-80">Couldn't connect with Twitter</p>
          </div>
        </div>
        {/* Blog posts */}
        <div className="mb-8">
          <div className="text-white text-[1.5rem] mb-4">
            <p>Check out our Blog:</p>
          </div>
          <div className="flex flex-col text-[0.9rem] opacity-80 mt-4">
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4">
              <span className="icon-book mr-2 text-white"><Square size={10} /></span>
              Mining platform
            </a>
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4">
              <span className="icon-book mr-2 text-white"><Square size={10} /></span>
              Fortune platform
            </a>
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4">
              <span className="icon-book mr-2 text-white"><Square size={10} /></span>
              Giving way platform
            </a>
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4">
              <span className="icon-book mr-2 text-white"><Square size={10} /></span>
              Local platform
            </a>
            {/* Add other blog post links */}
          </div>
        </div>
        {/* Location section */}
        <div className="mb-8">
          <div className="text-white text-[1.5rem]">
            <p>Location:</p>
          </div>
          <div className="flex flex-col mt-4">
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2">
              <img src='https://innovio.qodeinteractive.com/wp-content/uploads/2018/11/footer-map-img-300x171.png' alt='pic' />
            </a>
          </div>
        </div>
      </div>
      {/* Footer bottom section */}
      <div className="container mx-auto mt-12 border-t border-gray-400 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-gray-600 flex items-center">
            <img src={logo} alt="Logo" className="mr-2" width={80}/> {/* Replace "your-logo.png" with the path to your logo */}
          </div>
{/* copyright */}
          <div className="text-gray-600 flex items-center">
            <p><span style={{ color: '#666a80' }}>© 2019</span> <a href="https://qodeinteractive.com/" alt="jk"  rel="noopener">Qode Interactive</a><span style={{ color: '#666a80' }}>,</span> <span style={{ color: '#666a80' }}>All Rights Reserved</span></p>
          </div>
          {/* Social icons */}
          <div className="text-gray-600">
            <div className="flex justify-center">
              <a href="/" className="flex items-center text-gray-600 hover:bg-gray-800 mr-4 rounded-full border border-white py-2 pl-2">
                <span className="icon-facebook mr-2  text-white"><Facebook/></span>
              </a>

              <a href="/" className="flex items-center text-gray-600 hover:bg-gray-800 mr-4  rounded-full border border-white py-2 pl-2">
                <span className="icon-facebook mr-2 text-white"><Instagram/></span>
                
              </a>

              <a href="/" className="flex items-center text-gray-600 hover:bg-gray-800 mr-4  rounded-full border border-white py-2 pl-2">
                <span className="icon-facebook mr-2 text-white"><Github/></span>
                
              </a>

              <a href="/" className="flex items-center text-gray-600 hover:bg-gray-800 mr-4  rounded-full border border-white py-2 pl-2">
                <span className="icon-facebook mr-2 text-white"><Twitter/></span>
                
              </a>
              {/* Add other social media links */}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
