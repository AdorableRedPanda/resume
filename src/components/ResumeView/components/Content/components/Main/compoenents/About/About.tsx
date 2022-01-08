import { Labeled, StyledLine } from '../../../../../../../../types';
import { createElement, FC } from '../../../../../../../../JSX';
import { Section } from '../../../Section';
import { LineComponent } from '../LineComponent';
import styles from './styles.module.css';
/** @jsx createElement */

interface Props {
    about: Labeled<StyledLine[]>
}

export const About: FC<Props> = ({ about }) => (
    <Section label={about.label}>
        <div className={styles.profile}>
            {about.value.map(item => <LineComponent line={item} />)}
        </div>
    </Section>
);