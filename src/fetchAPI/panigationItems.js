import { LIMIT } from "../constant";

export default function paginationItem(page) {
    console.log("fetch api pagination...", page);
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items?_page=${page}&_limit=${LIMIT}`
        const config = {
            method: 'GET'
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}