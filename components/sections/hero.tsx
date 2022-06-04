import { HeroGroq } from '../../lib/sanity-queries';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity-client';

interface Props {
  data: HeroGroq;
}

function Hero({ data }: Props) {
  return (
    <div className='relative -mt-[60px]'>      
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
    </div>
  );
}

export default Hero;
