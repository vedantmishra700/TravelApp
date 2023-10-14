import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const styles=StyleSheet.create({
    profile:{
        position:"absolute",
        left:0,
        right:0,
        top:90,
        alignItems:"center",
    },
    image:{
        resizeMode:"cover",
        width:100,
        height:100,
        borderColor:COLORS.lightWhite,
        borderWidth:2,
        borderRadius:90,
    },
    name:{
        backgroundColor:COLORS.lightGrey,
        borderRadius:12,
        padding:5,
    }
})

export default styles