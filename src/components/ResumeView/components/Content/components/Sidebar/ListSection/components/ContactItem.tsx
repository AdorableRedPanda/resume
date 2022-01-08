import { createElement, FC } from '../../../../../../../../JSX';
import { ItemComponentProps } from '../types';
import styles from '../styles.module.css';
/** @jsx createElement */

export const ContactItem: FC<ItemComponentProps> = ({ item }) => {
    const [label, value] = item;
    return (
        <li className={`${styles.item} ${styles.contact_item}`}>
            <div className={styles.contact_label}>{label}</div>
            <div>{value}</div>
        </li>
    );
};