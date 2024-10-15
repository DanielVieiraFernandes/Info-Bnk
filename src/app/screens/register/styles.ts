import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.black,
    },
    containerRegister:{
        flex: 1,
        backgroundColor: theme.colors.whiteBackground,
        justifyContent: 'space-around',
        paddingHorizontal: 25,
        borderTopStartRadius: 25,
        borderTopEndRadius:25,
    },
    header:{
        alignItems: 'center'
    },
    main:{
        gap: 10
    },
    containerForm: {
        width: '100%',
        height: 50,
        backgroundColor: theme.colors.grayInput,
    },
    button:{
        width: "50%",
        height: 50,
        borderRadius: 30,
        alignSelf: 'center'
    },
    errorText:{
        color: 'red',
        fontSize: 12,
        fontFamily: theme.fontFamily.medium
    }
})