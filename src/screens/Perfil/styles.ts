import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    name:{
        fontSize: 40,
        fontWeight: "bold",
        color: "#2F4F4F"
    },
    sociais:{
        backgroundColor: colors.secondary,
        height: 80,
        width: 250,
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: "row",
        padding: 10,
        borderRadius: 10
    },
    sociaisText:{
        marginLeft: 5,
        color: colors.white
    },
})