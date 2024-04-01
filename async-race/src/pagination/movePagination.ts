import GarageData from "../api/getDataGarage";
import destroyRaceContainer from "../app/destroyRaceContainer";
import createRaceContainer from "../race/createRaceContainer";
import paginationPageAmendment from "./paginationStatus";

export function stepLeft(): void {
  if (paginationPageAmendment.page === 1) {
    return;
  }
  const newGarageData = new GarageData();
  paginationPageAmendment.page -= 1;
  paginationPageAmendment.amendment -= 7;
  destroyRaceContainer();
  createRaceContainer();
  newGarageData.getLimitedGarageData(paginationPageAmendment.page);
}

export function stepRight(): void {
  const newGarageData = new GarageData();
  paginationPageAmendment.page += 1;
  paginationPageAmendment.amendment += 7;
  destroyRaceContainer();
  createRaceContainer();
  newGarageData.getLimitedGarageData(paginationPageAmendment.page);
}
