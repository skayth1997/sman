/*************** Select ***************/
type Option = { value: string; label: string };
export type ReactDefaultTheme = {
  borderRadius: number;
  colors: {
    danger: string;
    dangerLight: string;
    neutral0: string;
    neutral5: string;
    neutral10: string;
    neutral20: string;
    neutral30: string;
    neutral40: string;
    neutral50: string;
    neutral60: string;
    neutral70: string;
    neutral80: string;
    neutral90: string;
    primary: string;
    primary25: string;
    primary50: string;
    primary75: string;
  };
  spacing: {
    baseUnit: number;
    controlHeight: number;
    menuGutter: number;
  };
};

export interface SelectProps {
  options: Array<Option>;
  isMulti?: boolean;
  defaultValue?: Option | Array<Option>;
  onChange?: () => void;
}

export interface SelectState {
  instanceId?: number | string;
}

/*************** Input ***************/
export interface InputProps {
  //
}

/*************** Radio ***************/
export interface RadioProps {
  name: string;
  label?: string | { value: string; position: string };
  tabIndex?: number;
  onChange?: () => void;
}

/*************** Checkbox ***************/
export interface CheckboxProps {
  name?: string;
  checked?: boolean;
  onChange?: (e) => void;
  hidden?: boolean;
  label?: string;
}

/*************** List ***************/
export interface ListProps {
  items: Array<string | number>;
}
