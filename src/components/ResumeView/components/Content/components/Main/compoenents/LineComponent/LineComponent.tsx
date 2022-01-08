import { StyledLine } from '../../../../../../../../types';
import { createElement, FC } from '../../../../../../../../JSX';
import styles from './styles.module.css';
/** @jsx createElement */

interface LineProps {
    line: StyledLine;
}

export const LineComponent: FC<LineProps> = ({ line }) => {
    const [value, style = 'none'] = line;
    const processed = value.replace(' - ', ' \u2013 ');
    switch (style) {
        case 'bold':
            return <p className={styles.bold}>{processed}</p>;
        case 'li':
            return <div className={styles.list_item}>{processed}</div>;
        case 'none':
        default:
            return <p className={styles.simple}>{processed}</p>;
    }
};