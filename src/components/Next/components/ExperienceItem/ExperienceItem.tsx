/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import { ExperienceItem as ItemDto } from '../../../../types';
import styles from './styles.module.scss';
import { LineComponent } from '../../../ResumeView/components/Content/components/Main/compoenents/LineComponent';

interface Props {
    item: ItemDto;
}

export const ExperienceItem: FC<Props> = ({ item: { dates: [from, to], position, details } }) => {
	const period = `${from} – ${to}`.toLowerCase();
	const title = position.join(', ');
	return (
		<div className={styles.experience}>
			<div className={styles.header}>
				<span className={styles.title}>{title}</span>
			</div>
			<div className={styles.dates}>{period}</div>
			<div className={styles.details}>
				{details.map((line) => <LineComponent line={line} />)}
			</div>
		</div>
	);
};