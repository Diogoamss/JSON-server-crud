import react from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from 'react-native';

import styles from '../styles/styles'
import buttonStyles from '../styles/stylesButton';
import  addPerson  from '../routes/add';
import  editPerson  from '../routes/edit';
import Button from '../components/button.js'
import ButtonDelete from "../components/buttonDelete.js";

export default function AddEditScreen({ navigation, route}){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const person = route.params?.person;

    useEffect(() =>{
        if(person){
            setFirstname(person.firstname || '')
            setLastname(person.lastname || '')
            setEmail(person.email || '')
        }
    }, [person])

    const handleAdd = () => {
        if(!firstname || !lastname || !email) {
            alert('Preencha todos os campos')
            return;
        }
        addPerson({ firstname, lastname, email});
        navigation.goBack();
    };

    const handleEdit = () => {
        editPerson(person.id, { firstname, lastname, email});
        navigation.goBack();
    }

    return(
        <View style={styles.editConteiner}>
            <View style={styles.header}/>
            <Text style={styles.title}>{person ? 'editar pessoa' : 'adicionar pessoa'}</Text>
            <View style={styles.textContainer}>
                <TextInput style={styles.input} placeholder="First Name" value={firstname} onChangeText={setFirstname}/>
                <TextInput style={styles.input} placeholder="Last Name" value={lastname} onChangeText={setLastname}/>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
            <View style={buttonStyles.buttonContainer}>
                <Button title={person ? 'Salvar alterações' : 'Adicionar pessoa'} onPress={person ? handleEdit : handleAdd}/>
                <ButtonDelete title="Fechar" onPress={() => navigation.goBack()}/>
            </View>
            </View>
        </View>
    );
}