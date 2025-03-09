import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
   return (
      <main
         role='main'
         className='mt-20 md:mt-auto text-center md:text-left container w-full mx-auto h-screen flex flex-col gap-8 items-center md:flex-row-reverse md:justify-between md:px-12 lg:px-32'
      >
         <div className='md:hidden'>
            <img src={assets.HeroImgMobile} alt='' />
         </div>
         <div className='hidden md:block w-2/5 shrink-0'>
            <img src={assets.HeroImgDesktop} alt='' />
         </div>
         <div className='px-4 flex flex-col gap-4 md:gap-8 items-center mb-4 md:items-start max-w-130 '>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-semibold md:font-bold '>
               Make remote work
            </h1>
            <p className='text-gray-500 font-semibold max-w-120'>
               Get your team in sync, no matter your location. Streamline processes,
               create team rituals, and watch productivity soar.
            </p>
            <button className='px-6 py-4 bg-black text-white rounded-xl hover:bg-transparent border hover:border-black hover:text-black cursor-pointer'>
               Learn more
            </button>
            <div className='flex justify-between items-start w-full mt-4'>
               <img src={assets.ClientDatabiz} alt='' />
               <img src={assets.ClientAudiophile} alt='' />
               <img src={assets.ClientMeet} alt='' />
               <img src={assets.ClientMaker} alt='' />
            </div>
         </div>
      </main>
   );
};

export default Header;
