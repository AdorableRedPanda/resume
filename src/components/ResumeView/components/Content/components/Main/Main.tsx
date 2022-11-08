import { createElement, FC } from 'panda-jsx';
import styles from '../styles.module.css';
import { Experience, Profile } from '../../../../../../types';
import { About } from './compoenents/About';
import { ExperienceList } from './compoenents/ExperienceList';
/** @jsx createElement */

interface Props {
    profile: Profile;
    work: Experience;
    education: Experience;
}

export const Main: FC<Props> = ({ profile, education, work }) => (
    <div className={styles.sub_layout}>
        <About about={profile.about} />
        <ExperienceList experience={work} />
        <ExperienceList experience={education}/>
    </div>
);