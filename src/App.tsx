/** @jsx createElement */
import { createElement, FC } from './JSX';

import { ResumeView } from './components';
import { ru } from './data';

export const App: FC = () => <ResumeView resume={ru} />;