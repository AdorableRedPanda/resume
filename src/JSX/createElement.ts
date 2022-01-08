import { JSXNodeType, NodeChild, JSXNode } from './types';

// todo: использовать другой пресет, не "@babel/preset-react", для обработки JSX
export const createElement = <Props extends object>(
    type: JSXNodeType<Props>,
    props: Props,
    ...children: NodeChild[]
): JSXNode<Props> => ({ type, props, children: children.flat() });
