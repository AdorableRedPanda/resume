/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import { Experience as ExperienceDto } from '../../../types';
import { ExperienceItem } from './ExperienceItem/ExperienceItem';
import { Section } from '../../ResumeView/components/Content/components/Section';

interface Props {
    experience: ExperienceDto;
	columns?: 1 | 2;
}

export const Experience: FC<Props> = ({ columns, experience: { label, value } }) => (
	<Section columns={columns} label={label}>
		{value.map((item) => <ExperienceItem item={item} />)}
	</Section>
);