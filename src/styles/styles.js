import { StyleSheet, Dimensions } from "react-native";

const{height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bdd1f0",
        alignItems: "center",
        justifyContent: "center"
    },
    
    listConteiner: {
        flex: 1,
        backgroundColor: "#9abdf5",
        width: width*0.5,
        height: "70%",
        marginBottom: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        flex: 1,
        fontSize: 16,
        fontFamily: "JetBrains Mono",
        fontWeight: "bold",
        marginTop: 5,
        textAlign: "center"
    },

    textContainer: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d5dcfc",
        borderRadius: 20,
        width: 350
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
    }


})

export default styles;