import { App } from './components/App';

/** @jsx createElement */
import { createElement, render } from 'panda-jsx';

const $root = document.getElementById('root');

render(<App />, $root);