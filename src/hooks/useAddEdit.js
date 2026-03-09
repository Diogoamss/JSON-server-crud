import { useState } from "react";
import { Alert } from "react-native";
import addPerson from "../routes/add";
import editPerson from "../routes/edit";

export function useAddEdit(person, navigation) {
    const [firstName, setFirstname] = useState(person?.firstName ?? '')
    const [lastName, setLastname] = useState(person?.lastName ?? '')
    const [email, setEmail] = useState(person?.email ?? '')
    // o "?" e "??" para transformar em string vazia quando for null ou undefined

    
    const isEditing = !!person

    const fieldsAreValid = () => {
        if (!firstName || !lastName || !email){
            Alert.alert('Atenção', 'preencha todos os campos.')
            return false
        }
        return true
    }

    const handleSubimit = () => {
        if (!fieldsAreValid()) return
        const message = isEditing
        ?'Dados serão atualizados para:\n\n${firstName} ${lastName}\n${email}'
        :'Dados a serem adicionados:\n\n${firstName} ${lastName}\n${email}'
        Alert.alert(
            isEditing ? 'editar pessoa' : 'adicionar pessoa',
            message,[
                { text: 'Cancelar'},
                {text: 'salvar', onPress: async() => {
                    isEditing
                    ? await editPerson(person.id, {firstName, lastName, email})
                    : await addPerson({ firstName, lastName , email })
                    navigation.navigate('Home')
                }}
            ]
        )
    }

    return {
        firstName, setFirstname,
        lastName, setLastname,
        email, setEmail,
        isEditing,
        handleSubimit,
    }
}