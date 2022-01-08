import { createElement, FC } from '../../../../../../../../JSX';
import { ItemComponentProps } from '../types';
import styles from '../styles.module.css';
/** @jsx createElement */

export const SocialItem: FC<ItemComponentProps> = ({ item }) => {
    const [label, link] = item;
    if (!link) return null;

    return (
        <li className={styles.item}>
            <a href={link} className={styles.social_link} target="_blank">{label}</a>
        </li>
    );
};