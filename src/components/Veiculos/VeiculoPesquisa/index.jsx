import React, { Component } from 'react'
//import '../../section/UsuarioInf/index.css'
//import './index.css'
//material-ui
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

//api
import api from '../../../api'
import { TableRow } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from 'react-bootstrap'
// import EdtCliente from './../../TelaPopup/EdtCliente/index'

class VeiculoPesquisa extends Component {
  state = {
    veiculos: []
  }

  componentDidMount() {
    api.get(`/veiculo`).then(res => {
      const veiculos = res.data
      this.setState({ veiculos })
    })
  }

  deleteCliente(idVeiculos, e) {
    api.delete(`/veiculo/${idVeiculos}`).then(res => {
      console.log(res)
      console.log(res.data)
      const veiculos = this.state.veiculos.filter(
        item => item.idVeiculos !== idVeiculos
      )
      this.setState({ veiculos })
    })
  }

  render() {
    const { veiculos } = this.state
    return (
      <TableBody>
        {veiculos.map(veiculo => (
          <TableRow key={veiculo.idVeiculos}>
            <TableCell align="left">{veiculo.idVeiculo}</TableCell>
            <TableCell align="left">{veiculo.marca}</TableCell>
            <TableCell align="left">{veiculo.modelo}</TableCell>
            <TableCell align="left">{veiculo.ano}</TableCell>
            <TableCell align="left">{veiculo.placaDoVeiculo}</TableCell>
            <TableCell align="left">{veiculo.odometro}</TableCell>
            <ThemeProvider>
              <TableCell align="left">
                {/* <EdtCliente 
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
                </Button>*/}
              </TableCell>
            </ThemeProvider>
          </TableRow>
        ))}
      </TableBody>
    )
  }
}

export default VeiculoPesquisa
