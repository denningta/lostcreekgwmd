import Link from 'next/link';
import { useState } from 'react';
import { NavItemGroq } from '../lib/sanity-queries';
import { MdHome, MdReportProblem, MdSchool } from 'react-icons/md';
import { RiScales3Fill } from 'react-icons/ri';
import { BiTestTube } from 'react-icons/bi';
import { FaChartBar, FaExternalLinkSquareAlt, FaChevronRight } from 'react-icons/fa';
import { BsChatSquareQuoteFill, BsQuestionCircleFill } from 'react-icons/bs';
import router from 'next/router';

interface Props {
  navItem: NavItemGroq;
  className?: string;
}

function NavItem({ navItem, className = '' }: Props) {
  const [navItemHover, setNavItemHover] = useState(false);
  const [showSubNavItems, setShowSubNavItems] = useState(false);
  
  const onMouseEnter = () => {
    setNavItemHover(true);
  }

  const onMouseLeave = () => {
    setNavItemHover(false);
  }

  const handleClick = () => {
    console.log(`click ${navItem.subNavItems ? 'expand to show subnavitems' : 'link'}`);
    if (navItem.subNavItems) {
      setShowSubNavItems(!showSubNavItems);
    } else {
      router.push(navItem.route === 'root' ? '/' : navItem.route);
    }
  }

  return (
      <div onClick={handleClick}>
        <div
          className={`flex items-center cursor-pointer py-4 px-6 transition ease-in-out ${navItemHover ? 'bg-black bg-opacity-20 text-white' : 'text-gray-300'}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className={`mr-4 w-[35px] transition ease-in-out ${navItemHover ? 'text-primary-500' : 'text-sidenav-300'}`}>
            <div className='flex justify-center items-center w-full h-full text-xl'>
              {navItem.title === 'Home' && (<MdHome />)}
              {navItem.title === 'Groundwater 101' && (<MdSchool />)}
              {navItem.title === 'Legal and Administrative' && (<RiScales3Fill />)}
              {navItem.title === 'Water Testing' && (<BiTestTube />)}
              {navItem.title === 'External Resources' && (<FaExternalLinkSquareAlt />)}
              {navItem.title === 'Submit a Request' && (<BsChatSquareQuoteFill />)}
              {navItem.title === 'Contact Us' && (<BsQuestionCircleFill />)}
              {navItem.title === 'Report Violation' && (<MdReportProblem />)}
              {navItem.title === 'Well Reporting' && (<FaChartBar />)}
            </div>
          </div>
          <div className="grow">{navItem.title}</div>
          {navItem.subNavItems &&
            <div className={`transition ease-in-out ${navItemHover ? 'text-white' : 'text-sidenav-300'} 
              ${showSubNavItems ? 'rotate-90' : ''}`}>
              <FaChevronRight />
            </div>
          }
        </div>
        {navItem.subNavItems &&
          <div className={`transition-all ease-in-out ${showSubNavItems ? '' : 'h-1 hidden'}`}>
            {navItem.subNavItems.map(subNavItem => 
              <div className='pl-12 pr-6 py-4'>{subNavItem.title}</div>
            )}
          </div>
        }
      </div>
  );
}

export default NavItem;
