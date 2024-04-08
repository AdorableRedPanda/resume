import type { FC } from 'panda-jsx';
import type { ContactLink as ContactData } from 'src/types';

import { List } from './List';
import styles from './styles.module.scss';

interface Props {
	links: ContactData[];
}

interface LinkProps {
	value: ContactData;
}

const ContactLink: FC<LinkProps> = ({ value: [icon, href, label] }) => (
	<a className={styles.link} href={href} target="_blank" rel="noreferrer">
		<i className={icon} />
		<span>{label}</span>
	</a>
);

export const Contacts: FC<Props> = ({ links }) => (
	<section>
		<List className={styles.links} component={ContactLink} items={links} />
	</section>
);
