import GarageData from "../api/getDataGarage";
import destroyRaceContainer from "../app/destroyRaceContainer";
import createRaceContainer from "../race/createRaceContainer";
import paginationPageAmendment from "./paginationStatus";

export function stepLeft(): void {
  const buttonLeftPagination = document.querySelector(
    ".button-left-pagination",
  ) as HTMLButtonElement;
  const buttonRightPagination = document.querySelector(
    ".button-right-pagiantion",
  ) as HTMLButtonElement;
  const newGarageData = new GarageData();
  paginationPageAmendment.page -= 1;
  paginationPageAmendment.amendment -= 7;
  if (paginationPageAmendment.page === 1) {
    destroyRaceContainer();
    createRaceContainer();
    buttonLeftPagination.disabled = true;
  } else {
    buttonLeftPagination.disabled = false;
    destroyRaceContainer();
    createRaceContainer();
    newGarageData
      .getLimitedGarageData(paginationPageAmendment.page)
      .then((data) => {
        if (data.length === 7) {
          buttonRightPagination.disabled = false;
        }
      });
  }
}

export function stepRight(): void {
  const buttonLeftPagination = document.querySelector(
    ".button-left-pagination",
  ) as HTMLButtonElement;
  const buttonRightPagination = document.querySelector(
    ".button-right-pagiantion",
  ) as HTMLButtonElement;
  const newGarageData = new GarageData();
  paginationPageAmendment.page += 1;
  paginationPageAmendment.amendment += 7;
  if (paginationPageAmendment.page > 1) {
    buttonLeftPagination.disabled = false;
    destroyRaceContainer();
    createRaceContainer();
    newGarageData
      .getLimitedGarageData(paginationPageAmendment.page)
      .then((data) => {
        if (data.length < 7) {
          buttonRightPagination.disabled = true;
        }
      });
  }
}
