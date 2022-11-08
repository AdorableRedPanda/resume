import { createElement, FC } from 'panda-jsx';
import { Experience } from '../../../../../../../../types';
import { Section } from '../../../Section';
import styles from './styles.module.css';
import { ExperienceItemComponent } from './ExperienceItemComponent/ExperienceItemComponent';
/** @jsx createElement */

interface Props {
    experience: Experience
}

export const ExperienceList: FC<Props> = ({ experience: { label, value } }) => (
    <Section label={label}>
        <ul className={styles.list}>
            {value.map(item => <ExperienceItemComponent item={item} />)}
        </ul>
    </Section>
);