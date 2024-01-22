import { Plugin, defineConfig } from 'vite';

const jsxRequiredImports = `
/** @jsx createElement */
import { createElement } from \'panda-jsx\';
`;

const isTsx = (filename: string) => filename.endsWith('.tsx') || filename.endsWith('.jsx');

export function JSXCreateElementPlugin (): Plugin { // todo: move it to 'panda-jsx' package
	return {
		name: 'panda-jsx-create-element-plugin',

		transform (src, id) {
			const code = isTsx(id)
				? `${jsxRequiredImports};\n${src}`
				: src;

			return {
				code,
			};
		},
	};
}

export default defineConfig({
	base: '',
	build: {
		assetsDir: './',
		outDir: '../dist',
	},
	plugins: [ JSXCreateElementPlugin() ],
	resolve: {
		alias: { 'src/types': '/src/types' },
	},
	root: './src',
	server: {
		open: true,
		port: 8080,
	},
});
