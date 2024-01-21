/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';
import { Profile } from 'src/types';

import styles from './styles.module.scss';

interface Props {
	profile: Profile;
	skills: string[];
}

export const Header: FC<Props> = ({ profile: { name, position }, skills }) => (
	<header className={styles.header}>
		<h1 className={styles.name}>{name}</h1>
		<div>
			<h3>{position}</h3>
			<h4>{skills.join(', ')}</h4>
		</div>
	</header>
);
