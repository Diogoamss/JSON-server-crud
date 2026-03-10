import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import deletePerson from '../routes/delete.js'


const API_URL = process.env.EXPO_PUBLIC_API_URL
console.log('URL:', process.env.EXPO_PUBLIC_API_URL);


export function usePerson(){
    const [person, setPerson] = useState([])

    //useFocusEffect executa só quando a tela entra em foco
    useFocusEffect(
        useCallback(() => {loadPerson()}, [])
    )

    //async e await pra esperar respostas da api
    const loadPerson = useCallback(async() =>{
        try {
            const response = await fetch(`${API_URL}/person`, {
                headers: {'ngrok-skip-browser-warning': 'true'}
            });

            const data = await response.json();
            setPerson(data);
            console.log('dados da api:', JSON.stringify(data)) //para debugar
        }catch (error){
            console.error(error);
        }
    }, []);

    const handleDelete = async(id) =>{
        //espera deletar na api antes de recarregar a lista
        await deletePerson(id)
        loadPerson()
    }
    return{ person, loadPerson, handleDelete}
}