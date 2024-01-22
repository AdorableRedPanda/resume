import { FC } from 'panda-jsx';
import { Profile } from 'src/types';

import { List } from './List';
import styles from './styles.module.scss';

interface Props {
	profile: Profile;
	skills: string[];
}

const Skill: FC<{ value: string }> = ({ value }) => <span className={styles.skill}>{value}</span>;

export const Header: FC<Props> = ({ profile: { name, position }, skills }) => (
	<header className={styles.header}>
		<h1 className={styles.name}>{name}</h1>
		<div className={styles.right}>
			<h2>{position}</h2>
			<div className={styles.skills}>
				<List component={Skill} items={skills} />
			</div>
		</div>
	</header>
);
