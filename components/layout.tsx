import { useState } from 'react';
import { NavItemGroq, SiteSettingsGroq } from '../lib/sanity-queries';
import SideNav from './sideNav';
import Image from 'next/image';
import { imageBuilder } from '../lib/sanity-client';

interface Props {
  siteSettings: SiteSettingsGroq;
  navItems: NavItemGroq[];
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ siteSettings, navItems, children }: Props) {
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <div className="flex">
      <div className='flex items-center lg:hidden fixed z-50 bg-black bg-opacity-30 backdrop-blur w-full h-[60px] border-b border-white border-opacity-5'>
        <div className='grow flex items-center'>
          <div className='flex items-center mx-5'>
            {siteSettings.secondaryIcon &&            
              <Image
                height={40}
                width={40}
                src={imageBuilder(siteSettings.secondaryIcon).height(40).url()}
              />
            }
          </div>
          <div>{siteSettings.name}</div>
        </div>
        <div className='mx-5'>
          <button
            className="h-[40px] w-[40px] flex flex-col items-center justify-center text-2xl cursor-pointer lg:hidden bg-white bg-opacity-60 rounded-lg backdrop-blur-lg"
            onClick={() => setShowNavMenu(!showNavMenu)}
          >
            <div
              className={`h-[2px] w-[30px] bg-black bg-opacity-50 ease-in-out duration-100 mb-[10px] ${
                showNavMenu ? 'rotate-45 translate-y-[6px]' : 'rotate-0'
              }`}
            ></div>
            <div
              className={`h-[2px] w-[30px] bg-black bg-opacity-50 ease-in-out duration-200 ${
                showNavMenu ? '-rotate-45 -translate-y-[6px]' : 'rotate-0'
              }`}
            ></div>
          </button>
        </div>
      </div>
      <div className={`fixed h-full bg-sidenav-600 z-50 lg:flex lg:translate-x-0 shadow-lg transition-all ease-in-out ${showNavMenu ? 'translate-x-0' : '-translate-x-[305px]'}`}>
        <SideNav siteSettings={siteSettings} navItems={navItems} />
      </div>
      {showNavMenu && 
        <div className={`
            fixed t-0 l-0 h-full w-full bg-black backdrop-blur-sm z-40
            ${showNavMenu ? 'bg-opacity-20 backdrop-blur-sm' : 'bg-opacity-0 backdrop-blur-none'}
          `}
          onClick={() => setShowNavMenu(false)}
        ></div> 
      }
      <div id="main" className="lg:ml-[300px] mt-[60px] lg:mt-auto w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}
