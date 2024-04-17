import type { FC } from 'panda-jsx';
import type { ContactLink as ContactData, Profile } from 'src/types';

import styles from './styles.module.scss';
import { Contacts } from './Contacts';

interface Props {
	profile: Profile;
	links: ContactData[];
}

export const Header: FC<Props> = ({
	links,
	profile: { name, position, location },
}) => (
	<header className={styles.header}>
		<div>
			<h1 className={styles.name}>{name}</h1>
			<h2 className={styles.position}>{position}</h2>
			<address className={styles.location}>{location}</address>
		</div>
		<Contacts links={links} />
	</header>
);
