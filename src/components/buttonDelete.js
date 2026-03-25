import { TouchableOpacity, Text } from "react-native";
import buttonStyles from '../styles/stylesButton.js'

export default function ButtonDelete({title, onPress, backgroundColor}) {
    return(
        <TouchableOpacity style={buttonStyles.buttonDelete} onPress={onPress}>
        <Text>{title}</Text>
        </TouchableOpacity>
    )
}