import WebSocketClient from "./api/server";
import renderTestButtons from "./render/test";
import "./style.scss";

renderTestButtons();

const client = new WebSocketClient();

client.connect();

client.onConnect(() => {
  console.log(
    "Соединение с WebSocket установлено, отправляю запрос на вход пользователя...",
  );
  client.addUser("Boba", "123");
});
