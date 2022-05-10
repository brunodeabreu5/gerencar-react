import React, { useState, Component } from 'react'

import './index.css'

import adicionarUsuario from '../../../Assets/icons/adicionarUsuario.png'
import Modal from 'react-modal'
import { useNavigate } from 'router-dom'
import { Button, Form } from 'reactstrap'
import api from '../../../api'

function CriarCliente() {
  const history = useNavigate()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [data, setData] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: ''
  })

  function submit(e) {
    e.preventDefault()
    api
      .post('cliente', {
        nome: data.nome,
        endereco: data.endereco,
        email: data.email,
        telefone: data.telefone
      })
      .then(response => {
        console.log(response.data)
        history('/')
      })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)

    console.log(newdata)
  }

  return (
    <>
      <button className="adicionarUsuario" onClick={handleOpen}>
        <img className="addUsuario" src={adicionarUsuario} alt="Editar" />
      </button>
      <Modal isOpen={open} onRequestClose={handleClose}>
        <div className="tela">
          <Button close onClick={handleClose} />
          <h1>Cadastro de Cliente</h1>
          <Form onSubmit={e => submit(e)} className="formBox">
            <div className="formClinte">
              Nome:
              <input
                type="text"
                placeholder="nome"
                onChange={e => handle(e)}
                name="nome"
                value={data.nome}
              ></input>
            </div>
            <div className="formClinte">
              Endereco:
              <input
                type="text"
                placeholder="Endereco"
                onChange={e => handle(e)}
                name="endereco"
                value={data.endereco}
              ></input>
            </div>
            <div className="formClinte">
              Email:
              <input
                type="email"
                placeholder="email"
                onChange={e => handle(e)}
                name="email"
                value={data.email}
              ></input>
            </div>
            <div className="formClinte">
              Telefone:
              <input
                type="tel"
                placeholder="telefone"
                onChange={e => handle(e)}
                name="telefone"
                value={data.telefone}
              ></input>
            </div>
            <button type="submit" className="buttonEnviar">
              SALVAR
            </button>
          </Form>
        </div>
      </Modal>
    </>
  )
}
export default CriarCliente
