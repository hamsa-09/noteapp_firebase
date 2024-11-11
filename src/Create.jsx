import React, { useEffect, useState } from 'react';
import './App.css';
import { addDoc, collection} from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const navigate = useNavigate(); 
  const value = collection(db, 'tasks');

  const handleCreate = async (e) => {
    e.preventDefault();
    await addDoc(value, { title: title, note: note });
    setTitle('');
    setNote('');
    navigate('/');
  };

  return (
    <div>
      <div className='head'>
    <h1 >Create Notes</h1>
    </div>
    <div className='Container'>
      <div className='small-container'>
        <form onSubmit={handleCreate}>
        <div className='input-container'>
          <label><b>Title</b></label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /></div>
        <div className='input-container'>
          <label><b>Task</b></label>
       
          <textarea
            type='text'
            rows={5}
            cols={40}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className='btn'>
        <button type='submit'  >
          Submit
        </button>
        </div>
        </form>
      </div>
      </div>
    </div>
  );
}
