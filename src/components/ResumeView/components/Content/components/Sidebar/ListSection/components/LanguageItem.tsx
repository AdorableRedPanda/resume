import { createElement, FC } from '../../../../../../../../JSX';
import { ItemComponentProps } from '../types';
import styles from '../styles.module.css';
/** @jsx createElement */


export const LanguageItem: FC<ItemComponentProps> = ({ item }) => {
    const [label, value] = item;
    return (
        <li className={styles.item}>
            <div>{label}</div>
            <div>{value}</div>
        </li>
    );
};