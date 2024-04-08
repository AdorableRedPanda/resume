import type { FC } from 'panda-jsx';
import type { Labeled, StyledLine } from 'src/types';

import { LineComponent } from './LineComponent';
import { List } from './List';
import { Section } from './Section';

interface Props {
	about: Labeled<StyledLine[]>;
}

export const About: FC<Props> = ({ about: { label, value } }) => (
	<Section label={label}>
		<List component={LineComponent} items={value} />
	</Section>
);
