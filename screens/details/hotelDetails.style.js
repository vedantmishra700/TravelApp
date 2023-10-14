import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    marginHorizontal: 20,
  },
  titleContainer: {
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: COLORS.lightWhite,
    height: 120,
    borderRadius: 20,
  },
  titleColumn: {
    padding: 15,
  },
  bottom: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.lightWhite,
    height: 90,
    paddingVertical: 20,
  },
});

export default styles;
