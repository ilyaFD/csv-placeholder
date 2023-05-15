import { getPosts } from "./posts"

const API_URL = "https://jsonplaceholder.typicode.com"

const getDataObject = () => {
    return {
        data: [],
        error: ""
    }
}

export {getPosts, getDataObject, API_URL}