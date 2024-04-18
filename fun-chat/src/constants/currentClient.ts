import WebSocketClient from "../api/server";

const client = new WebSocketClient();
client.connect();
export default client;
