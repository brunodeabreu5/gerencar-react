import React, { useState, useEffect } from 'react'

import { Button, Form } from 'reactstrap'
import '../../CriarCliente/FormCriar/index.css'
import { useParams } from 'react-router-dom'
import api from './../../../../api'

function PopEditar() {
  const { id } = useParams()

  /*const history = useNavigate()*/

  const [data, setData] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: ''
  })

  function submit() {
    api.put(`cliente/${id}`, data).then(response => {
      console.log(response.data)
    })
    /*history('/feed')*/
  }

  const getData = async () => {
    const response = await api.get(`contato/${id}`)
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
    <div className="tela">
      <Button close />
      <h1>Editar Cliente</h1>
      <Form onSubmit={submit} className="formBox">
        <div className="formClinte">
          Nome:
          <input
            type="text"
            placeholder="nome"
            onChange={handle}
            name="nome"
            value={data.nome}
          ></input>
        </div>
        <div className="formClinte">
          Endereco:
          <input
            type="text"
            placeholder="Endereco"
            onChange={handle}
            name="endereco"
            value={data.endereco}
          ></input>
        </div>
        <div className="formClinte">
          Email:
          <input
            type="email"
            placeholder="email"
            onChange={handle}
            name="email"
            value={data.email}
          ></input>
        </div>
        <div className="formClinte">
          Telefone:
          <input
            type="tel"
            placeholder="telefone"
            onChange={handle}
            name="telefone"
            value={data.telefone}
          ></input>
        </div>
        <button type="submit" className="buttonEnviar">
          SALVAR
        </button>
      </Form>
    </div>
  )
}
export default PopEditar
