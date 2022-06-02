import { HeroGroq } from '../../lib/sanity-queries';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity-client';

interface Props {
  data: HeroGroq;
}

function Hero({ data }: Props) {
  return (
    <div className='relative'>      
      <div className="relative flex justify-center text-center px-global-sm h-[600px] sm:h-[400px] border-b border-neutral-800">
        {data.image && 
          <Image
            layout="fill"
            objectFit="cover"
            alt={`Cover Image for ${data.headline}`}
            src={imageBuilder(data.image).height(680).url()}
            priority
          />
        }
      </div>
      <div className="absolute top-0 left-0 right-0 mx-auto lg:hidden lg:max-w-[500px] bg-black bg-opacity-20 backdrop-blur border border-gray-200 border-opacity-20 py-4 px-6 lg:rounded overflow-clip">
        <div className='text-3xl font-bold text-white drop-shadow-lg'>
          {data.headline &&
            <PortableText value={data.headline}></PortableText>
          }
        </div>
        <div className='text-xl text-white drop-shadow-lg'>
          {data. subHeadline &&
            <PortableText value={data.subHeadline}></PortableText>
          }
        </div>
      </div>
    </div>
  );
}

export default Hero;
