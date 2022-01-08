import { createElement, FC } from '../../../../../../../../JSX';
import { SideInfoList } from '../../../../../../../../types';
import { Section } from '../../../Section';
import { ItemComponentProps } from '../types';
import styles from '../styles.module.css';
/** @jsx createElement */

interface Props {
    list: SideInfoList;
    ItemComponent: FC<ItemComponentProps>;
}

export const ListSection: FC<Props> = ({ list, ItemComponent }) => (
    <Section label={list.label}>
        <ul className={styles.list}>
            {list.value.map(item => <ItemComponent item={item} />)}
        </ul>
    </Section>
);