import type { FC } from 'panda-jsx';

import styles from './styles.module.scss';
import { List } from '../List';
import { Section } from '../Section';
interface Props {
	skills: string[];
}
const Skill: FC<{ value: string }> = ({ value }) => (
	<span className={styles.skill}>{value}</span>
);
export const Skills: FC<Props> = ({ skills }) => (
	<Section label="Skills">
		<div className={styles.skills}>
			<List component={Skill} items={skills} />
		</div>
	</Section>
);
