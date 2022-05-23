import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'

import Modal from 'react-modal'
import '../../TelaPopup/TelaStatus/index.css'
import { Form } from 'reactstrap'
import api from './../../../api'
import '../../TelaPopup/CriarCliente/index.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '3%',
    width: '50%'
  }
}

function EdtCliente(props) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [data, setData] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: ''
  })

  const getData = async () => {
    const response = await api.get(`/cliente/${props.id}`)
    setData(response.data)
    console.log(response.data)
    return response.data
  }

  const handle = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    getData()
  }, [])

  function submit() {
    api.put(`cliente/${props.id}`, data).then(response => {
      console.log(response.data)
      handleClose()
    })
  }
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Editar
      </Button>
      <Modal isOpen={open} onRequestClose={handleClose} style={customStyles}>
        <div className="tela">
          <h1>Editar Cliente</h1>
          <Form onSubmit={submit} className="formBox">
            <div className="formCliente">
              Id:
              <input
                type="text"
                disabled
                name="id"
                placeholder="id"
                id="id"
                value={props.id}
              ></input>
            </div>
            <div className="formCliente">
              Nome:
              <input
                type="text"
                placeholder="nome"
                onChange={handle}
                name="nome"
                value={data.nome}
                id="nome"
              ></input>
            </div>
            <div className="formCliente">
              Endereco:
              <input
                type="text"
                onChange={handle}
                value={data.endereco}
                id="endereco"
                name="endereco"
                placeholder="endereco"
              ></input>
            </div>
            <div className="formCliente">
              Email:
              <input
                type="text"
                onChange={handle}
                value={data.email}
                id="email"
                name="email"
                placeholder="email"
              ></input>
            </div>
            <div className="formCliente">
              Telefone:
              <input
                type="tel"
                onChange={handle}
                value={data.telefone}
                id="telefone"
                name="telefone"
                placeholder="telefone"
              ></input>
            </div>
            <div className="buttonEditar">
              <Button
                type="submit"
                className="buttonEnviar"
                variant="contained"
                color="primary"
              >
                Alterar
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  )
}

export default EdtCliente
