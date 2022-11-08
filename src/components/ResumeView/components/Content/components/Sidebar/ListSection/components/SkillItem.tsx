import { createElement, FC } from 'panda-jsx';
import { ItemComponentProps } from '../types';
import styles from '../styles.module.css';
/** @jsx createElement */

export const SkillItem: FC<ItemComponentProps> = ({ item }) => {
    const [label] = item;
    return (
        <li className={styles.skill_item}>
            {label}
        </li>
    );
};