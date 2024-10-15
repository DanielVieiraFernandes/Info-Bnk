import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    txtInput:{
        flex: 1,
        paddingHorizontal: 25,
        color: theme.colors.black,
        fontFamily: theme.fontFamily.regular,
    }
})