import { FC } from 'panda-jsx';
import { ExperienceItem as ExperienceData } from 'src/types';

import { LineComponent } from '../../LineComponent';
import { List } from '../../List';
import styles from './styles.module.scss';

interface Props {
	value: ExperienceData;
}

export const ExperienceItem: FC<Props> = ({ value: { dates: [ from, to ], details, position } }) => {
	const period = `${from} – ${to}`.toLowerCase();
	const title = position.join(', ');

	return (
		<div>
			<div className={styles.header}>
				<span className={styles.title}>{title}</span>
			</div>
			<div className={styles.dates}>{period}</div>
			<div className={styles.details}>
				<List component={LineComponent} items={details} />
			</div>
		</div>
	);
};
