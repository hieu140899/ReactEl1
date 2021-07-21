export default  function callApi() {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items';
        
        const config = {
            method: 'GET',
        }
        fetch(url, config)
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((error) => reject(error))
    })
}