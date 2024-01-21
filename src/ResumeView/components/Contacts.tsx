/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';
import { ContactLink as ContactData } from 'src/types';

import styles from './styles.module.scss';

interface Props {
	links: ContactData[];
}

interface LinkProps {
	link: ContactData;
}

const ContactLink: FC<LinkProps> = ({ link: [ icon, href, label ] }) => (
	<li>
		<a className={styles.link} href={href} target="_blank">
			<i className={icon}></i>
			<span>{label}</span>
		</a>
	</li>
);

export const Contacts: FC<Props> = ({ links }) => (
	<section>
		<ul className={styles.links}>
			{links.map((link) => <ContactLink link={link} />)}
		</ul>
	</section>
);
