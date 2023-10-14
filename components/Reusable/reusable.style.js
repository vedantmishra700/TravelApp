import { StyleSheet } from "react-native";

const reusable = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 2,
  },
  rowWithSpace: (justifyContent) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent,
  }),
});

export default reusable;
