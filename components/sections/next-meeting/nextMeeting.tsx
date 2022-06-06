import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { NextMeeting } from "../../../interfaces/sanity-schema";
import MeetingData from "./meeting-data";

interface Props {
  data: NextMeeting;
}

function NextMeeting({ data }: Props) {
  const [isActive, setIsActive] = useState({lostCreek: true, commission: false});
  const [dialogVisible, setDialogVisible] = useState(false);

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

  const openDialog = () => {
    setDialogVisible(true);
  }
  const closeDialog = () => {
    setDialogVisible(false);
  }

  
  return (
    <div className="flex justify-center top-0 left-0 absolute w-full">
    {data && 
      <div className="relative px-3 h-[540px] sm:h-[440px] lg:h-[340px] lg:mr-16 w-full flex justify-center items-center lg:justify-end">
        <div className="lg:mx-4 max-w-[425px] h-[220px] overflow-y-auto overflow-x-hidden bg-white text-black rounded">
          <div className="bg-gray-200 whitespace-nowrap">
            <button
              onClick={() => handleClick('lostcreek')}
              className={`px-3 py-2 hover:text-primary-800 ${isActive.lostCreek ? 'bg-white text-primary-500 shadow' : 'bg-gray-300'}`}
            >
              Lost Creek
            </button>
            <button
              onClick={() => handleClick('commission')}
              className={`px-3 py-2 truncate hover:text-primary-800 ${isActive.commission ? 'bg-white text-primary-500 shadow' : 'bg-gray-300'}`}
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
                infoExpanded={false}
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
                infoExpanded={false}
              />
            </div>
            <button className="absolute top-[140px] right-0 mr-4 mb-3 text-white text-xl bg-gray-500 hover:bg-gray-400 hover:drop-shadow px-2 py-1 rounded-lg"  onClick={openDialog}>
              <MdMoreHoriz />
            </button>
          </div>
        </div>
      </div>
    } 
    {dialogVisible && 
      <div 
        className="fixed top-0 bg-black bg-opacity-50 backdrop-blur z-50 w-screen h-screen flex justify-center items-center">
        <div 
          className="flex flex-col items-center justify-center bg-neutral-100 p-4 max-h-screen drop-shadow-lg m-4 rounded"
        >
          {isActive.commission &&           
            <MeetingData
              meeting="commission"
              date={data.commissionDate}
              location={data.commissionLocation}
              info={data.commissionInfo}
              infoExpanded={true}
            />
          }
          {isActive.lostCreek &&           
            <MeetingData
              meeting="lostcreek"
              date={data.lostCreekDate}
              location={data.lostCreekLocation}
              info={data.lostCreekInfo}
              infoExpanded={true}
            />
          }
          <button className="btn-primary mt-6" onClick={closeDialog}>Done</button>
        </div>
      </div>
    }
    </div>
  );
}

export default NextMeeting;
