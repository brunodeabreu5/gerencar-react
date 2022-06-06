import React from 'react'
import './index.css'
import MenuPesquisa from '../../Button/MenuPesquisa'

//import CadastraUsuario from '../../Button/CadastraUsuario'
//material-ui
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import VeiculoPesquisa from './../../Veiculos/VeiculoPesquisa/index'

const barra = [
  { id: 'id', label: 'Id', minWidth: 20 },
  { id: 'Marca', label: 'Marca', minWidth: 50 },
  {
    id: 'Modelo',
    label: 'Modelo',
    minWidth: 50,
    align: 'left'
  },
  {
    id: 'Ano',
    label: 'Ano',
    minWidth: 30,
    align: 'left'
  },
  {
    id: 'Placa Do Veiculo',
    label: 'Placa Do Veiculo',
    minWidth: 30,
    align: 'left'
  },
  {
    id: 'KM',
    label: 'KM',
    minWidth: 30,
    align: 'left'
  }
]

function UsuarioInfo() {
  return (
    <div className="container">
      <div className="itemform">
        <di className="menuPesquisa">
          <label className="menubusca">Busca Veiculo</label>
          <input className="inputlogin1" type="text" id="fname1" name="fname" />
        </di>
        <MenuPesquisa />
      </div>
      <Paper>
        <TableContainer style={{ contain: 440 }}>
          <Table>
            <TableHead>
              <TableRow>
                {barra.map(column => (
                  <>
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  </>
                ))}
              </TableRow>
            </TableHead>
            <VeiculoPesquisa />
          </Table>
        </TableContainer>
      </Paper>
      {/* <CadastraUsuario /> */}
    </div>
  )
}

export default UsuarioInfo
