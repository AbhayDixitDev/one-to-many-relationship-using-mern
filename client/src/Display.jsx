import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddMoreBook from "./AddMoreBook";
const Display=()=>{
    const navigator=useNavigate();
    const [mydata, setMydata]=useState([]);

    const loadData=()=>{
        let api="http://localhost:8000/books/datadisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    }, [])

    const handlemorebook=(id, name)=>{
        navigator(`/addmorebook/${id}`,  {state: {authname: name}});
    }
    


    const ans=mydata.map(key=>{
        let sr=0;

        return(
            <>
               <tr>
                <td> {key.authername} </td>
                <td> 


                 { 
                 key.books.map(key1=>{
                    

                    return(
                        <>
                           <p> {++sr}) title:  {key1.booktitle}  Price : {key1.price} </p>
                        </>
                    )
                 })}

                </td>
                <td><button onClick={()=>{handlemorebook(key._id, key.authername)}}>Add More Book</button></td>
              
               </tr>
            
            </>
        )
    })
    return(
        <>
          <h1> Display</h1>
          <table border="1">
            <tr>
                <th> Authername</th>
                <th>Detail </th>
                <th>Add More Book</th>
            </tr>
            {ans}
          </table>
        
        </>
    )
}

export default Display;