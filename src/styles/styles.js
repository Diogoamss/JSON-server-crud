import { StyleSheet, Dimensions } from "react-native";

const{height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#bdd1f0",
        alignItems: "center",
        justifyContent: "center",
        height: height 
        // alignSelf: "center",
    },
    
    listConteiner: {
        width: "100%",
        height: "50%",
        margin: 30,
        marginBottom: 40,
        backgroundColor: "#000"
    },

    title: {
        fontSize: 16,
        fontFamily: "JetBrains Mono",
        fontWeight: "bold",
        marginTop: 5,
        textAlign: "center",
    },

    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d5dcfc",
        borderRadius: 20,
        width: 350,
        padding: 20,
        marginTop: 20,
    },

    text: {
        flex: 1,
        fontSize: 15,
        fontFamily: "JetBrains Mono",
        fontWeight: "bold",
        padding: 5,
    },

    input: {
        textAlign: "center",
    },
    
    footer: {
        // position: "absolute",
        backgroundColor: "#abc7f4",
        height: "17%",
        width: "100%",
        bottom: 0,
    },
})

export default styles;