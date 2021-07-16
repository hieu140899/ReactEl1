export default  function deleteItem(data) {
    console.log("hihihuhu",data);
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items/' + data
        
        const config = {
            method: 'DELETE'
        }
        
        fetch(url, config)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch((error) => reject(error))
    })
}