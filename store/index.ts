import { init } from "@rematch/core";
import { images } from "./images";
import { RootModel } from "./index.types";

const models: RootModel = { images };

const store = init({ models });

export default store;
