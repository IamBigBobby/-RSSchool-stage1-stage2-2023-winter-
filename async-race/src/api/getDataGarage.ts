import { Car, CarsArray } from "../interfaces/garageInterfaces";
import { WinCarsArray } from "../interfaces/winnerInterfaces";

export default class GarageData {
  private garage: string = "http://127.0.0.1:3000/garage";

  private winners: string = "http://127.0.0.1:3000/winners";

  public getGarageData(): Promise<CarsArray> {
    return fetch(this.garage)
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

      fetch(this.garage, requestOptions).then((response) => {
        if (response.ok) {
          resolve();
        }
      });
    });
  }

  public getCar(carNumber: number): Promise<Car> {
    return fetch(`${this.garage}/${carNumber}`)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  public getLimitedGarageData(
    page: number,
    limit: number = 7,
  ): Promise<CarsArray> {
    const url = `${this.garage}/?_page=${page}&_limit=${limit}`;
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
      const deleteUrl = `${this.garage}/${carNumber}`;
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

  public updateCar(carNumber: number, updateCar: Car): Promise<void> {
    return new Promise((resolve) => {
      const deleteUrl = `${this.garage}/${carNumber}`;
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateCar),
      };
      fetch(deleteUrl, requestOptions)
        .then((response) => {
          if (response.ok) {
            console.log("Car updated successfully");
            resolve();
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
  }

  public getWinnersGarageData(
    page: number,
    sort: "id" | "wins" | "time",
    order: "ASC" | "DESC",
    limit: number = 7,
  ): Promise<WinCarsArray> {
    const url = `${this.winners}/?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
