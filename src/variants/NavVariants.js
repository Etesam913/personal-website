import {lightTheme, darkTheme} from "components/themes";

export const xVariantsLight = {
  hidden: index => ({
    opacity: 0,
    x: (index + 1) * -30
  }),
  show: {
    color: lightTheme.colors.secondary,
    opacity: 1,
    x: 0
  },
  grayed: {
    color: lightTheme.colors.mainGray,
    opacity: 1,
    x: 0
  }
};

export const yVariantsLight = {
  hidden: index => ({
    opacity: 0,
    y: (index + 1) * -10
  }),
  show: {
    color: lightTheme.colors.secondary,
    opacity: 1,
    y: 0
  },
  grayed: {
    color: lightTheme.colors.mainGray,
    opacity: 1,
    y: 0
  }
};

export const xVariantsDark = {
  hidden: index => ({
    opacity: 0,
    x: (index + 1) * -30
  }),
  show: {
    color: darkTheme.colors.secondary,
    opacity: 1,
    x: 0
  },
  grayed: {
    color: darkTheme.colors.mainGray,
    opacity: 1,
    x: 0
  }
};

export const yVariantsDark = {
  hidden: index => ({
    opacity: 0,
    y: (index + 1) * -10
  }),
  show: {
    color: darkTheme.colors.secondary,
    opacity: 1,
    y: 0
  },
  grayed: {
    color: darkTheme.colors.mainGray,
    opacity: 1,
    y: 0
  }
};
