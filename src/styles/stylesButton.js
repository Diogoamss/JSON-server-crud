import { StyleSheet, Dimensions } from "react-native";
import button from "../components/button";

const{height, width } = Dimensions.get('window')

 const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#44c767',
        borderRadius: 28,
        color: '#ffff',
        fontFamily: 'Arial',
        fontSize: 17,
        padding: 16,
        marginBottom: 15,
        width: width*0.5,
        height: height*0.07,
        alignItems: "center",
        justifyContent: "center"
    },

    buttonDelete: {
        backgroundColor: '#e69090',
        borderRadius: 28,
        color: '#ffff',
        fontFamily: 'Arial',
        fontSize: 17,
        padding: 16,
        marginBottom: 15,
        width: width*0.5,
        height: height*0.07,
        alignItems: "center",
        justifyContent: "center"
    },

    buttonContainer: {
        justifyContent: "center",
        alignContent:"center",
        marginTop: 8,
    },

    buttonEdit: {
        backgroundColor: '#569deb',
        borderRadius: 28,
        color: '#ffff',
        fontFamily: 'Arial',
        fontSize: 17,
        padding: 16,
        marginBottom: 20,
        width: width*0.5,
        height: height*0.07,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default buttonStyles;