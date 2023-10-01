import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  blue: "#4267B2",
  red: "#EB6A58",
  green: "#449282",
  white: "#FBFBFB",
  lightWhite: "#FFFFFF",
  lightBlue: "#6885C1",
  lightRed: "#EB9C9B",
  lightGreen: "#73ADA1",
  black: "#121212",
  dark: "#3D3A45",
  gray: "#8C8896",
  lightGrey: "#D1CFD5",
};

const SIZES = {
  xSmall: 8,
  small: 10,
  medium: 14,
  large: 18,
  xLarge: 22,
  xxLarge: 42,
  height,
  width,
};

const TEXT = {
  xxSmall: 9,
  xSmall: 11,
  small: 13,
  medium: 15,
  large: 19,
  xLarge: 25,
  xxLarge: 30,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS, TEXT };
