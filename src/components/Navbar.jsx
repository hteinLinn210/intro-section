import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
   const [featureLinkOpen, setFeatureLinkOpen] = React.useState(false);
   const [companyLinkOpen, setCompanyLinkOpen] = React.useState(false);
   const [menuOpen, setMenuOpen] = React.useState(false);

   // Close mobile menu when resizing to larger screens
   React.useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 768) {
            setMenuOpen(false);
            setFeatureLinkOpen(false);
            setCompanyLinkOpen(false);
         }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <nav
         role='navigation'
         className='container absolute top-0 left-0 right-0 w-full mx-auto h-20 flex justify-between items-center text-gray-500 z-10 px-4'
      >
         <div className='flex gap-15'>
            <img src={assets.LogoIcon} alt='Brand Logo' />
            <ul className='gap-8 hidden md:flex'>
               <li
                  className='relative'
                  onMouseEnter={() => setFeatureLinkOpen(true)}
                  onMouseLeave={() => setFeatureLinkOpen(false)}
               >
                  <button className='hover:text-black hover:fill-black'>
                     Features
                     {featureLinkOpen ? (
                        <assets.ArrowUpIcon className='inline ml-2' />
                     ) : (
                        <assets.ArrowDownIcon className='inline ml-2' />
                     )}
                  </button>
                  {featureLinkOpen && (
                     <div className='px-4 space-y-4 absolute right-0 top-6 bg-white shadow-md rounded-xl p-6'>
                        <a href='' className='flex gap-2 hover:text-black'>
                           <assets.TodoIcon />
                           Todo List
                        </a>
                        <a href='' className='flex gap-2 hover:text-black'>
                           <assets.CalendarIcon />
                           Calender
                        </a>
                        <a href='' className='flex gap-2 hover:text-black'>
                           <assets.ReminderIcon />
                           Remainder
                        </a>
                        <a href='' className='flex gap-2 hover:text-black'>
                           <assets.PlanningIcon />
                           Planning
                        </a>
                     </div>
                  )}
               </li>
               <li
                  className='relative'
                  onMouseEnter={() => setCompanyLinkOpen(true)}
                  onMouseLeave={() => setCompanyLinkOpen(false)}
               >
                  <button className='hover:text-black hover:fill-black'>
                     Company
                     {companyLinkOpen ? (
                        <assets.ArrowUpIcon className='inline ml-2' />
                     ) : (
                        <assets.ArrowDownIcon className='inline ml-2' />
                     )}
                  </button>
                  {companyLinkOpen && (
                     <div className='px-4 gap-4 absolute top-6 bg-white shadow-md rounded-xl p-6 flex flex-col'>
                        <a href='' className='whitespace-nowrap hover:text-black'>
                           History
                        </a>
                        <a href='' className='whitespace-nowrap hover:text-black'>
                           Our Team
                        </a>
                        <a href='' className='whitespace-nowrap hover:text-black'>
                           Blog
                        </a>
                     </div>
                  )}
               </li>
               <li>
                  <a href='#' className='hover:text-black'>
                     Careers
                  </a>
               </li>
               <li>
                  <a href='#' className='hover:text-black'>
                     About
                  </a>
               </li>
            </ul>
         </div>
         <div className='space-x-8 hidden md:block'>
            <a href='#' className='hover:text-black'>
               Login
            </a>
            <a
               href='#'
               className='bg-white border border-gray-400 rounded-xl py-3 px-5 hover:text-black hover:border-black'
            >
               Register
            </a>
         </div>
         <img
            src={assets.MenuIcon}
            alt='Menu Icon'
            className='md:hidden cursor-pointer'
            onClick={() => setMenuOpen(true)}
         />

         {/* Overlay with fade transition */}
         <div
            onClick={() => setMenuOpen(false)}
            className={`fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden ${
               menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
         ></div>

         {/* Mobile Menu with slide transition */}
         <div
            className={`fixed top-0 right-0 h-screen w-2/3 bg-white transition-transform duration-300 md:hidden px-6 transform ${
               menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
         >
            <div className='w-full flex justify-end h-20 items-center'>
               <img
                  src={assets.CloseIcon}
                  alt='Close Icon'
                  onClick={() => setMenuOpen(false)}
                  className='cursor-pointer'
               />
            </div>
            <ul className='flex flex-col items-start gap-4'>
               {/* Features */}
               <li>
                  <button
                     onClick={() => setFeatureLinkOpen((prevLink) => !prevLink)}
                     className='flex items-center'
                  >
                     Features
                     {featureLinkOpen ? (
                        <assets.ArrowUpIcon className='inline ml-2' />
                     ) : (
                        <assets.ArrowDownIcon className='inline ml-2' />
                     )}
                  </button>
                  {featureLinkOpen && (
                     <div className='px-4 space-y-4 mt-4'>
                        <a href='' className='flex gap-2'>
                           <assets.TodoIcon />
                           Todo List
                        </a>
                        <a href='' className='flex gap-2'>
                           <assets.CalendarIcon />
                           Calender
                        </a>
                        <a href='' className='flex gap-2'>
                           <assets.ReminderIcon />
                           Remainder
                        </a>
                        <a href='' className='flex gap-2'>
                           <assets.PlanningIcon />
                           Planning
                        </a>
                     </div>
                  )}
               </li>

               {/* Company */}
               <li>
                  <button
                     onClick={() => setCompanyLinkOpen((prevLink) => !prevLink)}
                     className='flex items-center'
                  >
                     Company
                     {companyLinkOpen ? (
                        <assets.ArrowUpIcon className='inline ml-2' />
                     ) : (
                        <assets.ArrowDownIcon className='inline ml-2' />
                     )}
                  </button>
                  {companyLinkOpen && (
                     <div className='px-4 gap-4 flex flex-col mt-4'>
                        <a href=''>History</a>
                        <a href=''>Our Team</a>
                        <a href=''>Blog</a>
                     </div>
                  )}
               </li>
               <li>
                  <a href='#'>Careers</a>
               </li>
               <li>
                  <a href='#'>About</a>
               </li>
            </ul>
            <div className='flex flex-col items-center gap-4 mt-8'>
               <a href='#' className='hover:text-black'>
                  Login
               </a>
               <a
                  href='#'
                  className='bg-white border border-gray-400 rounded-xl py-3 px-5 hover:text-black hover:border-black self-stretch text-center'
               >
                  Register
               </a>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
