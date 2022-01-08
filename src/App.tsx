/** @jsx createElement */
import { createElement, FC } from './JSX';

import { ResumeView } from './components';
import { en, ru } from './data';

export const App: FC = () => {
    const resume = window.location.pathname.includes('ru') ? ru : en;
    return <ResumeView resume={resume} />;
};