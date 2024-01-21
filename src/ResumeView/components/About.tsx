/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';
import { Labeled, StyledLine } from 'src/types';

import { LineComponent } from './LineComponent';
import { Section } from './Section';

interface Props {
	about: Labeled<StyledLine[]>;
}

export const About: FC<Props> = ({ about: { label, value } }) => (
	<Section label={label}>
		{value.map((item) => <LineComponent line={item} />)}
	</Section>
);
