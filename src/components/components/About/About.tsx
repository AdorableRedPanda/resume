/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';
import { Labeled, StyledLine } from 'src/types';

import { LineComponent } from '../LineComponent';
import { Section } from '../Section';
import styles from './styles.module.css';


interface Props {
	about: Labeled<StyledLine[]>;
}

export const About: FC<Props> = ({ about }) => (
	<Section label={about.label}>
		<div className={styles.profile}>
			{about.value.map((item) => <LineComponent line={item} />)}
		</div>
	</Section>
);
