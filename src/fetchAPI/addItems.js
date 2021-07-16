export default  function addItem(data) {
    console.log("data in SAGA to API", data);
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items'
        const nameadd = {
            name:data.payload.nameAdd
        }
        const config = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nameadd)
        }
        
        fetch(url, config)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch((error) => reject(error))
    })
}