const API_URL = process.env.EXPO_PUBLIC_API_URL

export default async function addPerson(person){
    await fetch(`${API_URL}/person`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true'},
        body: JSON.stringify(person)
    })
}