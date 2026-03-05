import react from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput } from 'react-native';
import { Button } from "react-native-web";

export default function AddEditScreen({ navigaiton, route}){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const person = route.params?.person;
    const handleAdd = () => {
        if(!firstname || !lastname || !email) {
            alert('Preencha todos os campos')
            return;
        }
        newPerson({ firstname, lastname, email});
        navigaiton.goBack();
    };

    const handleEdit = () => {
        editPerson(person.id, { firstname, lastname, email});
        navigaiton.goBack();
    }

    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>{person ? 'edit person' : 'add person'}</Text>
            <TextInput style={styles.input} placeholder="First Name" value={firstname} onChangeText={setFirstname}/>
            <TextInput style={styles.input} placeholder="Last Name" value={lastname} onChangeText={setLastname}/>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
            <View style={buttonStyles.buttons}>
                <Button title={person ? 'Save person' : 'Add person'} onPress={person ? handleEdit : handleAdd}/>
                <Button title="Fechar" onPress={() => navigaiton.goBack()}/>
            </View>
        </View>
    );
}