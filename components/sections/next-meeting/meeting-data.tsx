import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { BsFillCalendarEventFill, BsFillInfoCircleFill } from "react-icons/bs";
import { MdExpandMore, MdLocationOn, MdMoreHoriz } from "react-icons/md";
import { SanityBlock } from "../../../interfaces/sanity-schema";

interface Props {
  meeting: 'lostcreek' | 'commission'
  date: string | undefined;
  location: string | undefined;
  info: (SanityBlock & {
    _key: string;
  })[] | undefined;
  infoExpanded: boolean
}

function MeetingData({ meeting, date, location, info, infoExpanded = false }: Props) {

  return (
    <div className="pt-3 pb-4 px-4">
      <div className="mb-3 font-bold text-lg truncate">
        { meeting === 'lostcreek' && 'Next Lost Creek GWMD Water Board Meeting' }
        { meeting === 'commission' && 'Next Groundwater Commission Meeting' }
      </div>
        {date && 
          <div className="flex items-center mb-4">
            <div className="mr-4 text-xl">
              <BsFillCalendarEventFill />
            </div>
            <div className="mr-3">
            {
                new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  year: 'numeric',
                  day: 'numeric',
                }).format(new Date(date))
              }
              </div>
              <div>-</div>
              <div className="ml-3">
                {
                  new Intl.DateTimeFormat('en-US', {
                    timeStyle: 'short'
                  }).format(new Date(date))
                }
              </div>
          </div>
        }
        {location && 
          <div className="flex items-center mb-4">
            <div className="mr-4 text-xl">
              <MdLocationOn />
            </div>
            <div>{location}</div>
          </div>
        }
        {info && 
          <div className="flex items-center">
            <div className="mr-4 text-xl">
              <BsFillInfoCircleFill />
            </div>
            <div className={`grow truncate ${infoExpanded ? 'max-h-fit' : 'max-h-[24px]'}`}>
              <PortableText value={info} />
            </div>
          </div>
        }
    </div>
  )
}

export default MeetingData;