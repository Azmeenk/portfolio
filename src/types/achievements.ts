export interface AchievementProps {
    name: string;
	company: string;
	logo: string | null;
	start_date: string;
	end_date: string | null;
	industry: string;
    link: string | null;
    skills?: Array<string> | null;
}
