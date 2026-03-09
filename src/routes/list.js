import { useEffect } from "react"

const API_URL = process.env.EXPO_PUBLIC_API_URL

export default async function listPerson(person){
    return await fetch(`${API_URL}/person`)
        .then(response => response.json())
        .then(data => setPerson(data))
        .catch(error => console.error(error))
            
}
