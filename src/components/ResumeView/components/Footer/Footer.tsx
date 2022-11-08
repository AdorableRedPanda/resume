/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import styles from './styles.module.css';

const SOURCE_URL = 'https://github.com/AdorableRedPanda/resume';

interface Props {
    caption: string;
}

export const Footer: FC<Props> = ({ caption }) => (
    <div className={styles.footer}>
        <p className={styles.caption}>{caption}</p>
        <a className={styles.link} href={SOURCE_URL} target="_blanc">{SOURCE_URL}</a>
    </div>
);
