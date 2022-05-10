import React, { useState } from 'react'

import './index.css'

import adicionarUsuario from '../../../Assets/icons/adicionarUsuario.png'
import Modal from 'react-modal'

import { Form } from 'reactstrap'
import api from '../../../api'
import Button from '@material-ui/core/Button'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  }
}

const CriarCliente = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [data, setData] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: ''
  })

  const handleSubmit = async () => {
    try {
      const response = await api({
        method: 'post',
        URL: '/cliente',
        data: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  function submit(e) {
    e.preventDefault()
    api.post('/cliente', data).then(response => {
      console.log(response.data)
    })
  }

  return (
    <>
      <Button
        className="adicionarUsuario"
        onClick={handleOpen}
        style={customStyles}
      >
        <img className="addUsuario" src={adicionarUsuario} alt="Editar" />
      </Button>
      <Modal isOpen={open} onRequestClose={handleClose} style={customStyles}>
        <div className="tela">
          <Button close onClick={handleClose} />
          <h1>Cadastro de Cliente</h1>
          <Form onSubmit={handleSubmit} className="formBox">
            <div className="formCliente">
              Nome:
              <input
                type="text"
                placeholder="nome"
                onChange={handleChange}
                name="nome"
                value={data.nome}
              ></input>
            </div>
            <div className="formCliente">
              Endereco:
              <input
                type="text"
                placeholder="Endereco"
                onChange={handleChange}
                name="endereco"
                value={data.endereco}
              ></input>
            </div>
            <div className="formCliente">
              Email:
              <input
                type="email"
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={data.email}
              ></input>
            </div>
            <div className="formCliente">
              Telefone:
              <input
                type="tel"
                placeholder="telefone"
                onChange={handleChange}
                name="telefone"
                value={data.telefone}
              ></input>
            </div>
            <div className="buttonEditar">
              <Button
                type="submit"
                className="buttonEnviar"
                variant="contained"
                color="primary"
              >
                SALVAR
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  )
}
export default CriarCliente
