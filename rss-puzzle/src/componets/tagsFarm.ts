import { Component } from './componentsFarm';

export const div = (className: string, ...children: Component[]) =>
  new Component({ tag: 'div', className }, ...children);

export const img = ({ src = '', alt = '', className = '' }) =>
  new Component({ tag: 'img', className, src, alt });
