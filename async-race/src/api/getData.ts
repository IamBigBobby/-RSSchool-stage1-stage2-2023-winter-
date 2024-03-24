export default class GetData {
    private link: string;
  
    constructor(link: string) {
      this.link = link;
    }
  
    fetchData(): void {
      fetch(this.link)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("There has been a problem with your fetch operation:", error);
        });
    }
  }