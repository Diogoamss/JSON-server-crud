import { TouchableOpacity, Text } from "react-native";
import buttonStyles from '../styles/stylesButton.js'

export default function button({title, onPress, backgroundColor}) {
    return(
        <TouchableOpacity style={[buttonStyles.button, { backgroundColor }]} onPress={onPress}>
        <Text>{title}</Text>
        </TouchableOpacity>
    )
}