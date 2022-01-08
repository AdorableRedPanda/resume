import { createElement, FC } from '../../../../../../../../JSX';
import { ItemComponentProps } from '../types';
import styles from '../styles.module.css';
/** @jsx createElement */

export const SkillItem: FC<ItemComponentProps> = ({ item }) => {
    const [label] = item;
    return (
        <li className={styles.item}>
            <div>{label}</div>
        </li>
    );
};