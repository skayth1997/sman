// import cookie from "js-cookie";

const cookie = {
  set: (prop: string, data: string) => {},
  get: (prop: string) => {},
  remove: (prop: string) => {},
};

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
