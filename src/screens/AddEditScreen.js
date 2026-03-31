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
    const [phone, setPhone] = useState('');

    const person = route.params?.person; //recebe os dados da navegação

    //se os dados de person já estiverem preenchidos abre no "modo edição"
    //se for udefined ele não preenche os campos da tela no "modo adição"
    useEffect(() =>{
        if(person){
            setFirstname(person.firstname || '')
            setLastname(person.lastname || '')
            setEmail(person.email || '')
            setPhone(person.phone || '')
        }
    }, [person])

    const handleAdd = () => {
        //se os valor dos campos estiverem em branco passa um alert
        if(!firstname || !lastname || !email || !phone) {
            alert('Preencha todos os campos')
            return;
        }
        addPerson({ firstname, lastname, email, phone}); // chama a função com a rota /person POST 
        navigation.goBack();
    };

    const handleEdit = () => {
        if(!firstname || !lastname || !email || !phone) {
            alert('Preencha todos os campos')
            return;
        }
        editPerson(person.id, { firstname, lastname, email, phone}); // chama a função com a rota /person${id} PUT
        navigation.goBack();
    }

    //botão muda de salvar para adcionar dependendo do "modo"
    return(
        <View style={styles.editConteiner}>
            <View style={styles.header}/>
            <Text style={styles.title}>{person ? 'editar pessoa' : 'adicionar pessoa'}</Text>
            <View style={styles.textContainer}>
                <TextInput style={styles.input} placeholder="First Name" value={firstname} onChangeText={setFirstname}/>
                <TextInput style={styles.input} placeholder="Last Name" value={lastname} onChangeText={setLastname}/>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad"/>
            <View style={buttonStyles.buttonContainer}>
                <Button title={person ? 'Salvar alterações' : 'Adicionar pessoa'} onPress={person ? handleEdit : handleAdd}/> 
                <ButtonDelete title="Fechar" onPress={() => navigation.goBack()}/>
            </View>
            </View>
        </View>
    );
}