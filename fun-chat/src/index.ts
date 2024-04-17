import app from "./app/app";
import "./style.scss";

document.addEventListener("DOMContentLoaded", app);
window.addEventListener("popstate", app);
