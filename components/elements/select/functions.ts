import type { ReactDefaultTheme } from "../../../lib/types";

const createTheme = (_: ReactDefaultTheme, themeContext) => ({
  ..._,
  colors: {
    ..._.colors,
    primary: themeContext.select.borderColor.normal,
  },
});

let id = 1;
const createUniqueId = () => {
  return id++;
};

export { createTheme, createUniqueId };
