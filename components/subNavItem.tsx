import Link from "next/link";
import { useState } from "react";
import { NavItemGroq } from "../lib/sanity-queries";

interface Props {
  title: string;
  route: string
}

function SubNavItem({ title, route }: Props) {
  const [navItemHover, setNavItemHover] = useState(false);
  
  const onMouseEnter = () => {
    setNavItemHover(true);
  }

  const onMouseLeave = () => {
    setNavItemHover(false);
  }

  return (
    <Link href={`${route === 'root' ? '/' : route}`}>
      <div
        className={
          `pl-12 pr-6 py-4 cursor-pointer transition ease-in-out
          ${navItemHover ? 'bg-black bg-opacity-20' : ''}`
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {title}
      </div>
    </Link>
  );
}

export default SubNavItem;