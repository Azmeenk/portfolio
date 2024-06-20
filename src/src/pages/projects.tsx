import { Layout } from '~/layouts';
import { Animate, List } from '~/components';
import { ListActionType } from '~/types';

import type { ListAction } from '~/types';
import projects from '../data/projects.json';

interface ProjectProps {
	stringifiedProjects: string;
}

export default function ProjectsPage({}: ProjectProps): JSX.Element {
	return (
		<Layout.Default seo={{ title: 'Azmeen Kausar' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-3xl mx-auto">
					<List.Container>
						{projects.map((project, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={project.key}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Item
									actions={[
										...(project.post
											? [
													{
														type: ListActionType.LINK,
														external: false,
														href: project.post,
														icon: 'feather:edit-3',
														label: `Blog post about ${project.name}`,
													} as ListAction,
											  ]
											: []),
										...(project.homepage
											? [
													{
														type: ListActionType.LINK,
														href: project.homepage,
														icon: 'feather:home',
														label: `${project.name} homepage`,
													} as ListAction,
											  ]
											: []),
										{
											type: ListActionType.LINK,
											href: project.url,
											icon: 'feather:github',
											label: 'GitHub Repository',
										},
									]}
									description={project.description}
									icon={<span className="text-xl">{project.icon}</span>}
									title={project.name}
									skills={project.skills}
									image={project.image}
								/>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}
