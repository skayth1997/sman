import { Models } from "@rematch/core";
import { images } from "./images";

export interface RootModel extends Models<RootModel> {
  images: typeof images;
}
