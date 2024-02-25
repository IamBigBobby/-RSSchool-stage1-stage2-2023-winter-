// news.ts
export interface NewsContent {
  source: {
    id: string;
    name: string;
  };
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
