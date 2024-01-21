/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';

import styles from './styles.module.scss';

interface Props {
	columns?: 1 | 2;
	label: string;
}

export const Section: FC<Props> = ({ children, columns = 1, label }) => {
	const classes = `${styles.content} ${styles[`columns_${columns}`]}`;

	return (
		<section className={styles.section}>
			<h5 className={styles.header}>{label}</h5>
			<div className={classes}>{children}</div>
		</section>
	);
};
