import { getPost,deletePost} from "../api/PostApi"
import { useEffect, useState } from "react"
import {Form} from './Form.jsx'

export const Posts = ()=>{

    const [data,setData] = useState([])
    const [updateData,setUpdateData] = useState({})

    const getPostData = async()=>{
    const response = await getPost() 
    setData(response.data)
  }
    useEffect(()=>{ 
    getPostData()
  },[])

  const handleDelete = async(id)=>{  
    const res = await deletePost(id)
    if(res.status === 200){
       const updatedData = data.filter((currElement)=>{
        return currElement.id !== id
       })
       setData(updatedData)
    }
  }
  const handleEdit = (currData)=>{
    const res =  setUpdateData(currData)

  }
  
  return (
    <>
    <section className="section-form">
    <Form 
    data={data} 
    setData={setData} 
    updateData={updateData} 
    setUpdateData={setUpdateData}
    />
  </section>
    <section className="section-post">
    <ul>
      {data.map((currElement) => {
        const { id, body, title } = currElement;
        return (
          <li key={id}>
            <p>{id}. Title: {title}</p>
            <p>Body: {body}</p>
            <button onClick={()=>handleEdit(currElement)}>Edit</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  </section>
  </>
)}
