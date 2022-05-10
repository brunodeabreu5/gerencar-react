import React, { Component } from 'react'
import '../../section/UsuarioInf/index.css'
import './index.css'
//material-ui
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

//api
import api from '../../../api'
import { TableRow } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from 'react-bootstrap'
import EdtCliente from './../../TelaPopup/EdtCliente'

class ClientePesquisa extends Component {
  state = {
    clientes: []
  }

  componentDidMount() {
    api.get(`/cliente`).then(res => {
      const clientes = res.data
      this.setState({ clientes })
    })
  }

  deleteCliente(idCliente, e) {
    api.delete(`/cliente/${idCliente}`).then(res => {
      console.log(res)
      console.log(res.data)
      const clientes = this.state.clientes.filter(
        item => item.idCliente !== idCliente
      )
      this.setState({ clientes })
    })
  }

  render() {
    const { clientes } = this.state
    return (
      <TableBody>
        {clientes.map(cliente => (
          <TableRow key={cliente.idCliente}>
            <TableCell align="left">{cliente.idCliente}</TableCell>
            <TableCell align="left">{cliente.nome}</TableCell>
            <TableCell align="left">{cliente.endereco}</TableCell>
            <TableCell align="left">{cliente.email}</TableCell>
            <TableCell align="left">{cliente.telefone}</TableCell>
            <ThemeProvider>
              <TableCell align="left">
                <EdtCliente
                  id={cliente.idCliente}
                  nome={cliente.nome}
                  endereco={cliente.endereco}
                  email={cliente.email}
                  telefone={cliente.telefone}
                />
              </TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={e => this.deleteCliente(cliente.idCliente, e)}
                >
                  Delete
                </Button>
              </TableCell>
            </ThemeProvider>
          </TableRow>
        ))}
      </TableBody>
    )
  }
}

export default ClientePesquisa
