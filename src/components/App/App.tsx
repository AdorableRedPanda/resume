/** @jsx createElement */
import { createElement, FC } from 'panda-jsx';
import { Next } from '../Next';
import { en as resume } from '../../data';

export const App: FC = () => (<Next resume={resume} />);