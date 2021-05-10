import React,{useState,useEffect} from 'react';
import axios from 'axios';


const ApiCalling =()=>{
    const [mesagge,setMessage]=useState("Loading...");
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then(res=>{setMessage(res.data.message)})
        .catch(err=>err)
        
    },[]);
    return (
        <div>
            Message from the backend:{mesagge}
        </div>
    )

}
export default ApiCalling;