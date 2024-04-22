// eslint-disable-next-line
import client from "../constants/currentClient";
import currentSocket from "../constants/currentSocket";
import showConnectingPopUp from "../utils/inputs/popUpErrorConnection";
import generateRandomId from "../utils/randomId";
// eslint-disable-next-line
import watcher from "../utils/watcher";

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
      watcher();

      const wrapperDataConnecting = document.querySelector(
        ".wrapper-popup-connecting",
      ) as HTMLElement;
      const userData = sessionStorage.getItem("userData_iambigbobby") as string;
      const userDataParsed = JSON.parse(userData);
      if (wrapperDataConnecting) {
        const parentWrapper = wrapperDataConnecting.parentElement;
        if (parentWrapper) {
          parentWrapper.removeChild(wrapperDataConnecting);
        }
      }

      if (userDataParsed !== null) {
        client.addUser(userDataParsed.login, userDataParsed.password);
      }
    });

    this.socket.addEventListener("close", () => {
      console.log("Disconnected from WebSocket server");
      const wrapperDataConnecting = document.querySelector(
        ".wrapper-popup-connecting",
      );
      if (!wrapperDataConnecting) {
        showConnectingPopUp();
      }
      this.reconnect();
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

  public messageTextEditing(id: string, text: string) {
    const request = {
      id: generateRandomId(),
      type: "MSG_EDIT",
      payload: {
        message: {
          id,
          text,
        },
      },
    };

    this.send(JSON.stringify(request));
  }

  public deleteMessage(id: string) {
    const request = {
      id: generateRandomId(),
      type: "MSG_DELETE",
      payload: {
        message: {
          id,
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

  private reconnect(): void {
    setTimeout(() => {
      this.connect();
      console.log("try to reconect");
    }, 1000);
  }
}
