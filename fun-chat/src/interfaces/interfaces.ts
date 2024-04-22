export interface ElementData {
  tagName: string;
  classNames?: string[];
  textContent?: string;
  attributes?: Record<string, string>;
  eventListener?: {
    eventType: string;
    listener: EventListenerOrEventListenerObject;
  };
}

export interface CurrentUser {
  login: string;
  password: string;
}

export interface UsersStatus {
  login: string;
  isLogined: boolean;
}

export interface ParsedData {
  id: string;
  type: string;
  payload: {
    error: string;
  };
}

export type PageType = "messenger" | "login";

export interface Message {
  to: string;
  text: string;
}

export interface MessageId {
  id: string;
  text: string;
}

export interface ResevedMessage {
  id: string;
  from: string;
  to: string;
  text: string;
  datetime: number;
  status: {
    isDelivered: boolean;
    isReaded: boolean;
    isEdited: boolean;
  };
}
