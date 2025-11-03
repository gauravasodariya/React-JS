import { useEffect, useState } from "react";
import { addDataMethod, updateDataPost } from "../api/PostApi";

export const Form=({data,setData,updateData,setUpdateData}) => {
  const [addData, setAddData] = useState({
    title: "",
    body: ""
  });

  const handleAdd = (e) => {
    const { name, value } = e.target;
    setAddData({
      ...addData,
      [name]: value
    });
  };

  useEffect(() => {
    if (updateData.title && updateData.body) {
      setAddData({ 
        title: updateData.title,
        body: updateData.body
      });
    }
    }, [updateData]);

  const isEmpty=Object.keys(updateData).length === 0;

  const addPostData = async() => {
    const res = await addDataMethod(addData);
    if(res.status === 201){
      alert("Data added successfully");
        setData([...data, res.data]);
        setAddData({ title: "", body: "" });
    }
  }
    const updatePostData = async() => {
        const res = await updateDataPost(updateData.id, addData);
        if(res.status === 200){
            alert("Data updated successfully");
            setAddData({ title: "", body: "" });
            setUpdateData({});
        }
        setData((data)=>{
            return data.map((currElement)=>{
                return currElement.id === updateData.id ? res.data : currElement
            })
        })
    }
            
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if(action === "Add"){
        addPostData()
    } 
    else if(action === "Update"){
        updatePostData()
    }
}
  return (
    <form onSubmit={handleFormSubmit}>
    <div className="add-post">
      <input
        type="text"
        placeholder="Enter Title"
        name="title"
        value={addData.title}
        onChange={handleAdd}
      />
      <input
        type="text"
        placeholder="Enter Body"
        name="body"
        value={addData.body}
        onChange={handleAdd}
      />
      <button id="btn" value={isEmpty ? "Add" : "Update" }>{isEmpty ? "Add" : "Update"}</button>
    </div>
    </form>
  )}
