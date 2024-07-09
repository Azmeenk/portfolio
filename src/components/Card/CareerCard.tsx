import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BsBuildings as CompanyIcon } from 'react-icons/bs';
import { HiChevronRight } from 'react-icons/hi';

import { CareerProps } from '~/types/career';
import Image from '../Image/Image';
import DefaultCard from './DefaultCard';

const CareerCard = ({
  position,
  company,
  logo,
  location,
  location_type,
  start_date,
  end_date,
  link,
  type,
  responsibilities,
}: CareerProps) => {
  const [isShowResponsibility, setIsShowResponsibility] = useState<boolean>(false);

  const startDateFormatted = format(new Date(start_date), 'MMM yyyy');
  const endDateFormatted = end_date ? format(new Date(end_date), 'MMM yyyy') : 'Present';

  const durationYears = differenceInYears(new Date(end_date || Date.now()), new Date(start_date));
  const durationMonths =
    (differenceInMonths(new Date(end_date || Date.now()), new Date(start_date)) % 12) + 1;

  const durationText = `${
    durationYears > 0 ? `${durationYears} Year${durationYears > 1 ? 's' : ''}, ` : ''
  }${durationMonths} Month${durationMonths > 1 ? 's' : ''}`;

  return (
    <DefaultCard className=" z-1 flex flex-col md:flex-row items-center md:items-start gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900 overflow-y-auto">
      <div className="w-14 flex-shrink-0 md:mb-0 md:mr-5 md:ml-0 md:w-auto md:flex-none">
        {logo ? (
          <Image
            src={logo}
            width={55}
            height={55}
            alt={company}
            className="h-14 w-14 rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent"
          />
        ) : (
          <div className="h-14 w-14 flex items-center justify-center rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent">
            <CompanyIcon size={50} />
          </div>
        )}
      </div>

      <div className="w-full md:w-auto">
        <div className="space-y-1">
          <h6 className="text-lg font-semibold text-primary-500">{position}</h6>
          <div className="space-y-1 text-sm text-neutral-800 dark:text-neutral-400">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
              <a
                href={link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event={`Click Career Company Name: ${company}`}
                className="cursor-pointer underline-offset-2 hover:text-dark hover:underline hover:dark:text-white "
              >
                {company}
              </a>

              <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">•</span>

              <span>{location}</span>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:text-sm">
              <div className="flex gap-1">
                <span>
                  {startDateFormatted} - {endDateFormatted}
                </span>
              </div>
              <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">•</span>
              <span className="text-neutral-500 dark:text-neutral-500">{durationText}</span>
              <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">•</span>
              <span>{type}</span>
              <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">•</span>
              <span>{location_type}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsShowResponsibility(!isShowResponsibility)}
          className="-ml-1 mt-5 flex items-center gap-1 text-sm text-neutral-500"
        >
          <HiChevronRight
            size={18}
            className={`${isShowResponsibility ? 'rotate-90 transition-all duration-300' : ''}`}
          />
          {isShowResponsibility ? 'Hide Responsibilities' : 'Show Responsibilities'}
        </button>
        <AnimatePresence>
          {isShowResponsibility && (
            <motion.ul
              className="ml-5 list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400 mt-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {responsibilities?.map((item) => (
                <motion.li key={item} layout>
                  <span className="text-sm text-neutral-800 dark:text-white">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </DefaultCard>
  );
};

export default CareerCard;
