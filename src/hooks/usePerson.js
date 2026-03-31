import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import deletePerson from '../routes/delete.js'
import { Alert } from "react-native";

const API_URL = process.env.EXPO_PUBLIC_API_URL
console.log('URL:', process.env.EXPO_PUBLIC_API_URL);


export function usePerson(){
    const [person, setPerson] = useState([])
    const [search, setSearch] = useState("")
    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(false)

    
    //useFocusEffect executa só quando a tela entra em foco
    useFocusEffect(
        useCallback(() => {loadPerson()}, [])
    )
    
    //async e await pra esperar respostas da api
    const loadPerson = useCallback(async() =>{
        setLoading(true)
        try {
            //faz um fetch para a API 
            const response = await fetch(`${API_URL}/person`, {
                headers: {'ngrok-skip-browser-warning': 'true'}
            });

            //alerta erros de conexão 
            if(!response.ok){
                Alert.alert(
                    'erro',
                    `o servidor retornou um erro: ${response.status}`
                )
                return
            }

            //atualiza setPerson(lista completa) e setFiltered(filtro para pesquisas na searchbar)
            const data = await response.json();
            setPerson(data);
            setFiltered(data);

            //PARA DEBUGGAR
            console.log('dados da api:', JSON.stringify(data)) //para debugar


        }catch (error){
            Alert.alert(
                'erro de conexão',
                'não foi possivel se conectar ao servidor =,(',
                [{ text:'Ok'}]
            )
            console.error(error);
        }finally{
            //finally determina o fim do processamento da API e com ele o setLoading. 
            setLoading(false)
        }
        
    }, []);
    
    const handleDelete = async(id) =>{
        //espera deletar na api antes de recarregar a lista
        setLoading(true)
        await deletePerson(id)
        await loadPerson()
    }


    function handleSearch(texto){
        setSearch(texto)

        //PARA DEBUGAR
        console.log('texto', texto)
        console.log('pessoas', person.length)
        console.log('pessoa 01', JSON.stringify(person[0]))
        //PARA DEBUGAR

        //compara o texto escrito com os campos do bd
        if(texto.trim() === ""){
            setFiltered(person)
            return
        }
        const resultado = person.filter(p =>
            p.firstname?.toLowerCase().trim().includes(texto.toLowerCase()) ||
            p.lastname?.toLowerCase().trim().includes(texto.toLowerCase()) ||
            p.email?.toLowerCase().trim().includes(texto.toLowerCase()) ||
            p.phone?.toLowerCase().trim().includes(texto.toLowerCase())
        )

        setFiltered(resultado)
    }


    return{ person, loadPerson, handleDelete, loading, search, handleSearch, filtered}
}