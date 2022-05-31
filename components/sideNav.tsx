import { useState } from "react";
import { IconPickerGroq, NavItemGroq, SiteSettingsGroq } from "../lib/sanity-queries";
import Image from 'next/image';
import { imageBuilder } from '../lib/sanity-client';
import NavItem from "./navItem";

interface Props {
  siteSettings: SiteSettingsGroq;
  navItems: NavItemGroq[];
}

function SideNav({ siteSettings, navItems }: Props) {

  return (
    <div className='w-[400px] bg-sidenav-600 select-none'>
    {siteSettings.icon && 
      <div className='m-5'>
        <Image
          height={160}
          width={300}
          src={imageBuilder(siteSettings.icon).height(680).url()}
        />
      </div>
    }
    {navItems && navItems.map(navItem =>
      <NavItem navItem={navItem} key={navItem.title}></NavItem>
    )}
    </div>
  );
}

export default SideNav;
