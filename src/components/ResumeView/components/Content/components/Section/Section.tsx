import { createElement, FC } from 'panda-jsx';
/** @jsx createElement */
import styles from './styles.module.scss';

interface Props {
    label: string;
	columns?: 1 | 2;
}

export const Section: FC<Props> = ({ label, columns = 1, children }) => {
	const classes = `${styles.content} ${styles[`columns_${columns}`]}`;

	return (
		<section className={styles.section}>
			<h5 className={styles.header}>{label}</h5>
			<div className={classes}>{children}</div>
		</section>
	);
};