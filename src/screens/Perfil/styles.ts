import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
    }, 
    name:{
      fontSize:30,
      fontWeight: "bold"
    },
    sociais:{
      backgroundColor: colors.primary,
      marginBottom: 20,
      flexDirection: "row",
      padding: 10,
      borderRadius: 10
    },
    sociaisText:{
      marginLeft: 5,
    }
})