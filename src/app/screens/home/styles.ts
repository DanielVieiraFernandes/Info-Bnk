import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around'
    },
    textAuth: {
        textAlign: 'center',
        fontFamily: theme.fontFamily.bold,
        fontSize: 20,
        
    },
    button:{
        width: '50%',
        alignSelf: 'center',
        height: 50,
        borderRadius: 30,
    },
    txtContain:{
        alignItems: 'center'
    }
})