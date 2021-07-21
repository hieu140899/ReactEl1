export default function searchItem(data) {
    console.log("fetch api search...", data);
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items?q=${data.searchName}`
        const config = {
            method: 'GET'
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}
