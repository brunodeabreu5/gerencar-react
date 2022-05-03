import React, { Fragment, useState } from 'react'
import { Button, Form } from 'reactstrap'
import './index.css'

function FormCriar() {

  const [datos, setDatos] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: ''
  })

  const handleInputChange = event => {
    console.log(event.target.name)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = event => {
    event.preventDefault()
    console.log('enviando dados... '+ datos.name+' '+datos.endereco+' '+datos.email+' '+datos.telefone)
  }

  return (
    <div className="tela">
      <Fragment>
      <Button close />
      <h1>Cadastro de Cliente</h1>
      <Form onSubmit={enviarDatos} className="formBox">
        <div className="formClinte">
          Nome: 
          <input
            type="text"
            placeholder="nome"
            onChange={handleInputChange}
            name="name"
          ></input>
        </div>

        <div className="formClinte">
        Endereco:  
          <input
            type="text"
            placeholder="Endereco"
            onChange={handleInputChange}
            name="endereco"
          ></input>
        </div>
        <div className="formClinte">
          Email:
          <input
            type="email"
            placeholder="email"
            onChange={handleInputChange}
            name="email"
          ></input>
          </div>
          <div className="formClinte">
            Telefone:
            <input
              type="tel"
              placeholder="telefone"
              onChange={handleInputChange}
              name="telefone"
            ></input>
          </div>
          <button type="submit" className="buttonEnviar">SALVAR</button>
      </Form>
      </Fragment>
    </div>
  )
}
export default FormCriar
