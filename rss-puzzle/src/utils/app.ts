import { main } from '../componets/tagsFarm';

export function createApp(): void {
  const app = main('main');
  const body = document.body;
  body.appendChild(app.getNode());
}
