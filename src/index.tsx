/** @jsx createElement */
import { createElement, render } from 'panda-jsx';

import { ResumeView } from './components';
import { resume } from './data';

const $root = document.getElementById('root');

render(<ResumeView resume={resume} />, $root);

