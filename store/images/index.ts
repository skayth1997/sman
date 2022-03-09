import { createModel } from "@rematch/core";
import { List, Map } from "immutable";
import type { Images, Reducers } from "./images.types";
import type { RootModel } from "../index.types";

const state: Images = List([
  Map({ path: "/shoes", name: "/photo_2022-03-07_12-29-40.jpg", alt: "" }),
  Map({ path: "/shoes", name: "/photo_2022-03-07_12-29-44.jpg", alt: "" }),
  Map({ path: "/shoes", name: "/photo_2022-03-07_12-29-58.jpg", alt: "" }),
  Map({ path: "/shoes", name: "/photo_2022-03-07_12-30-04.jpg", alt: "" }),
  Map({ path: "/shoes", name: "/photo_2022-03-07_12-30-16.jpg", alt: "" }),
  Map({ path: "/shoes", name: "/photo_2022-03-07_12-30-29.jpg", alt: "" }),
  Map({ path: "/shoes", name: "/photo_2022-03-07_12-30-32.jpg", alt: "" }),
]);

console.log(state);

console.log(state);

const reducers: Reducers = {
  add(state, payload) {
    return state.push(payload);
  },
};

const effects = (dispatch) => ({
  async fetch(payload, rootState) {
    return await new Promise((resolve) =>
      setTimeout(() => resolve(payload), 1000)
    );
  },
});

const images = createModel<RootModel>()({ state, reducers, effects });

export { images };
