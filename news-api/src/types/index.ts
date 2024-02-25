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

export interface NewsDrawer {
  // eslint-disable-next-line no-unused-vars
  draw(data: NewsContent[]): void;
}
