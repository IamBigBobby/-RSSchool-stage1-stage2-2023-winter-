import WebSocketClient from "../api/server";

const client = new WebSocketClient();

client.connect();

client.onConnect(() => {
  client.getAllAuthenticatedUsers();
});

export default client;
