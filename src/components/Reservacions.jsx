import React from 'react'
import Table from 'react-bootstrap/Table';

const Reservacions = ({reserva}) => {
  return (
    <div>

    <Table responsive striped bordered hover variant="dark">
      
      <tbody>
        <tr>
          <td>{reserva.nombre}</td>
          <td>{reserva.email}</td>
          <td>{reserva.mensaje}</td>
        </tr>
      </tbody>
    </Table>
    </div>
    
  )
}

export default Reservacions