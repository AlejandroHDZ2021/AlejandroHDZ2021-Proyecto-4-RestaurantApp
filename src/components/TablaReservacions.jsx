
import React, { useState, useEffect } from 'react'
import Reservacions from './Reservacions'
import Table from 'react-bootstrap/Table';
import FooterApp from './FooterApp'
import Menu from './Menu'
import {
  onSnapshot,
  collection,
} from 'firebase/firestore'
import { db } from '../firebase'


import '../App.css';

const Form = () => {
  const [reservas, setTodos] = useState([])

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
  useEffect(() => {
    getData()

  }, [])

  return (
    <div className="App">

      <div className="App-header">
        <div>
          <Menu />
          <div>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Mensaje</th>
                </tr>
              </thead>

            </Table>
          </div>

          {
            reservas.map((reserva, index) => {


              return (
                <div>
                  <Reservacions reserva={reserva} key={index} />
          

                </div>


              )
            })
          }
             <FooterApp />
        </div>
      </div>
    </div>
  );
}

export default Form;