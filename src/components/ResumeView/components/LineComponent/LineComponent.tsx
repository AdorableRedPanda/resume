import { FC } from 'panda-jsx';
import { StyledLine } from 'src/types';

import styles from './styles.module.css';


interface LineProps {
	value: StyledLine;
}

type SpecSubstring = [string, string];

const replacements: SpecSubstring[] = [
	[ '--', '\u2013' ],
];

const processSpecSymbols =
    (rawLine: string) => replacements
    	.reduce((prev, [ target, value ]) => prev.replace(target, value), rawLine);

export const LineComponent: FC<LineProps> = ({ value }) => {
	const [ lineValue, style = 'none' ] = value;
	const processed = processSpecSymbols(lineValue);
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
