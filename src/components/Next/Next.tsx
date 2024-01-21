/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import { Resume } from '../../types';
import styles from './styles.module.scss';
import { Header } from './components/Header';
import { Contacts } from './components/Contacts';
import { Experience } from './components/Experience';
import { About } from './components/About';


interface Props {
    resume: Resume;
}

export const Next: FC<Props> = ({ resume: { profile, skills, contacts, workExperience, education } }) => (
	<div className={styles.page}>
		<Header profile={profile} skills={skills} />
		<Contacts links={contacts} />
		<About about={profile.about} />
		<Experience columns={1} experience={workExperience} />
		<Experience columns={2} experience={education} />
	</div>
);