/** @jsx createElement */
import { createElement, FC } from './JSX';

import { ResumeView } from './components';
import { en as resume } from './data';

export const App: FC = () => <ResumeView resume={resume} />;