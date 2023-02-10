/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import { Labeled, StyledLine } from '../../../types';
import { LineComponent } from '../../ResumeView/components/Content/components/Main/compoenents/LineComponent';
import { Section } from '../../ResumeView/components/Content/components/Section';

interface Props {
    about: Labeled<StyledLine[]>;
}

export const About: FC<Props> = ({ about: { label, value } }) => (
	<Section label={label}>
		{value.map((item) => <LineComponent line={item} />)}
	</Section>
);