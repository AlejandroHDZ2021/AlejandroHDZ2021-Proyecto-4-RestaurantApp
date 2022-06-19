import React, { useState, useEffect } from 'react'
import { collection,addDoc } from 'firebase/firestore'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { db } from '../firebase'


import '../App.css';

const Formulario = () => {
  const [form, setForm] = useState({})


  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.name]: ev.value

    })
    console.log(form)
  }
  const handleClick = async () => {
    await addDoc(collection(db, 'reservas'), form)
    setForm({})
  }



  useEffect(() => {
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Reserva con nosotros
        </h1>
        <div>
        
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingese su nombre" name="nombre" onChange={(e) => handleChange(e.target)} />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingese su email" name="email" onChange={(e) => handleChange(e.target)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control type= "text" placeholder="Ingese su mensaje" name="mensaje" onChange={(e) => handleChange(e.target)}/>
            </Form.Group>
            <Button onClick={() => handleClick()} variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;

