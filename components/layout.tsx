import { NavItemGroq, SiteSettingsGroq } from '../lib/sanity-queries';
import SideNav from './sideNav';

interface Props {
  siteSettings: SiteSettingsGroq;
  navItems: NavItemGroq[];
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ siteSettings, navItems, children }: Props) {

  return (
    <div className="flex">
      <SideNav siteSettings={siteSettings} navItems={navItems} />
      <div id="main" className="w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}
