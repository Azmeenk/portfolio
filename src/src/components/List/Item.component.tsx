import clsx from 'clsx';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import { Action } from './Action.component';
import { ListActionType } from '~/types';

import type { ReactNode } from 'react';
import type { ListAction, WithChildren } from '~/types';

interface ItemProps extends WithChildren {
	actions?: Array<ListAction>;
	description?: string;
	icon?: string | ReactNode;
	iconColor?: string;
	title: string;
	skills?: Array<string>;
	image?: string;
}

export function Item({
	actions,
	children,
	description,
	icon,
	iconColor,
	title,
	skills,
	image,
}: ItemProps): JSX.Element {
	return (
		<li className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
			<div className="flex flex-col sm:flex-row items-stretch">
				{image && (
					<img
						src={image}
						alt={title}
						className="w-full sm:w-48 h-100 sm:h-auto object-cover"
					/>
				)}
				<div className="flex flex-col justify-between pt-6 px-6 pb-3 w-full">
					<div className="flex items-center w-full">
						{/* {icon &&
							(typeof icon === 'string' ? (
								<div
									className={clsx(
										'flex items-center justify-center w-16 h-16 rounded-full bg-primary-500',
										iconColor ? '' : 'bg-opacity-10',
									)}
									style={{
										backgroundColor: iconColor ?? undefined,
									}}>
									<Icon className="w-8 h-8 text-white" icon={icon} />
								</div>
							) : (
								<>{icon}</>
							))} */}
						<div className="ml-4">
							<h1 className="text-gray-900 dark:text-white text-xl font-semibold">
								{title}
							</h1>
							{description && (
								<p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									{description}
								</p>
							)}
							{skills && skills.length > 0 && (
								<div className="flex flex-wrap mt-3">
									{skills.map((skill, index) => (
										<span
											key={index}
											className="border border-primary-500 text-primary-500 rounded-full px-3 py-1 text-xs font-medium mr-2 mt-2 transition-colors duration-300 hover:bg-primary-500 hover:text-white">
											{skill}
										</span>
									))}
								</div>
							)}
						</div>
					</div>

					{actions && (
						<div className="flex items-center justify-end space-x-3 mt-4">
							{actions.map((action, index) => {
								switch (action.type) {
									case ListActionType.BUTTON:
										return (
											<Action
												aria-label={action.label}
												key={index}
												onClick={action.onClick}
												className="hover:text-primary-500">
												<span className="sr-only">{action.label}</span>
												<Icon className="w-6 h-6" icon={action.icon} />
											</Action>
										);
									case ListActionType.LINK:
										if (action.external ?? true)
											return (
												<Action
													as="a"
													aria-label={action.label}
													href={action.href}
													key={index}
													onClick={action.onClick}
													rel="noopener noreferrer"
													target="_blank"
													className="hover:text-primary-500">
													<span className="sr-only">{action.label}</span>
													<Icon className="w-6 h-6" icon={action.icon} />
												</Action>
											);

										return (
											<Link href={action.href} passHref key={index}>
												<Action
													as="a"
													aria-label={action.label}
													onClick={action.onClick}
													className="hover:text-primary-500">
													<span className="sr-only">{action.label}</span>
													<Icon className="w-6 h-6" icon={action.icon} />
												</Action>
											</Link>
										);
								}
							})}
						</div>
					)}
				</div>
			</div>
			{children}
		</li>
	);
}
