import currentSocket from "../constants/constants";

export default class WebSocketClient {
  private url: string;

  private socket: WebSocket | null;

  constructor() {
    this.url = currentSocket;
    this.socket = null;
  }

  connect(): void {
    this.socket = new WebSocket(this.url);

    this.socket.addEventListener("open", () => {
      console.log("Connected to WebSocket server");
    });

    this.socket.addEventListener("message", (event) => {
      console.log("Received message:", event.data);
    });

    this.socket.addEventListener("close", () => {
      console.log("Disconnected from WebSocket server");
    });

    this.socket.addEventListener("error", () => {
      console.log("WebSocket error");
    });
  }

  onConnect(callback: () => void): void {
    if (this.socket) {
      this.socket.addEventListener("open", callback);
    } else {
      console.error("WebSocket connection not established");
    }
  }

  addUser(login: string, password: string): void {
    const request = {
      id: Math.random().toString(36).substring(2),
      type: "USER_LOGIN",
      payload: {
        user: {
          login,
          password,
        },
      },
    };

    this.send(JSON.stringify(request));
  }

  send(data: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    } else {
      console.error("WebSocket connection not established or closed");
    }
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}
