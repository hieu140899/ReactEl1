export default  function updateItem(update) {
    console.log("hihihuhu111",update);
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items/' + update.itemID
        console.log(url,'log api aaaaaaaa');
        
        const config = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: update.nameAdd})
        }
        
        fetch(url, config)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch((error) => reject(error))
    })
}