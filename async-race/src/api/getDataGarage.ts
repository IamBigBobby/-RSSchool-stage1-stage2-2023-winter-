import { Car, CarsArray } from "../interfaces/garageInterfaces";

export default class GarageData {
  private link: string = "http://127.0.0.1:3000/garage";

  public getGarageData(): Promise<CarsArray> {
    return fetch(this.link)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  public addCar(newCar: Car): Promise<void> {
    return new Promise<void>((resolve) => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
      };

      fetch(this.link, requestOptions).then((response) => {
        if (response.ok) {
          resolve();
        }
      });
    });
  }

  public getCar(carNumber: number): Promise<Car> {
    return fetch(`${this.link}/${carNumber}`)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  public getLimitedGarageData(
    page: number = 1,
    limit: number = 7,
  ): Promise<CarsArray> {
    const url = `${this.link}/?_page=${page}&_limit=${limit}`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  public deleteCar(carNumber: number): Promise<void> {
    return new Promise((resolve) => {
      const deleteUrl = `${this.link}/${carNumber}`;
      const requestOptions = {
        method: "DELETE",
      };
      fetch(deleteUrl, requestOptions)
        .then((response) => {
          if (response.ok) {
            console.log("Car deleted successfully");
            resolve();
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
  }
}
