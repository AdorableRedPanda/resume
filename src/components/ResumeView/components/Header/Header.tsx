import styles from './styles.module.css';
import { createElement, FC } from '../../../../JSX';
import { Profile } from '../../../../types';
/** @jsx createElement */

export const Header: FC<Profile> = ({ firstName, lastName, position }) => (
    <section className={styles.header}>
        <h1 className={styles.name}>{`${firstName} ${lastName}`}</h1>
        <h3 className={styles.name}>{position}</h3>
    </section>
);