import styles from './styles.module.css';
import { createElement, FC } from '../../../../JSX';
import { Profile } from '../../../../types';
/** @jsx createElement */

export const Header: FC<Profile> = ({ name, position }) => (
    <section className={styles.header}>
        <h1 className={styles.name}>{name}</h1>
        <h3 className={styles.name}>{position}</h3>
    </section>
);