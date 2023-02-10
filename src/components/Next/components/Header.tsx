/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import { Profile } from '../../../types';
import styles from './styles.module.scss';

interface Props {
    profile: Profile;
	skills: string[];
}

export const Header: FC<Props> = ({ skills, profile: { name, position } }) => (
	<header className={styles.header}>
		<h1 className={styles.name}>{name}</h1>
		<div>
			<h3>{position}</h3>
			<h4>{skills.join(', ')}</h4>
		</div>
	</header>
);