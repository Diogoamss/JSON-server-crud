import { useState } from "react";
import { Alert } from "react-native";
import addPerson from "../routes/add";
import editPerson from "../routes/edit";

export function useAddEdit(person, navigation) {
    const [firstName, setFirstname] = useState(person?.firstName ?? '')
    const [lastName, setLastname] = useState(person?.lastName ?? '')
    const [email, setEmail] = useState(person?.email ?? '')
    const [phone, setPhone] = useState(person?.phone ?? '')
    // o "?" e "??" para transformar em string vazia quando for null ou undefined


    //os !! duplos faz person virar booleano, se for null ou undefined = false caso contrario true
    const isEditing = !!person

    //verifica se os campos foram preenchidos
    const fieldsAreValid = () => {
        if (!firstName || !lastName || !email || !phone){
            Alert.alert('Atenção', 'preencha todos os campos.')
            return false
        }
        return true
    }

    //valida os campos depois passa um alert com botões para cancelar e salvar.
    // ao confirmar chama a rota correta (editPerson ou addPerson)
    const handleSubimit = () => {
        if (!fieldsAreValid()) return
        const message = isEditing
        ?'Dados serão atualizados para:\n\n${firstName} ${lastName}\n${email} ${phone}'
        :'Dados a serem adicionados:\n\n${firstName} ${lastName}\n${email} ${phone}'
        Alert.alert(
            isEditing ? 'editar pessoa' : 'adicionar pessoa',
            message,[
                { text: 'Cancelar'},
                {text: 'salvar', onPress: async() => {
                    isEditing
                    ? await editPerson(person.id, {firstName, lastName, email, phone})
                    : await addPerson({ firstName, lastName , email, phone })
                    navigation.navigate('Home')
                }}
            ]
        )
    }

    return {
        firstName, setFirstname,
        lastName, setLastname,
        email, setEmail,
        phone, setPhone,
        isEditing,
        handleSubimit,
    }
}