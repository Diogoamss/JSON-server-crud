import { TouchableOpacity, Text } from "react-native";
import buttonStyles from '../styles/stylesButton.js'

export default function ButtonEdit({title, onPress, backgroundColor}) {
    return(
        <TouchableOpacity style={buttonStyles.buttonEdit} onPress={onPress}>
        <Text>{title}</Text>
        </TouchableOpacity>
    )
}