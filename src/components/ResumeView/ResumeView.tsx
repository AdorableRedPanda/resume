/** @jsx createElement */
import { FC, createElement } from 'panda-jsx';
import { Resume } from 'src/types';

import { About, Contacts, Experience, Header } from './components';
import styles from './styles.module.scss';


interface Props {
	resume: Resume;
}

export const ResumeView: FC<Props> = ({ resume: { contacts, education, profile, skills, workExperience } }) => (
	<div className={styles.page}>
		<Header profile={profile} skills={skills} />
		<Contacts links={contacts} />
		<About about={profile.about} />
		<Experience columns={1} experience={workExperience} />
		<Experience columns={2} experience={education} />
	</div>
);
