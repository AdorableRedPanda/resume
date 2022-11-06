import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    server: {
        open: true,
        port: '8080',
    },
    build: {
        outDir: '../dist',
        assetsDir: './',
    }
});