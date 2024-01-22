import tokens from '../styles/tokens.module.scss';
import styles from './styles.module.scss';
export const initRoot = () => {
	const root = document.createElement('div');

	root.classList.add(tokens.colors, styles.root);

	document.body.appendChild(root);

	return root;
};
