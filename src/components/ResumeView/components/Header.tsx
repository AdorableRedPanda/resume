import { FC } from 'panda-jsx';
import { Profile } from 'src/types';

import styles from './styles.module.scss';
import { Skills } from "./Skills/Skills";

interface Props {
	profile: Profile;
	skills: string[];
}

export const Header: FC<Props> = ({ profile: { name, position, location }, skills }) => (
	<header className={styles.header}>
		<div>
			<h1 className={styles.name}>{name}</h1>
			<h2 className={styles.position}>{position}</h2>
			<address className={styles.location}>
				{location}
			</address>
		</div>
		<Skills skills={skills}/>
	</header>
);
