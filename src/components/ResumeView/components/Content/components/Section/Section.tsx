import { createElement, FC } from '../../../../../../JSX';
/** @jsx createElement */
import styles from './styles.module.css';

interface Props {
    label: string
}

export const Section: FC<Props> = ({ label, children }) => (
    <section className={styles.section}>
        <h5 className={styles.header}>{label}</h5>
        {children}
    </section>
);