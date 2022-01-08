import { createElement, FC } from '../../../../../../../../../JSX';
import styles from './styles.module.css';
import { ExperienceItem } from '../../../../../../../../../types';
import { LineComponent } from '../../LineComponent';
/** @jsx createElement */

interface Props {
    item: ExperienceItem;
}

export const ExperienceItemComponent: FC<Props> = ({ item: { dateFrom, dateUntil, city, position, details } }) => {
    const period = `${dateFrom} – ${dateUntil}`;
    const title = position.join(', ');
    return (
        <div className={styles.experience}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <p className={styles.city}>{city}</p>
            </div>
            <div className={styles.dates}>{period}</div>
            <div className={styles.details}>
                {details.map(line => <LineComponent line={line} />)}
            </div>
        </div>
    );
};