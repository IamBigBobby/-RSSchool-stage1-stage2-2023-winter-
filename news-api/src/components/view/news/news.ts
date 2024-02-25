import "./news.css";

interface NewsContent {
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

interface NewsDrawer {
  // eslint-disable-next-line no-unused-vars
  draw(data: NewsContent[]): void;
}

class News implements NewsDrawer {
  draw(data: NewsContent[]) {
    console.log(data);
    const news =
      data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector(
      "#newsItemTemp",
    ) as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

      if (idx % 2)
        (newsClone.querySelector(".news__item") as HTMLElement).classList.add(
          "alt",
        );

      (
        newsClone.querySelector(".news__meta-photo") as HTMLElement
      ).style.backgroundImage =
        `url(${item.urlToImage || "img/news_placeholder.jpg"})`;
      (
        newsClone.querySelector(".news__meta-author") as HTMLElement
      ).textContent = item.author || item.source.name;
      (newsClone.querySelector(".news__meta-date") as HTMLElement).textContent =
        item.publishedAt.slice(0, 10).split("-").reverse().join("-");

      (
        newsClone.querySelector(".news__description-title") as HTMLElement
      ).textContent = item.title;
      (
        newsClone.querySelector(".news__description-source") as HTMLElement
      ).textContent = item.source.name;
      (
        newsClone.querySelector(".news__description-content") as HTMLElement
      ).textContent = item.description;
      (
        newsClone.querySelector(".news__read-more a") as HTMLElement
      ).setAttribute("href", item.url);

      fragment.append(newsClone);
    });

    (document.querySelector(".news") as HTMLElement).innerHTML = "";
    (document.querySelector(".news") as HTMLElement).appendChild(fragment);
  }
}

export default News;
