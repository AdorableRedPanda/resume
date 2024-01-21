/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';
import { ExperienceItem as ExperienceData } from 'src/types';

import { LineComponent } from '../LineComponent';
import styles from './styles.module.scss';

interface Props {
	item: ExperienceData;
}

export const ExperienceItem: FC<Props> = ({ item: { dates: [ from, to ], details, position } }) => {
	const period = `${from} – ${to}`.toLowerCase();
	const title = position.join(', ');

	return (
		<div>
			<div className={styles.header}>
				<span className={styles.title}>{title}</span>
			</div>
			<div className={styles.dates}>{period}</div>
			<div className={styles.details}>
				<ul className={styles.contents}>
					{details.map((line) => (
						<li className={styles.contents}>
							<LineComponent line={line} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
