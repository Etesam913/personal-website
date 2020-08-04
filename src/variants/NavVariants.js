import {theme} from "../components/themes";
export const xVariants = {
  hidden: index => ({
    opacity: 0,
    x: (index + 1) * -30
  }),
  show: {
    color: theme.colors.mainBlack,
    opacity: 1,
    x: 0
  },
  grayed: {
    color: theme.colors.mainGray,
    opacity: 1,
    x: 0
  }
};

export const yVariants = {
  hidden: index => ({
    opacity: 0,
    y: (index + 1) * -10
  }),
  show: {
    color: theme.colors.mainBlack,
    opacity: 1,
    y: 0
  },
  grayed: {
    color: theme.colors.mainGray,
    opacity: 1,
    y: 0
  }
};