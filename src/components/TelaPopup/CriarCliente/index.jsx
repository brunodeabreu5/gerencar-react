import React, { useState, Component } from 'react'

import './index.css'

import adicionarUsuario from '../../../Assets/icons/adicionarUsuario.png'
import Modal from 'react-modal'

import { Button, Form } from 'reactstrap'
import './index.css'
import api from '../../../api'

function CriarCliente() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [data, setData] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: ''
  })

  const handleSubmit = event => {}

  return (
    <>
      <button className="adicionarUsuario" onClick={handleOpen}>
        <img className="addUsuario" src={adicionarUsuario} alt="Editar" />
      </button>
      <Modal isOpen={open} onRequestClose={handleClose}>
        <div className="tela">
          <Button close onClick={handleClose} />
          <h1>Cadastro de Cliente</h1>
          <Form onSubmit={this.submitHandler} className="formBox">
            <div className="formClinte">
              Nome:
              <input
                type="text"
                placeholder="nome"
                onChange={data.nome}
                name="nome"
                value={nome}
              ></input>
            </div>
            <div className="formClinte">
              Endereco:
              <input
                type="text"
                placeholder="Endereco"
                onChange={data.endereco}
                name="endereco"
                value={endereco}
              ></input>
            </div>
            <div className="formClinte">
              Email:
              <input
                type="email"
                placeholder="email"
                onChange={data.email}
                name="email"
                value={email}
              ></input>
            </div>
            <div className="formClinte">
              Telefone:
              <input
                type="tel"
                placeholder="telefone"
                onChange={data.telefone}
                name="telefone"
                value={telefone}
              ></input>
            </div>
            <button
              type="submit"
              className="buttonEnviar"
              onClick={createCliente}
            >
              SALVAR
            </button>
          </Form>
        </div>
      </Modal>
    </>
  )
}
export default CriarCliente
