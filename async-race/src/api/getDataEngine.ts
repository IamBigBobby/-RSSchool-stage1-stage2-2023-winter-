import { DriveModeStatus, EngineStat } from "../interfaces/garageInterfaces";

export default class EngineData {
  private link: string = "http://127.0.0.1:3000/engine";

  public switchEngien(
    carNumber: number,
    status: "started" | "stopped",
  ): Promise<EngineStat> {
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
        return response.json();
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      });
  }

  public driveModeEngien(
    carNumber: number,
    status = "drive",
  ): Promise<DriveModeStatus> {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    };
    return fetch(
      `${this.link}/?id=${carNumber}&status=${status}`,
      requestOptions,
    )
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      });
  }
}
