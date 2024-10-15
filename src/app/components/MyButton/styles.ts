import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.black
    },
    textBtt:{
        fontFamily: theme.fontFamily.black,
        color: theme.colors.white, 
        textAlign: 'center',
        flexWrap: 'wrap',
        
    }
})