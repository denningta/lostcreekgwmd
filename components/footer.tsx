import { FooterGroq } from '../lib/sanity-queries';
import { RiCopyrightLine } from 'react-icons/ri';

interface Props {
  footerData: FooterGroq;
}

function Footer({ footerData }: Props) {
  return (
    <div className="flex w-full justify-center bg-neutral-600 border-t border-neutral-600 px-global-sm text-white">
      <div className="grow max-w-primary-col py-16">
        <div className="flex flex-col items-center w-full">
          <div className="flex">
            {footerData.navItems?.map((navItem) => (
              <div key={navItem.title} className="mx-6">
                <a href={navItem.route}>{navItem.title}</a>
              </div>
            ))}
          </div>
          <div className="flex mt-8">
            {footerData.socials?.map((social) => (
              <div key={social._id} className="mx-6"></div>
            ))}
          </div>
          <div className="flex mt-8 items-center">
            <RiCopyrightLine className="mr-2" /> Lost Creek Groundwater Management District
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
