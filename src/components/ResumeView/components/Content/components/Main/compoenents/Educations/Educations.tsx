import { createElement, FC } from '../../../../../../../../JSX';
import { Labeled, Education } from '../../../../../../../../types';
import { Section } from '../../../Section';
import { EducationComponent } from './EducationComponent';
import styles from './styles.module.css';
/** @jsx createElement */

interface Props {
    educations: Labeled<Education[]>
}

export const Educations: FC<Props> = ({ educations }) => (
    <Section label={educations.label}>
        <ul className={styles.list}>
            {educations.value.map(item => <EducationComponent item={item} />)}
        </ul>
    </Section>
);