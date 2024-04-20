import currentSocket from "../constants/currentSocket";
import generateRandomId from "../utils/randomId";

export default class WebSocketClient {
  private url: string;

  private socket: WebSocket | null;

  constructor() {
    this.url = currentSocket;
    this.socket = null;
  }

  public connect(): void {
    this.socket = new WebSocket(this.url);

    this.socket.addEventListener("open", () => {
      console.log("Connected to WebSocket server");
    });

    // this.socket.addEventListener("message", (event) => {
    //   console.log("Received message:", event.data);
    // });

    this.socket.addEventListener("close", () => {
      console.log("Disconnected from WebSocket server");
    });

    this.socket.addEventListener("error", () => {
      console.log("WebSocket error");
    });
  }

  public onConnect(callback: () => void): void {
    if (this.socket) {
      this.socket.addEventListener("open", callback);
    } else {
      console.error("WebSocket connection not established");
    }
  }

  public addUser(login: string, password: string): void {
    const request = {
      id: generateRandomId(),
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

  public logout(login: string, password: string): void {
    const request = {
      id: generateRandomId(),
      type: "USER_LOGOUT",
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
    if (this.socket) {
      this.socket.send(data);
    } else {
      console.error("WebSocket connection not established or closed");
    }
  }

  public showMessageData(callback: (data: string) => void): void {
    if (this.socket) {
      this.socket.addEventListener("message", (event) => {
        callback(event.data);
      });
    } else {
      console.error("WebSocket connection not established");
    }
  }

  public getAllAuthenticatedUsers() {
    const request = {
      id: generateRandomId(),
      type: "USER_ACTIVE",
      payload: null,
    };

    this.send(JSON.stringify(request));
  }

  public getAllUnauthenticatedUsers() {
    const request = {
      id: generateRandomId(),
      type: "USER_INACTIVE",
      payload: null,
    };

    this.send(JSON.stringify(request));
  }

  public sendingMessage(to: string, text: string) {
    const request = {
      id: generateRandomId(),
      type: "MSG_SEND",
      payload: {
        message: {
          to,
          text,
        },
      },
    };

    this.send(JSON.stringify(request));
  }

  public fetchingMessageHistory(login: string) {
    const request = {
      id: generateRandomId(),
      type: "MSG_FROM_USER",
      payload: {
        user: {
          login,
        },
      },
    };

    this.send(JSON.stringify(request));
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}
