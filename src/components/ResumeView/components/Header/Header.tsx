import { Profile } from '../../../../types';
import styles from './styles.module.css';
/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';

export const Header: FC<Profile> = ({ name, position }) => (
	<section className={styles.header}>
		<h1 className={styles.name}>{name}</h1>
		<h3 className={styles.name}>{position}</h3>
	</section>
);