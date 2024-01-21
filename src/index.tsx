/** @jsx createElement */
import { createElement, render } from 'panda-jsx';

import { ResumeView } from './components';
import { en } from './data';

const $root = document.getElementById('root');

render(<ResumeView data={en} />, $root);

