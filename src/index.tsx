import { render } from 'panda-jsx';

import { ResumeView } from './components';
import { en } from './data';
import { initRoot } from './initRoot';


const root = initRoot();

render(<ResumeView data={en} />, root);

