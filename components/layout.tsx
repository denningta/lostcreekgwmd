import { useState } from 'react';
import { NavItemGroq, SiteSettingsGroq } from '../lib/sanity-queries';
import SideNav from './sideNav';

interface Props {
  siteSettings: SiteSettingsGroq;
  navItems: NavItemGroq[];
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ siteSettings, navItems, children }: Props) {
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <div className="flex">
      <div className='flex lg:hidden fixed z-50 top-5 right-5'>
        <button
          className="h-[40px] w-[40px] flex flex-col items-center justify-center text-2xl cursor-pointer lg:hidden bg-white bg-opacity-30 rounded-lg backdrop-blur-lg"
          onClick={() => setShowNavMenu(!showNavMenu)}
        >
          <div
            className={`h-[2px] w-[30px] bg-black bg-opacity-20 ease-in-out duration-100 mb-[10px] ${
              showNavMenu ? 'rotate-45 translate-y-[6px]' : 'rotate-0'
            }`}
          ></div>
          <div
            className={`h-[2px] w-[30px] bg-black bg-opacity-20 ease-in-out duration-200 ${
              showNavMenu ? '-rotate-45 -translate-y-[6px]' : 'rotate-0'
            }`}
          ></div>
        </button>
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
      <div id="main" className="lg:ml-[300px] w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}
