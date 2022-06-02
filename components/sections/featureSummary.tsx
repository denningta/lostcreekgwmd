import { PortableText } from '@portabletext/react';
import { imageBuilder } from '../../lib/sanity-client';
import { FeatureSummaryGroq } from '../../lib/sanity-queries';
import Image from 'next/image';
import CallToAction from '../callToAction';

interface Props {
  data: FeatureSummaryGroq;
}

function FeatureSummary({ data }: Props) {
  const width = data.imageMetaData.metadata.dimensions.width;
  const height = data.imageMetaData.metadata.dimensions.height;

  return (
    <div className="flex justify-center">
      <div className="max-w-primary-col xl:grid xl:grid-cols-2 my-16 h-full px-global-sm ">
        <div className="flex flex-col justify-center pr-5">
          {data.headline && (
            <div className="text-primary-300 font-extrabold text-lg">
              {data.headline}
            </div>
          )}
          {data.subHeadline && (
            <div className="text-3xl font-extrabold mt-4">
              {data.subHeadline}
            </div>
          )}
          {data.description && (
            <div className="opacity-70 mt-4 portable-text">
              <PortableText value={data.description} />
            </div>
          )}
          <div className="flex mt-6">
            {data.callsToAction?.map((callToAction) => (
              <div key={callToAction._id} className="mr-4">
                <CallToAction data={callToAction} />
              </div>
            ))}
          </div>
        </div>
        {data.image && (
          <div className="flex flex-col justify-start items-center mt-10 w-full">
            <Image
              className="rounded-lg overflow-clip shadow-lg"
              layout='intrinsic'
              width={width}
              height={height}
              alt={`Cover Image for ${data.headline}`}
              src={imageBuilder(data.image).width(width).height(height).url()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureSummary;
