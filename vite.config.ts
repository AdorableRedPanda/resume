import { defineConfig } from 'vite';

export default defineConfig({
	base: '',
	build: {
		assetsDir: './',
		outDir: '../dist',
	},
	resolve: {
		alias: { 'src/types': '/src/types' },
	},
	root: './src',
	server: {
		open: true,
		port: 8080,
	},
});
