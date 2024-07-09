import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import Image from '../Image/Image';
import DefaultCard from './DefaultCard';
import { AchievementProps } from '~/types/achievements';

const AchievementCard = ({
    name,
    company,
    logo,
    start_date,
    end_date,
    industry,
    link,
    skills,
}: AchievementProps) => {
    return (
        <DefaultCard className="flex flex-col md:flex-row items-center md:items-start gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900">
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
                <a
                    href={link || '#'}
                    target="_blank"
                    data-umami-event={`Click Achievement: ${company}`}
                    rel="noreferrer"
                    className="cursor-pointer underline-offset-2 hover:text-dark text-primary-500 block mb-2 md:mb-0"
                >
                    <h6 className="text-lg font-semibold">{name}</h6>
                </a>
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="flex flex-col gap-1">
                        <span>{company}</span>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:text-sm">
                        <div className="flex gap-1 text-neutral-500">
                            <span>{start_date}</span> {end_date && "-"} <span>{end_date || ''}</span>
                        </div>
                        <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">•</span>
                        <span>{industry}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {/* Skills separated by bars */}
                        {skills?.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded-sm text-xs">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </DefaultCard>
    );
};

export default AchievementCard;
