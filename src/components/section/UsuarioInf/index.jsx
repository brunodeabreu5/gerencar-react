import React from "react";
import "./index.css";
import MenuPesquisa from "../../Button/MenuPesquisa";
import ClientePesquisa from "../../Clientes/ClientePesquisa";
import CadastraUsuario from "../../Button/CadastraUsuario";
//material-ui
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


const barra = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'Nome', label: 'Nome', minWidth: 70 },
  {
    id: 'endereco',
    label: 'Endereço',
    minWidth: 50,
    align: 'left'
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 50,
    align: 'left'
  },
  {
    id: 'telefone',
    label: 'Telefone',
    minWidth: 70,
    align: 'left'
  }
]

function UsuarioInfo() {
  return (
    <div className="container">
      <div className="itemform">
        <di className="menuPesquisa">
          <label className="menubusca">Nome do cliente:</label>
          <input className="inputlogin1" type="text" id="fname1" name="fname" />
        </di>
        <div className="menuPesquisa">
          <label className="menubusca">CPF:</label>
          <input className="inputlogin1" type="text" name="fname" />
        </div>
        <div className="menuPesquisa">
          <label className="menubusca">Ordem por:</label>
          <select className="opcao1">
            <option value="Nome">Nome</option>
            <option value="CPF">CPF</option>
            <option value="Data">Data</option>
          </select>
        </div>
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
            <ClientePesquisa />
          </Table>
        </TableContainer>
      </Paper>

      <CadastraUsuario />
    </div>
  )
}

export default UsuarioInfo;
