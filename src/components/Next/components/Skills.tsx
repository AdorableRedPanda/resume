/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import styles from './styles.module.scss';
import { ListItem } from '../../../types';

interface Props {
    skills: ListItem[];
}

export const Skills: FC<Props> = ({ skills }) => (
	<ul className={styles.skills}>
		{skills.map((skill) => <li className={styles.skill}>{skill}</li>)}
	</ul>
);