import { Component } from './componets/componentsFarm';
import { div } from './componets/tagsFarm';

const newDiv = div('new-class');

const body = document.body;
console.log(body);

body.appendChild(newDiv.getNode());

setTimeout(() => {
  newDiv.destroy();
}, 5000);
