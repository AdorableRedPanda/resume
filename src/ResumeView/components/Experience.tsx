/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';
import { Experience as ExperienceData } from 'src/types';

import { ExperienceItem } from './ExperienceItem';
import { Section } from './Section';
import styles from './styles.module.scss';

interface Props {
	columns: 1 | 2;
	experience: ExperienceData;
}

export const Experience: FC<Props> = ({ columns, experience: { label, value } }) => (
	<Section columns={columns} label={label}>
		<ul className={styles.content}>
			{value.map((item) => (
				<li className={styles.content}>
					<ExperienceItem item={item} />
				</li>
			))}
		</ul>
	</Section>
);
