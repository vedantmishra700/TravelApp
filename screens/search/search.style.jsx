import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles=StyleSheet.create({
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        marginHorizontal:SIZES.small,
        borderColor:COLORS.blue,
        height:50,
        borderWidth:1,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
    },
    input:{
        fontFamily:'regular',
        width:"100%",
        height:"100%",
        paddingHorizontal:11,
    },
    searchWrapper:{
        flex:1,
        marginRight:SIZES.small,
        borderRadius:SIZES.small,
    },
    searchBtn:{
        width:50,
        height:"100%",
        borderRadius:SIZES.small,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.lightBlue,
    },
    searchImage:{
        resizeMode:"contain",
        width:"100%",
        height:SIZES.height/2,
        paddingHorizontal:20,
    },
    tile:{
        marginHorizontal:0,
        marginBottom:10,
    }
})

export default styles;