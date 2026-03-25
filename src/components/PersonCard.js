import { View, Text, Alert } from "react-native";
import Button from './button.js';
import styles from '../styles/styles.js'
import buttonStyles from '../styles/stylesButton.js'
import ButtonDelete from "./buttonDelete.js";
import ButtonEdit from "./buttonEdit.js";

export default function PersonCard({ item, onDelete, onEdit}){

    const confirmDelete = () =>{
        Alert.alert(
            'deletar pessoa',
            'você tem certeza de que deseja deletar esta pessoa',
            [
                {text: 'Cancel'},
                { text: 'Delete', onPress: onDelete}
            ]
        )        
    }

    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.firstname} {item.lastname}</Text>
            <Text style={styles.text}>{item.email}</Text>

            <View style={buttonStyles.buttonContainer}>
                <ButtonEdit
                    title="Editar pessoa"
                    onPress={onEdit}
                    style={buttonStyles.buttonEdit}
                />
                <ButtonDelete
                    title="Deletar pessoa"
                    onPress={confirmDelete}
                    style={buttonStyles.buttonDelete}
                />
            </View>
        </View>
    )
}