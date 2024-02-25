/* eslint-disable no-unused-vars */
// news.ts
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
  // eslint-disable-next-line no-unused-vars
  draw(data: T): void;
}

// source.ts
export interface NewsSource {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}
// in source.ts we also use NewsDrawer, it's important

// appView.ts
export type ShowNews = {
  status: "ok" | "error";
  sources?: NewsSource[];
  articles?: NewsContent[];
};

export interface appViewInterface {
  // eslint-disable-next-line no-unused-vars
  drawNews(data: ShowNews): void;
  drawSources(data: ShowNews): void;
}

// loader.ts
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
