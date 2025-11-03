import axios from 'axios'

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
})

//get method
export const getPost = ()=>{
    return api.get("/posts")
}
//post method
export const addDataMethod = (data) => {
    return api.post("/posts",data)
}

//put method
export const updateDataPost = (id,newData) =>{
    return api.put(`/posts/${id}`, newData)
}

//delete mothod
export const deletePost = (id)=>{
    return api.delete(`/posts/${id}`) //deleting specific data based on id
}