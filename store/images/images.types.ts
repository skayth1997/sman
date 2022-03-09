import { List, Map } from "immutable";
import { ModelReducers, RematchRootState } from "@rematch/core";
import { RootModel } from "../index.types";

type Image = Map<string, string>;
type Images = List<Image>;

interface Reducers extends ModelReducers<Images> {
  add: (state, payload) => Images;
}

type Effects = (dispatch) => {
  fetch: (
    payload: string,
    rootState: RematchRootState<RootModel>
  ) => Promise<void>;
};

export type { Images, Reducers, Effects };
