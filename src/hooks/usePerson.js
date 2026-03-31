import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import deletePerson from '../routes/delete.js'
import SearchBar from "../components/searchBar.js";

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
            const response = await fetch(`${API_URL}/person`, {
                headers: {'ngrok-skip-browser-warning': 'true'}
            });

            const data = await response.json();
            setPerson(data);

            //PARA DEBUGGAR
            console.log('dados da api:', JSON.stringify(data)) //para debugar


        }catch (error){
            console.error(error);
        }finally{
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

        const resultado = person.filter(p => p.nome.toLowerCase().includes(texto.toLowerCase()))

        setFiltered(resultado)
    }


    return{ person, loadPerson, handleDelete, loading, search, handleSearch, filtered}
}