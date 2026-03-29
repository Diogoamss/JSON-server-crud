import { ActivityIndicator, View, StyleSheet } from "react-native";
import styles from "../styles/styles";

export default function Loading(){
    return(
        <View style={styles.containerLoading}>
            <ActivityIndicator size="large" color="#286bce" />
        </View>
    )
}