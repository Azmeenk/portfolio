import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import { EducationProps } from '~/types';
import Image from '../Image/Image';
import DefaultCard from './DefaultCard';

const EducationCard = ({
  school,
  major,
  logo,
  degree,
  start_year,
  end_year,
  location,
  link,
}: EducationProps) => {
  return (
    <DefaultCard className="flex flex-col md:flex-row items-center md:items-start gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900">
      <div className="w-14 flex-shrink-0 md:mb-0 md:mr-5 md:ml-0 md:w-auto md:flex-none">
        {logo ? (
          <Image
            src={logo}
            width={55}
            height={55}
            alt={school}
            className="h-14 w-14 rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent"
          />
        ) : (
          <div className="h-14 w-14 flex items-center justify-center rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent">
            <CompanyIcon size={50} />
          </div>
        )}
      </div>

      <div className="w-full md:w-auto">
        <a
          href={link || '#'}
          target="_blank"
          data-umami-event={`Click Education School: ${school}`}
          rel="noreferrer"
          className="cursor-pointer underline-offset-2 hover:text-dark text-primary-500 block mb-2 md:mb-0"
        >
          <h6 className="text-lg font-semibold">{school}</h6>
        </a>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-1">
            <span>{degree}</span>
            <span>{major}</span>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:text-sm">
            <div className="flex gap-1 text-neutral-500">
              <span>{start_year}</span> - <span>{end_year || 'Present'}</span>
            </div>
            <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">•</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </DefaultCard>
  );
};

export default EducationCard;
