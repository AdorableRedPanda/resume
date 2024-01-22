/** @jsx createElement */
import { createElement, render } from 'panda-jsx';

import { ResumeView } from './components';
import { en } from './data';
import { setupIcons } from './setupIcons';

const $root = document.getElementById('root');

setupIcons();

render(<ResumeView data={en} />, $root);

