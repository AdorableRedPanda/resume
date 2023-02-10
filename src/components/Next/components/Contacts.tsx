/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import { ContactLink as ContactLinkDto } from '../../../types';
import styles from './styles.module.scss';

interface Props {
    links: ContactLinkDto[];
}

interface LinkProps {
	link: ContactLinkDto;
}

const ContactLink: FC<LinkProps> = ({ link: [icon, href, label] }) => (
	<li>
		<a href={href} target="_blank" className={styles.link}>
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