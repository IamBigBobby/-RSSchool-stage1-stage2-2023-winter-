import handleRouting from "./app/app";
import "./style.scss";

document.addEventListener("DOMContentLoaded", handleRouting);
window.addEventListener("popstate", handleRouting);
