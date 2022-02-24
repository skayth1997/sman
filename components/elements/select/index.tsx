import ReactSelect from "react-select";
import {
  FunctionComponent,
  useCallback,
  useContext,
  memo,
  useEffect,
  useState,
} from "react";
import { ThemeContext } from "styled-components";
import * as functions from "./functions";
import type {
  ReactDefaultTheme,
  SelectProps,
  SelectState,
} from "../../../lib/types";

const Select: FunctionComponent<SelectProps> = (props) => {
  const { options, isMulti, defaultValue, onChange } = props;
  const themeContext = useContext(ThemeContext);
  const [state, setState] = useState<SelectState>({
    instanceId: undefined,
  });

  useEffect(() => {
    const instanceId = functions.createUniqueId();

    setState({ instanceId });
  }, []);

  const createTheme = useCallback(
    (_: ReactDefaultTheme) => functions.createTheme(_, themeContext),
    [themeContext]
  );

  if (!state.instanceId) {
    return null;
  }

  return (
    <ReactSelect
      instanceId={state.instanceId}
      options={options}
      defaultValue={defaultValue}
      isMulti={isMulti}
      onChange={onChange}
      theme={createTheme}
    />
  );
};

Select.defaultProps = {
  options: [],
  isMulti: false,
};

export default memo(Select);
