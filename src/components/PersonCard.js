import { View, Text, Alert } from "react-native";
import Button from './button.js';
import styles from '../styles/styles.js'
import buttonStyles from '../styles/stylesButton.js'

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
            <Text style={styles.text}>{item.firstName} {item.lastName}</Text>
            <Text style={styles.text}>{item.email}</Text>

            <View style={buttonStyles.buttonContainer}>
                <Button
                    title="Deletar pessoa"
                    onPress={confirmDelete}
                    backgroundColor="#f07d7d"
                />
                <Button
                    title="Editar pessoa"
                    onPress={onEdit}
                    backgroundColor="#b3b477"
                />
            </View>
        </View>
    )
}