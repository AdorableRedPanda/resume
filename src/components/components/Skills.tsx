/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';
import { ListItem } from 'src/types';

import styles from './styles.module.scss';

interface Props {
	skills: ListItem[];
}

export const Skills: FC<Props> = ({ skills }) => (
	<ul className={styles.skills}>
		{skills.map((skill) => <li className={styles.skill}>{skill}</li>)}
	</ul>
);
