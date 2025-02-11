import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: '100%',
        height: '100%',
    },
    paragraph: {
        fontSize: 18,
        textAlign: "center",
    },
    searchContaiinerOrigin: {
        position: 'absolute',
        zIndex: 2,
        width: '90%',
        top: 10
    },
    searchContainerDestination: {
        position: 'absolute',
        zIndex: 1,
        width: '90%',
        top: 70
    },
    searchInput: {
        height: 56,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: colors.third
    }
});