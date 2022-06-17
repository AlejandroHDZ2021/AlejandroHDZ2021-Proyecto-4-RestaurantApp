import React, { useState, useEffect } from 'react'

import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../firebase'

























{/* 
import '../App.css';

const Form = () => {
  const [reservas, setTodos] = useState([])
  const [form, setForm] = useState({})

  const getData = () => {
    const todosArr = [];

    onSnapshot(collection(db, 'reservas'), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        todosArr.push({
          ...doc.data(),
          id: doc.id
        })
        console.log(todosArr)
        setTodos(todosArr)
      })
    })
  }
  const handleChange = (ev) => {
    const date = new Date(Date.now())
    setForm({
      ...form,
      date: date
    })
    console.log(form)
  }
  const handleClick = async () => {
    await addDoc(collection(db, 'reservas'), form)
    setForm({})
    getData()
  }
  const deleteElement = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, 'reservas', id));
    getData();
  }


  useEffect(() => {
    getData()
 
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Reserva con nosotros
        </h1>
        <div>
          <input type="text" placeholder="nombre" name="nombre" onChange={(e) => handleChange(e.target)} />
          <input type="email" placeholder="email" name="email" onChange={(e) => handleChange(e.target)} />
          <button onClick={() => handleClick()}>Guardar</button>
        </div>
        <div>
          {
            reservas.map(reserva => {
              return (
                <div key={reserva.id}>
                  <h3>{reserva.nombre}</h3>
                  <p>{reserva.email}</p>
                  <button onClick={() => deleteElement(reserva.id)}>
                    Eliminar
                  </button>
                
                  </div>
                
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Form;

*/}