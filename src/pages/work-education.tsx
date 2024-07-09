import {
	HiOutlineAcademicCap as EducationIcon,
	HiOutlineBookmark as AboutIcon,
	HiOutlineBriefcase as CareerIcon,
	HiOutlineDocumentText as ResumeIcon,
} from 'react-icons/hi';

import { Tabs } from '../components/Card/Tabs';
import CareerList from '../components/Card/CareerList';
import EducationList from '../components/Card/EducationList';
import { Layout } from '~/layouts';
import AchievementsList from '~/components/Card/AchievementsList';

const TabLabel = ({ children }: { children: React.ReactNode }) => (
	<div className="flex items-center justify-center gap-1.5">{children}</div>
);

const About = () => {
	const TABS = [
		{
			label: (
				<TabLabel>
					<CareerIcon size={17} /> Career
				</TabLabel>
			),
			children: <CareerList />,
		},
		{
			label: (
				<TabLabel>
					<EducationIcon size={17} /> Education
				</TabLabel>
			),
			children: <EducationList />,
		},
		{
			label: (
				<TabLabel>
					<EducationIcon size={17} /> Achievements 
				</TabLabel>
			),
			children: <AchievementsList />,
		},
	];

	return (
		<Layout.Default seo={{ title: 'Azmeen Kausar' }}>
			<div className="w-full lg:w-[65%] mx-auto z-1" >
				<Tabs tabs={TABS} />
			</div>
		</Layout.Default>
	);
};

export default About;


