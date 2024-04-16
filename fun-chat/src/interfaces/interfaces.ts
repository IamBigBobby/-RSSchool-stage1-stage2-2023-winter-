export interface ElementData {
  tagName: string;
  classNames?: string[];
  textContent?: string;
  attributes?: Record<string, string>;
}

export interface CurrentUser {
  login: string;
  password: string;
}

export interface ParsedData {
  id: string;
  type: string;
  payload: {
    error: string;
  };
}
