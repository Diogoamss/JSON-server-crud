import { StyleSheet, Dimensions } from "react-native";

const{height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#bdd1f0",
        alignItems: "center",
        justifyContent: "center",
        height: height, 
        // alignSelf: "center",
    },

    containerLoading: {
        backgroundColor: "#bdd1f0",
        alignItems: "center",
        justifyContent: "center",
        height: height,
    },

    editConteiner: {
        backgroundColor: "#bdd1f0",
        height: height,
        alignItems: "center"
    },
    
    listConteiner: {
        width: "100%",
        height: "50%",
        margin: 40,
        marginBottom: 40,
    },

    title: {
        fontSize: 20,
        fontFamily: "JetBrains Mono",
        fontWeight: "bold",
        marginTop: 8,
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
        alignSelf: "center"
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
        marginBottom: 8,
    },
    
    footer: {
        // position: "absolute",
        backgroundColor: "#abc7f4",
        height: "6%",
        width: "100%",
        bottom: 0,
    },

    header: {
        height: "5.5%",
        width: "100%",
        top: 0,
        backgroundColor: "#abc7f4"
    },
})

export default styles;