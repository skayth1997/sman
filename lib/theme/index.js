import { COLORS } from "../consts";

const theme = {
  input: {
    borderColor: {
      normal: COLORS.neutral[30],
      hover: COLORS.neutral[50],
      focus: COLORS.neutral[70],
      disabled: COLORS.neutral[10],
    },
    color: {
      placeholder: {
        normal: COLORS.neutral[30],
        readOnly: COLORS.neutral[30],
      },
      disabled: COLORS.neutral[30],
      readOnly: COLORS.neutral[90],
    },
    backgroundColor: {
      readOnly: COLORS.neutral[5],
    },
    error: COLORS.red[50],
    icon: {
      color: COLORS.neutral[70],
    },
    label: {
      color: COLORS.neutral[70],
    },
  },
  select: {
    backgroundColor: {
      normal: COLORS.neutral[3],
      hover: COLORS.neutral[10],
      active: COLORS.neutral[10],
    },
    color: {
      normal: COLORS.neutral[90],
      hover: COLORS.neutral[90],
      active: COLORS.neutral[90],
      disabled: COLORS.neutral[30],
    },
    borderColor: {
      normal: COLORS.neutral[30],
      hover: COLORS.neutral[50],
      active: COLORS.neutral[70],
      disabled: COLORS.neutral[10],
    },
    optionList: {
      scrollbar: {
        backgroundColor: COLORS.neutral[30],
      },
    },
  },
  radio: {
    //
  }
};

export default theme;
