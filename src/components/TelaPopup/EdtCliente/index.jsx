import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'
import { ThemeProvider } from 'react-bootstrap'

/*import Modal from '@material-ui/core/Modal'*/
import Modal from 'react-modal'

import { Form } from 'reactstrap'
import '../CriarCliente/FormCriar/index.css'
import api from './../../../api'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
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

  function submit() {
    api.put(`cliente/${props.id}`, data).then(response => {
      console.log(response.data)
    })
  }

  const getData = async () => {
    const response = await api.get(`/cliente/${props.id}`)
    setData(response.data)
    console.log(response.data)
    return response.data
  }

  useEffect(() => {
    getData()
  }, [])

  function handle({ target: { name, value } }) {
    setData({ ...data, [name]: value })
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
            <div className="formClinte">
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
            <div className="formClinte">
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
            <div className="formClinte">
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
            <div className="formClinte">
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
            <div className="formClinte">
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
            <Button
              type="submit"
              className="buttonEnviar"
              onClick={handleClose}
              variant="contained"
              color="primary"
            >
              SALVAR
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  )
}

export default EdtCliente
