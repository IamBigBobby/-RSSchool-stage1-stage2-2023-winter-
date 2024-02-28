export interface NewsContent {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsDrawer<T> {
  draw(data: T): void;
}

export interface NewsSource {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export type ShowNews = {
  status: "ok" | "error";
  sources?: NewsSource[];
  articles?: NewsContent[];
};

export interface AppViewInterface {
  drawNews(data: ShowNews): void;
  drawSources(data: ShowNews): void;
}

export type Endpoints = "sources" | "everything" | "top-headlines";

export type Query = {
  endpoint: Endpoints;
  options: UrlOptions;
};

export type UrlOptions = {
  apiKey?: string;
  sources?: string;
};

export enum StatusCodes {
  unauthorized = 401,
  notFound = 404,
}

export type CallbackFunction<T> = (data: T) => void;

export interface Controller {
  getSources<T>(callback: (data?: T) => void): void;
  getNews<T>(e: Event, callback: (data?: T) => void): void;
}
