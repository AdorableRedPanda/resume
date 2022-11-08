import { Resume } from '../../types';
import styles from './styles.module.css';
/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import { Header, Footer, Content } from './components';

interface Props {
    resume: Resume;
}

export const ResumeView: FC<Props> = ({ resume }) => (
    <div className={styles.layout}>
        <Header {...resume.profile} />
        <Content resume={resume} />
        <Footer caption={resume.footerCaption} />
    </div>
);