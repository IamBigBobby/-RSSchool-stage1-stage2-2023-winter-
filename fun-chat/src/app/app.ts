import handleRoute from "utils/router";

export default function app(): void {
  window.addEventListener("popstate", handleRoute);
  window.addEventListener("load", handleRoute);
}
