import { createElement, FC } from '../../../../JSX';
import { Resume } from '../../../../types';
/** @jsx createElement */

import styles from './styles.module.css';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';

interface Props {
    resume: Resume;
}

export const Content: FC<Props> = ({ resume: { sideInfo, education, profile, workExperience } }) => (
    <div className={styles.content}>
        <div className={styles.sidebar}>
            <Sidebar sections={sideInfo}/>
        </div>
        <div className={styles.main}>
            <Main
                education={education}
                profile={profile}
                work={workExperience}
            />
        </div>
    </div>
);