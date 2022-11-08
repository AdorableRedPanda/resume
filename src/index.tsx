import { App } from './App';

/** @jsx createElement */
import { createElement, render } from 'panda-jsx';

const $root = document.getElementById('root');

render(<App />, $root);