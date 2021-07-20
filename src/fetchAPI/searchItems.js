import { LIMIT } from "../constant";

export default function searchItem(data) {
    console.log("fetch api search...", data.activePage);
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items?q=${data.searchName}&_page=${data.activePage}&_limit=${LIMIT}`//cho phep chuyen bien va chuoi
 
        const config = {
            method: 'GET'
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}
