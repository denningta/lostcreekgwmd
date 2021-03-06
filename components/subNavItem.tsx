import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { NavItemGroq } from "../lib/sanity-queries";
import internalLink from "../shared/internal-link";

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
      internalLink(route, routeType);
  }

  return (
      <div
        onClick={handleClick}
        className={
          `pl-12 pr-6 py-4 cursor-pointer transition ease-in-out
          ${navItemHover ? 'bg-black bg-opacity-20 text-white' : 'text-gray-300'}`
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {title}
      </div>
  );
}

export default SubNavItem;