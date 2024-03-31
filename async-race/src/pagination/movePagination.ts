import destroyRaceContainer from "../app/destroyRaceContainer";
import createRaceContainer from "../race/createRaceContainer";
import paginationPageAmendment from "./paginationStatus";

export function stepLeft(): void {
  paginationPageAmendment.page -= 1;
  paginationPageAmendment.amendment -= 7;
  console.log(paginationPageAmendment.page, paginationPageAmendment.amendment);
  destroyRaceContainer();
  createRaceContainer();
}

export function stepRight(): void {
  paginationPageAmendment.page += 1;
  paginationPageAmendment.amendment += 7;
  console.log(paginationPageAmendment.page, paginationPageAmendment.amendment);
  destroyRaceContainer();
  createRaceContainer();
}
