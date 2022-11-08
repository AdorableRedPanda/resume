import styles from '../styles.module.css';
import { createElement, FC } from 'panda-jsx';
import { SideInfo } from '../../../../../../types';
import { ContactItem, ListSection, SocialItem, LanguageItem, SkillItem } from './ListSection';
/** @jsx createElement */

interface Props {
    sections: SideInfo;
}

export const Sidebar: FC<Props> = ({ sections: { socialLinks, contacts, skills, languages } }) => (
    <div className={styles.sub_layout}>
        <ListSection
            list={contacts}
            ItemComponent={ContactItem}
        />
        <ListSection
            list={socialLinks}
            ItemComponent={SocialItem}
        />
        <ListSection
            list={skills}
            ItemComponent={SkillItem}
        />
        <ListSection
            list={languages}
            ItemComponent={LanguageItem}
        />
    </div>
);