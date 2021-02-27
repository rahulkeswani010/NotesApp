/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";

function AddNotes() {
  const [text,setText]=useState('');
  const notesDetails={
    text,
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    fetch("http://localhost:3100/notes",{
      method:'POST',
      headers :{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(notesDetails),
    })
    .then((res)=>{
      if(res.ok)
        return res.json();
    })
    .then((data)=>{
      setText('');
    })
  }
const style={
  fontSize:"1.2rem",
}
  return (
    <form onSubmit={e=>submitHandler(e)}>
    <div className="form-group">
      <p className="text-justify m-3" style={style}>Enter the Notes</p>
    <textarea className="form-control w-50 m-3" style={style} id="exampleFormControlTextarea1" rows="3" onChange={e=>setText(e.target.value)} value={text}></textarea>
    <button className="btn btn-success m-3">Add Notes</button>
  </div>
  </form>
  );
}

export default AddNotes;
