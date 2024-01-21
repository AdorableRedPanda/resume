/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';
import { Experience as ExperienceData } from 'src/types';

import { List } from '../List';
import { Section } from '../Section';
import { ExperienceItem } from './ExperienceItem';

interface Props {
	columns: 1 | 2;
	experience: ExperienceData;
}

export const Experience: FC<Props> = ({ columns, experience: { label, value } }) => (
	<Section columns={columns} label={label}>
		<List component={ExperienceItem} items={value} />
	</Section>
);
