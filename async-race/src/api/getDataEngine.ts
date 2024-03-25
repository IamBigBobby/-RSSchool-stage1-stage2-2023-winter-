// import { EngineStat } from "../interfaces/garageInterfaces";

export default class EngineData {
  private link: string = "http://127.0.0.1:3000/engine";

  public switchEngien(carNumber: number, status: "started" | "stopped") {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: carNumber, status }),
    };
    return fetch(
      `${this.link}/?id=${carNumber}&status=${status}`,
      requestOptions,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP Error");
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
