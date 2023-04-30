export const getData = async (URL) => {
    const response = await fetch(URL);
    
    if (response.ok) {
        return response.json()
    }

}