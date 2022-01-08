import { createElement, FC } from '../../../../../../JSX';
import styles from '../styles.module.css';
import { Education, Labeled, Profile, WorkExperience } from '../../../../../../types';
import { About } from './compoenents/About';
import { Educations } from './compoenents/Educations';
/** @jsx createElement */

interface Props {
    profile: Profile;
    workExperiences: Labeled<WorkExperience[]>;
    educations: Labeled<Education[]>;
}

export const Main: FC<Props> = ({ profile, educations }) => (
    <div className={styles.sub_layout}>
        <About about={profile.about} />
        <Educations educations={educations}/>
    </div>
);