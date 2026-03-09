const API_URL = process.env.EXPO_PUBLIC_API_URL

export default async function editPerson( id, person){
    await fetch(`${API_URL}/person/${id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true'},
        body: JSON.stringify(person)
    })
}