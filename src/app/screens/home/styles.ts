import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
    },
    textAuth: {
        textAlign: 'center',
        fontFamily: theme.fontFamily.medium,
        fontSize: 20,
        
    },
    button:{
        width: '50%',
        alignSelf: 'center',
        height: 50,
        borderRadius: 30,
    },
    contain:{
        flex: 1,
        justifyContent: 'center'
    }
})