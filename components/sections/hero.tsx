import { HeroGroq } from '../../lib/sanity-queries';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity-client';

interface Props {
  data: HeroGroq;
}

function Hero({ data }: Props) {
  return (
    <div>      
      <div className="relative flex justify-center text-center px-global-sm h-[600px] sm:h-[400px] border-b border-neutral-800">
        {data.image && 
          <Image
            layout="fill"
            objectFit="cover"
            alt={`Cover Image for ${data.headline}`}
            src={imageBuilder(data.image).height(680).url()}
          />
        }
      </div>
      <div className="absolute top-[250px] mx-5 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 py-4 px-6 rounded-sm overflow-clip">
        <div className='text-5xl font-bold text-white drop-shadow-lg'>
          {data.headline &&
            <PortableText value={data.headline}></PortableText>
          }
        </div>
        <div className='text-3xl text-white drop-shadow-lg'>
          {data. subHeadline &&
            <PortableText value={data.subHeadline}></PortableText>
          }
        </div>
      </div>
    </div>
  );
}

export default Hero;
