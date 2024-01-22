/** @jsx createElement */
import { createElement, render } from 'panda-jsx';

import { ResumeView } from './components';
import { en } from './data';
import { initIcons, initRoot } from './inits';

initIcons();

const root = initRoot();

render(<ResumeView data={en} />, root);

