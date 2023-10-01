import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
  },
  titleContainer: {
    margin: 10,
    backgroundColor: COLORS.lightWhite,
    height: 150,

    borderRadius: 20,
  },
  titleColumn: {
    padding: 15,
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
