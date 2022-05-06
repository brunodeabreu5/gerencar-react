import React, { Fragment, useState, Component } from 'react'
import { Button, Form } from 'reactstrap'
import './index.css'
<<<<<<< HEAD
import api from '../../../../api'
import { responsiveFontSizes } from '@material-ui/core'

class FormCriar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      endereco: '',
      email: '',
      telefone: ''
    }
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    api
      .post('http://localhost:8080/cliente', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { nome, endereco, email, telefone } = this.state
    return (
      <div className="tela">
        <Button close />
        <h1>Cadastro de Cliente</h1>
        <Form onSubmit={this.submitHandler} className="formBox">
          <div className="formClinte">
            Nome:
            <input
              type="text"
              placeholder="nome"
              onChange={this.changeHandler}
              name="nome"
              value={nome}
            ></input>
          </div>
          <div className="formClinte">
            Endereco:
            <input
              type="text"
              placeholder="Endereco"
              onChange={this.changeHandler}
              name="endereco"
              value={endereco}
            ></input>
          </div>
          <div className="formClinte">
            Email:
            <input
              type="email"
              placeholder="email"
              onChange={this.changeHandler}
              name="email"
              value={email}
            ></input>
=======
import api from "../../../../api";
import { responsiveFontSizes } from '@material-ui/core';

class FormCriar extends Component{
  constructor(props) {
    super(props);

    this.state = {
        nome: '',
        endereco: '',
        email: '',
        telefone: ''
    };
}
changeHandler = (e) =>{
  this.setState({[e.target.name]:e.target.value})
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  api.post('http://localhost:8080/cliente',this.state)
    .then(response =>{
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

render()  {
  const {nome, endereco, email, telefone} = this.state
  return (
    <div className="tela">
      <Button close />
      <h1>Cadastro de Cliente</h1>
      <Form onSubmit={this.submitHandler} className="formBox">
        <div className="formClinte">
          Nome: 
          <input
            type="text"
            placeholder="nome"
            onChange={this.changeHandler}
            name="nome"
            value={nome}
          ></input>
        </div>
        <div className="formClinte">
        Endereco:  
          <input
            type="text"
            placeholder="Endereco"
            onChange={this.changeHandler}
            name="endereco"
            value={endereco}
          ></input>
        </div>
        <div className="formClinte">
          Email:
          <input
            type="email"
            placeholder="email"
            onChange={this.changeHandler}
            name="email"
            value={email}
          ></input>
>>>>>>> 52111d2e0eb15a620e25bb51a192f371c1fe3baa
          </div>
          <div className="formClinte">
            Telefone:
            <input
              type="tel"
              placeholder="telefone"
              onChange={this.changeHandler}
              name="telefone"
              value={telefone}
            ></input>
          </div>
<<<<<<< HEAD
          <button type="submit" className="buttonEnviar">
            SALVAR
          </button>
        </Form>
      </div>
    )
  }
=======
          <button type="submit" className="buttonEnviar">SALVAR</button>
      </Form>
    </div>
  )
}
>>>>>>> 52111d2e0eb15a620e25bb51a192f371c1fe3baa
}
export default FormCriar
