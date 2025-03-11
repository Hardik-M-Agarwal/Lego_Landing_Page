/*import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-darkBlue py-4 text-white text-center">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-sm font-body">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-gray-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-sm font-body hover:underline"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;*/

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e50] text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top section with logo and main content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Logo and location section */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <img src="/logo.png" alt="LEGO Logo" className="w-14 h-14 mb-6" />
              <div className="inline-flex items-center bg-[#252449] px-4 py-2 rounded transition-all hover:bg-[#2d2e5c] cursor-pointer">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span>India</span>
              </div>
            </div>
          </div>

          {/* About us section */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold mb-6 tracking-wide">ABOUT US</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform">About the LEGO Group</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform">LEGO® news</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform">Sustainability</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform">LEGO product certification</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform">LEGO careers</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform">LEGO Compliance Line</a></li>
            </ul>
          </div>

          {/* Support section */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold mb-6 tracking-wide">SUPPORT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform">Find building instructions</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform">Replacement parts</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform">Product recalls</a></li>
            </ul>
          </div>

          {/* Follow us section */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold mb-6 tracking-wide">FOLLOW US</h3>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with divider */}
        <div className="pt-8 border-t border-gray-700">
          {/* Legal links */}
          <div className="flex flex-wrap gap-y-2 mb-6">
            {['Privacy policy', 'Cookies', 'Legal notice', 'Terms of Use', 'Digital wellbeing', 'Accessibility', 'Cookie Settings'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-xs mr-6 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright text */}
          <div className="text-xs text-gray-400 leading-relaxed">
            <p>LEGO System A/S, DK-7190 Billund, Denmark. Must be 18 years or older to purchase online. LEGO, the LEGO logo, the Minifigure, DUPLO, the FRIENDS logo, the MINIFIGURES logo, DREAMZ, NINJAGO, VIDIYO and MINDSTORMS are trademarks of the LEGO Group. ©2025 The LEGO Group. All rights reserved. Use of this site signifies your agreement to the Terms of Use.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;