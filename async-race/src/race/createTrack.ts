import GarageData from "../api/getDataGarage";
import paginationPageAmendment from "../pagination/paginationStatus";
import closeWinners from "../winners/closeWinners";
import createWinnerPagination from "../winners/createWinnerPagiantion";
import openWinners from "../winners/openWinners";
import paginationWinners from "../winners/paginationWinnersStatus";
import viewWinners from "../winners/viewWinners";
import backCarButton from "./backButton";
import raceButton from "./raceButton";
import resetButton from "./resetButton";
import selectButton from "./selectButton";
import startCarButton from "./startButton";

export default function createTrack(): void {
  const openWinnersButton = document.querySelector(".winner-view-button");
  const closeWinnerButton = document.querySelector(".race-view-button");

  openWinnersButton?.addEventListener("click", openWinners);
  closeWinnerButton?.addEventListener("click", closeWinners);

  const raceContainer = document.querySelector(".race-container");
  const buttonStartRace = document.createElement("button");
  const buttonResetRace = document.createElement("button");
  const garageStatistics = document.createElement("div");
  const currentPage = document.createElement("div");
  const winnerPage = document.createElement("div");

  buttonStartRace.classList.add("button-start-race");
  buttonResetRace.classList.add("button-reset-race");
  garageStatistics.classList.add("garage-statistics");
  winnerPage.classList.add("winners-page");
  currentPage.classList.add("current-page");

  buttonStartRace.textContent = "RACE";
  buttonResetRace.textContent = "RESET";
  currentPage.textContent = `Page #${paginationPageAmendment.page}`;
  buttonResetRace.disabled = true;

  raceContainer?.appendChild(winnerPage);
  raceContainer?.appendChild(buttonStartRace);
  raceContainer?.appendChild(buttonResetRace);

  const newGarage = new GarageData();

  newGarage
    .getLimitedGarageData(paginationPageAmendment.page)
    .then((garage) => {
      for (let i = 0; i < garage.length; i += 1) {
        const track = document.createElement("div");
        track.classList.add("track");

        const carName = document.createElement("div");
        const road = document.createElement("div");

        carName.classList.add("car-name");
        carName.textContent = garage[i].name;
        road.classList.add("road");

        const carSvg = document.createElement("div");
        carSvg.classList.add("car-container");
        carSvg.innerHTML = `
      <svg class="car" version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="1280.000000pt" height="640.000000pt" viewBox="0 0 1280.000000 640.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
      fill="${garage[i].color}" stroke="none">
      <path d="M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9 -80 -12 -85 -6
      -10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78 -43 -193 -91
      -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154 -31 -340
      -49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3
      -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418
      0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64
      -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622
      756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302
      140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263
      l-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22
      259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239
      -63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1
      -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45
      525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50
      680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0
      -226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332
      -208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341
      10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66
      -422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36
      -485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83
      54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12
      -67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134
      274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11
      -27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z"/>
      <path d="M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262
      -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493
      -551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23
      86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50
      -354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220
      1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360
      0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z"/>
      <path d="M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120
      -114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z"/>
      <path d="M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28
      22 c-34 28 -138 70 -193 79 l-40 7 0 -162z"/>
      <path d="M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0
      165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z"/>
      <path d="M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0
      165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z"/>
      <path d="M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29
      58 -13 0 -29 -8 -34 -18z"/>
      <path d="M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57
      9 153 -71 153 -27 0 -44 -8 -66 -29z"/>
      <path d="M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16
      -54 -2z"/>
      <path d="M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67
      -62 36z"/>
      <path d="M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123
      113 131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z"/>
      <path d="M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71
      195 0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z"/>
      <path d="M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25
      -70 0z"/>
      <path d="M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7
      0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"/>
      <path d="M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223
      232 -230 231 -3 0 -11 -3 -17 -6z"/>
      <path d="M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24
      -411 33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118
      380 196 487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86
      -407 91 -120 3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96
      33 -289 5 -388 -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176
      238 -203 533 -71 797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207
      81 364 77 109 -3 143 -7 210 -30z"/>
      <path d="M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80
      119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z"/>
      <path d="M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20
      -163 84 -207 91 l-43 7 0 -162z"/>
      <path d="M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0
      165 3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z"/>
      <path d="M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45
      -88 241 -108 241 -4 0 -57 -51 -119 -112z"/>
      <path d="M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64
      -10 68 -14 2 -31 -3 -38 -10z"/>
      <path d="M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0
      -44 -6 -64 -31z"/>
      <path d="M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20
      -54 2z"/>
      <path d="M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13
      -24 13 -3 0 -14 -6 -24 -13z"/>
      <path d="M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120
      109 131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z"/>
      <path d="M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177
      79 203 0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z"/>
      <path d="M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43
      -67 12z"/>
      <path d="M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108
      10 0 13 34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115
      -113z"/>
      <path d="M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186
      61 239 98 16 10 -216 242 -234 235z"/>
      </g>
      </svg>
      `;

        const flagSvg = document.createElement("div");
        flagSvg.classList.add("flag-container");

        flagSvg.innerHTML = `
      <svg class="flag" version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="50.000000pt" height="50.000000pt" viewBox="0 0 1280.000000 1228.000000"
      preserveAspectRatio="xMidYMid meet">
      <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g transform="translate(0.000000,1228.000000) scale(0.100000,-0.100000)"
      fill="red" stroke="none">
      <path d="M10340 12263 c-46 -55 -299 -258 -462 -370 -307 -212 -721 -416
      -1158 -572 -188 -66 -556 -174 -755 -221 -49 -12 -144 -34 -210 -50 -66 -16
      -137 -32 -158 -35 -20 -4 -39 -11 -42 -15 -4 -6 47 -201 251 -950 31 -113 98
      -362 150 -555 87 -326 133 -496 204 -755 16 -58 42 -154 58 -215 17 -60 39
      -144 50 -185 26 -94 135 -496 207 -765 7 -27 31 -117 54 -200 22 -82 88 -325
      146 -540 58 -214 113 -412 121 -440 8 -27 10 -45 5 -40 -5 6 -574 1281 -1265
      2834 -690 1553 -1260 2829 -1266 2835 -16 16 -940 15 -1145 -2 -281 -22 -573
      -55 -686 -77 -11 -2 -78 -14 -147 -25 -927 -157 -1886 -540 -2622 -1048 -220
      -152 -584 -438 -631 -495 -19 -23 -44 48 226 -637 104 -261 207 -524 230 -585
      24 -60 81 -207 128 -325 47 -118 105 -267 130 -330 25 -63 83 -212 130 -330
      115 -292 210 -532 264 -670 25 -63 73 -187 108 -275 35 -88 102 -259 150 -380
      47 -121 135 -344 195 -495 59 -151 134 -340 165 -420 79 -202 188 -477 315
      -800 60 -151 148 -374 195 -495 48 -121 116 -294 152 -385 36 -91 75 -192 88
      -225 13 -33 63 -159 110 -280 195 -493 238 -603 311 -788 41 -105 93 -238 116
      -295 22 -56 44 -102 49 -102 5 0 9 4 9 8 0 13 201 256 329 397 138 152 434
      446 606 602 623 563 1469 1172 2185 1571 25 14 79 44 120 67 41 23 162 86 269
      140 699 349 1177 476 1404 372 266 -122 113 -561 -414 -1187 -111 -131 -258
      -287 -237 -250 8 14 42 70 75 126 76 125 130 227 170 324 51 123 60 151 74
      233 42 248 -108 337 -414 248 -261 -76 -593 -255 -882 -475 -124 -95 -328
      -275 -349 -308 -13 -21 4 -60 79 -172 118 -179 283 -310 495 -391 366 -142
      816 -151 1420 -29 608 123 1409 445 2090 841 727 423 1313 915 1596 1339 l74
      111 0 545 0 545 -116 244 c-64 134 -176 370 -249 524 -73 154 -274 579 -448
      945 -1098 2315 -1230 2596 -1450 3060 -117 246 -138 285 -158 288 -14 1 -31
      -6 -39 -15z"/>
      <path d="M286 10365 c-153 -68 -280 -126 -283 -129 -5 -5 15 -65 117 -356 34
      -96 79 -224 100 -285 20 -60 68 -195 104 -300 37 -104 85 -239 106 -300 21
      -60 66 -189 100 -285 34 -96 95 -269 135 -385 40 -115 101 -289 135 -385 34
      -96 78 -224 99 -285 21 -60 121 -344 221 -630 100 -286 208 -594 240 -685 178
      -507 359 -1024 407 -1160 30 -85 63 -180 73 -210 10 -30 43 -125 73 -210 30
      -85 121 -344 202 -575 81 -231 174 -496 207 -590 33 -93 68 -195 78 -225 10
      -30 44 -127 75 -215 57 -160 116 -328 260 -740 42 -121 94 -269 115 -330 22
      -60 64 -182 95 -270 31 -88 71 -203 89 -255 19 -52 52 -147 74 -210 22 -63 72
      -205 110 -315 39 -110 89 -254 112 -320 43 -124 88 -252 170 -485 27 -74 54
      -153 60 -175 7 -22 16 -44 20 -48 10 -11 951 363 957 380 3 7 -11 52 -30 100
      -19 49 -67 169 -105 268 -39 99 -104 266 -145 370 -41 105 -101 255 -132 335
      -75 190 -156 397 -212 540 -25 63 -65 167 -90 230 -195 496 -248 631 -318 810
      -20 52 -75 192 -122 310 -47 118 -110 278 -140 355 -30 77 -65 167 -78 200
      -47 121 -218 556 -306 780 -106 270 -141 359 -202 515 -25 63 -79 201 -120
      305 -41 105 -92 233 -112 285 -20 52 -75 192 -122 310 -81 205 -131 333 -245
      625 -28 72 -100 254 -160 405 -60 151 -121 309 -137 350 -16 41 -74 190 -130
      330 -55 140 -130 332 -166 425 -37 94 -105 267 -152 385 -84 216 -149 380
      -306 780 -46 118 -137 348 -200 510 -64 162 -141 358 -171 435 -29 76 -58 140
      -62 142 -5 1 -134 -54 -288 -122z"/>
      </g>
      </svg>
      `;

        road.appendChild(carSvg);
        road.appendChild(flagSvg);

        track.appendChild(carName);
        track.appendChild(road);

        const buttonStart = document.createElement("button");
        const buttonStop = document.createElement("button");
        const buttonDeleteCar = document.createElement("button");
        const buttonSelectCar = document.createElement("button");

        buttonStart.classList.add("button-start");
        buttonStop.classList.add("button-stop");
        buttonDeleteCar.classList.add("button-delete");
        buttonSelectCar.classList.add("button-select");

        buttonStart.textContent = "A";
        buttonStop.textContent = "B";
        buttonDeleteCar.textContent = "REMOVE";
        buttonSelectCar.textContent = "SELECT";
        buttonStop.disabled = true;

        raceContainer?.appendChild(track);

        track?.appendChild(buttonSelectCar);
        track?.appendChild(buttonDeleteCar);
        track?.appendChild(buttonStart);
        track?.appendChild(buttonStop);
      }
      selectButton();
      raceButton();
      resetButton();
      startCarButton();
      backCarButton();
    })
    .then(() => {
      newGarage.getGarageData().then((data) => {
        const countCars = data.length;
        garageStatistics.textContent = `Garage(${countCars})`;
        raceContainer?.appendChild(garageStatistics);
      });

      raceContainer?.appendChild(currentPage);
      viewWinners(paginationWinners.page, paginationWinners.sortBy);
      createWinnerPagination();
    });
}
