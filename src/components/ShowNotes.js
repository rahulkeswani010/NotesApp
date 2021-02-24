/* eslint-disable no-const-assign */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import "../App.css";

function ShowNotes() {
  const [notes, setNotes] = useState([]);
  const deleteHandler=(id)=>{
    fetch(`http://localhost:3100/notes/${id}`,{
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          const newNotes=notes.filter((note)=>note.id!==id);
          setNotes(newNotes)

        }
      })
  }

  function ShowNotesFetch() {
    fetch("http://localhost:3100/notes")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        setNotes(data);
      });
  }
  useEffect(() => {
    ShowNotesFetch();
  }, []);
  
  

  return (
    <div className="container">

    
    <center>
    <h2 className="m-2">Notes Added</h2>
    </center>
      <div className="row ml-2">

     
      {notes.map((note) => {
        return (
          <div className="col-xs-3  m-3"  key={note.id}>
            <div className="card rounded" style={{width: "18rem"}}>
            <div className="card-body">
              <p className="card-text text-justify" style={{fontSize:"1.2em"}}>{note.text}</p>
              <button className="btn btn-outline-danger float-right" onClick={()=>deleteHandler(note.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
              
            </div>
          
          </div>
           </div>
          
        );
      })}
    </div>
    </div>
  );
}

export default ShowNotes;
