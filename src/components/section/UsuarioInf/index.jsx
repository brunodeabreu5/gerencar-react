import React from "react";
import "./index.css";
import MenuPesquisa from "../../Button/MenuPesquisa";
import clientePesquisa from "../../Clientes/ClientePesquisa";
import CadastraUsuario from "../../Button/CadastraUsuario";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableBody } from "@material-ui/core";

const barra = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
  },
  {
    id: "size",
    label: "Size",
    minWidth: 170,
    align: "right",
  },
];

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
      <Paper style={{ root: "100%" }}>
        <TableContainer style={{ contain: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {barra.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <CadastraUsuario />
    </div>
  );
}
export default UsuarioInfo;
