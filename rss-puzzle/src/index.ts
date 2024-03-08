import { Component } from './componets/componentsFarm';

const newComponent = new Component({
  tag: 'div',
  className: 'my-class',
  text: 'Hello, world!',
});

const body = document.body;
console.log(body);

body.appendChild(newComponent.getNode());
