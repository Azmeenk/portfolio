import { ACHIEVEMENTS } from '~/data/achievements';
import AchievementCard from './AchievementCard';


const AchievementsList = () => {
    return (
        <section className="space-y-6">
            <div className="grid gap-4 md:grid-cols-1">
                {ACHIEVEMENTS?.map((item, index) => (
                    <AchievementCard key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default AchievementsList;
