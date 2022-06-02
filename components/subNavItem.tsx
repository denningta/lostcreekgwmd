import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { NavItemGroq } from "../lib/sanity-queries";

interface Props {
  title: string;
  route: string
  routeType: string;
}

function SubNavItem({ title, route, routeType }: Props) {
  const [navItemHover, setNavItemHover] = useState(false);
  
  const onMouseEnter = () => {
    setNavItemHover(true);
  }

  const onMouseLeave = () => {
    setNavItemHover(false);
  }

  const handleClick = () => {
      let r: string = '';
      routeType === 'post' 
        ? r = '/blog/' + route 
        : r = route;
      router.push(route === 'root' ? '/' : r);
  }

  return (
      <div
        onClick={handleClick}
        className={
          `pl-12 pr-6 py-4 cursor-pointer transition ease-in-out
          ${navItemHover ? 'bg-black bg-opacity-20' : ''}`
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {title}
      </div>
  );
}

export default SubNavItem;