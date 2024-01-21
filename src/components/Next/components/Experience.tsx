/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import { Experience as ExperienceDto } from '../../../types';
import { ExperienceItem } from './ExperienceItem/ExperienceItem';
import { Section } from '../../ResumeView/components/Content/components/Section';
import styles from './styles.module.scss';

interface Props {
    experience: ExperienceDto;
	columns: 1 | 2;
}

export const Experience: FC<Props> = ({ columns, experience: { label, value } }) => (
	<Section columns={columns} label={label}>
		<ul className={styles.content}>
			{value.map((item) => (
				<li className={styles.content}>
					<ExperienceItem item={item} />
				</li>
			))}
		</ul>
	</Section>
);