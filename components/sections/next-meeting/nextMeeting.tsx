import { useState } from "react";
import { NextMeeting } from "../../../interfaces/sanity-schema";
import MeetingData from "./meeting-data";

interface Props {
  data: NextMeeting;
}

function NextMeeting({ data }: Props) {
  const [isActive, setIsActive] = useState({lostCreek: true, commission: false});

  const handleClick = (tab: 'lostcreek' | 'commission') => {
    if (tab === 'lostcreek') {
      setIsActive({
        lostCreek: true,
        commission: false
      });
    }
    if (tab === 'commission') {
      setIsActive({
        lostCreek: false,
        commission: true
      });
    }
  }
  
  return (
    <>
    {data && 
      <div className="absolute top-[280px] sm:top-[150px] left-0 right-0 mx-auto lg:left-auto lg:right-5 lg:mx-4 max-w-[425px] h-[220px] overflow-y-auto overflow-x-hidden bg-white text-black rounded">
        <div className="bg-gray-200">
          <button
            onClick={() => handleClick('lostcreek')} 
            className={`px-3 py-2 hover:text-primary-800 ${isActive.lostCreek ? 'bg-white text-primary-500 shadow' : 'bg-gray-300'}`}
          >
            Lost Creek
          </button>
          <button 
            onClick={() => handleClick('commission')}
            className={`px-3 py-2 hover:text-primary-800 ${isActive.commission ? 'bg-white text-primary-500 shadow' : 'bg-gray-300'}`}
          >
            Groundwater Commission
          </button>
        </div>
        <div className="relative">
          <div className={`
            transition ease-in-out ${isActive.lostCreek ? 'translate-x-0' : '-translate-x-[425px]'}
          `}>
            <MeetingData
              meeting='lostcreek'
              date={data.lostCreekDate}
              location={data.lostCreekLocation}
              info={data.lostCreekInfo}
            />
          </div>
          <div className={`
            absolute transition ease-in-out top-0 left-0 ${isActive.commission ? 'translate-x-0' : ' translate-x-[450px]'}
          `}>
            <MeetingData
              meeting="commission"
              date={data.commissionDate}
              location={data.commissionLocation}
              info={data.commissionInfo}
            />
          </div>
        </div>
      </div>
    } 
    </>
  );
}

export default NextMeeting;
