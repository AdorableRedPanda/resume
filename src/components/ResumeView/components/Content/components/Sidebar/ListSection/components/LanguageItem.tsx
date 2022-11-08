import { createElement, FC } from 'panda-jsx';
import { ItemComponentProps } from '../types';
import styles from '../styles.module.css';
/** @jsx createElement */


export const LanguageItem: FC<ItemComponentProps> = ({ item }) => {
    const [label, value] = item;
    return (
        <li className={styles.item}>
            <div>{label}</div>
            <span className={styles.language_level}>{value}</span>
        </li>
    );
};