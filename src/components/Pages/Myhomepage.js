import React from "react";
import {useState,useRef} from "react";
import {useNavigate} from "react-router-dom";

export default function Homepage(){
const [QueryData, setQueryData] = useState([]);// use to have the chat type property at final.
  const InputRef=useRef(null);
  const[MyQuery,SetMyQuery]=useState(""); //use to get the final string 
  
  const navigate=useNavigate();
const query=(e)=>{
   SetMyQuery(e.target.value);
   console.log("at end Query becomes ",MyQuery);
}
const QuerySubmitForm=(e)=>{
    e.preventDefault();
    InputRef.current.value="";   
    setQueryData((pre)=>{
    let new_Array=[...pre];
    new_Array.push(MyQuery); 
    return new_Array;
   }) 
  }
    return(
        <>
        <form onSubmit={QuerySubmitForm}>
  <div
    className="input-group shadow-sm rounded-pill"
    style={{ maxWidth: "600px", width: "100%", margin: "0 auto" }}
  >
    <input
      type="text"
      ref={InputRef}
      className="form-control border-0 rounded-start-pill px-4"
      placeholder="Ask something…"
      name="input"
      autoComplete="false"
      autoFocus="true"
      onChange={query}
    />

    <button className="btn btn-primary rounded-end-pill px-4" type="submit">
    </button>
  </div>
  </form>
        </>
    )
}
