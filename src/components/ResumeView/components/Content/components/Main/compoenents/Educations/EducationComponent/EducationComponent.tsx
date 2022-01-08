import { Education } from '../../../../../../../../../types';
import { createElement, FC } from '../../../../../../../../../JSX';
import styles from './styles.module.css';
import { LineComponent } from '../../LineComponent';
/** @jsx createElement */

interface Props {
    item: Education;
}

export const EducationComponent: FC<Props> = ({ item }) => {
    const period = `${item.dateFrom} – ${item.dateUntil}`;
    const title = `${item.degree}, ${item.school}`;

    return (
        <div className={styles.experience}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <p className={styles.city}>{item.city}</p>
            </div>
            <div className={styles.dates}>{period}</div>
            <div className={styles.details}>
                {item.details.map(line => <LineComponent line={line} />)}
            </div>
        </div>
    );
};