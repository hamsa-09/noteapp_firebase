import React, { useEffect, useState } from 'react';
import './App.css';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import{Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Note() {
  const [todo, setTodo] = useState([]);

  const value = collection(db, 'tasks');
  const getData = async () => {
    const dbVal = await getDocs(value);
    setTodo(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete =async(id)=>{
    const delval=doc(db,'tasks',id);
    await deleteDoc(delval);
    setTodo(todo.filter((item)=>item.id!==id))
  }

  return (
    <div style={{position:"relative"}}>
      <div className='header'><h1>Todo-App</h1>
      <Link to="/create" className="icon-link">
      <i className="fa-solid fa-circle-plus"></i>
        </Link></div>
 
        <div className="List">
        {todo.length > 0 ? (
          todo.map((item) => (
            <div key={item.id} className="Notes">
              <h2>{item.title}</h2>
              <p>{item.note}</p>
              <button onClick={() => handleDelete(item.id)} className="delete-btn">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))
        ) : (
          <p className="no-tasks">No tasks available</p>
        )}
      </div>
    </div>
  );
}
