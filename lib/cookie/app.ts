import cookie from "./index";

function setApp(hide) {
  if (hide) cookie.set("app", hide);
}

function getApp() {
  return cookie.get("app");
}

function removeApp() {
  cookie.remove("app");
}

export { setApp, getApp, removeApp };
