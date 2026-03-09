const API_URL = process.env.EXPO_PUBLIC_API_URL

export default async function deletePerson( id ){
    await fetch(`${API_URL}/person/${id}`,{
        method: 'DELETE',
        headers: {
            'ngrok-skip-browser-warning': 'true'
        }
    })
}