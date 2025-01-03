import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const AddMoreBook=( props)=>{
    const {id}=useParams();
    const location = useLocation();
    const {authname} = location.state;
    const navigator=useNavigate();
    const [input, setInput] =useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
    }

    

    const handleSubmit=()=>{
     let api="http://localhost:8000/books/addmoresave";
     axios.post(api, {authid:id, ...input}).then((res)=>{
        alert("Data save!!!");
     })
    }

  

    return(
        <>
          <h1> Welcome {authname}, Here you can add more book 

          </h1>
        
          Enter Book Title : <input type="text" name="booktitle" 
          value={input.booktitle}  onChange={handleInput}/>
          <br/>
          Enter Price : <input type="text" name="bookprice"
          value={input.bookprice}  onChange={handleInput}/>
          <br/>
          <button onClick={handleSubmit}>Save!</button>
        </>
    )
        
    
    
}

export default AddMoreBook;