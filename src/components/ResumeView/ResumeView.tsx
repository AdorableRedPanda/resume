import type { FC } from 'panda-jsx';
import type { Resume } from 'src/types';

import { About, Experience, Header } from './components';
import styles from './styles.module.scss';
import { Skills } from './components/Skills/Skills';

interface Props {
	data: Resume;
}

export const ResumeView: FC<Props> = ({
	data: { contacts, education, profile, skills, workExperience },
}) => (
	<main className={styles.page}>
		<Header profile={profile} links={contacts} />
		<Skills skills={skills} />
		<About about={profile.about} />
		<Experience columns={1} experience={workExperience} />
		<Experience columns={2} experience={education} />
	</main>
);
