import type { FC } from 'panda-jsx';

import styles from './styles.module.scss';
import { List } from '../List';
interface Props {
	skills: string[];
}
const Skill: FC<{ value: string }> = ({ value }) => (
	<span className={styles.skill}>{value}</span>
);
export const Skills: FC<Props> = ({ skills }) => (
	<div className={styles.skills}>
		<List component={Skill} items={skills} />
	</div>
);
