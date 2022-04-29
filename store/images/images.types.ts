import { List, Map } from "immutable";
import { ModelReducers, RematchRootState } from "@rematch/core";

type Image = Map<string, string>;
type Images = List<Image>;

interface Reducers extends ModelReducers<Images> {
  add: (state, payload) => Images;
}

type Effects = (dispatch) => {
  fetch: (
    payload: string,
    rootState: RematchRootState<any> // RootModel
  ) => Promise<void>;
};

export type { Images, Reducers, Effects };
