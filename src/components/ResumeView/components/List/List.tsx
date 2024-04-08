import type { FC } from 'panda-jsx';

import styles from './styles.module.scss';

interface ListItemProps<TItem> {
	value: TItem;
}
interface Props<TItem> {
	className?: string;
	component: FC<ListItemProps<TItem>>;
	items: TItem[];
}

export function List<TItem>({
	className = '',
	component: Component,
	items,
}: Props<TItem>) {
	const classes = `${className} ${styles.list}`;

	return (
		<ul className={classes}>
			{items.map((i) => (
				<li>
					<Component value={i} />
				</li>
			))}
		</ul>
	);
}
