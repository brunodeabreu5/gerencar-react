import React, { Component } from "react";
import "../../section/UsuarioInf/index.css";
import "./index.css";
//material-ui
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

//api
import api from "../../../api";
import { TableRow } from "@material-ui/core";
class ClientePesquisa extends Component {
  state = {
    clientes: [],
  };

  async componentDidMount() {
    const response = await api.get("cliente");

    console.log(response.data);

    this.setState({ clientes: response.data });
  }

  render() {
    const { clientes } = this.state;

    return (
      <TableBody>
        {clientes.map((cliente) => (
          <TableRow key={cliente.idCliente}>
            <TableCell align="left">{cliente.idCliente}</TableCell>
            <TableCell align="left">{cliente.nome}</TableCell>
            <TableCell align="left">{cliente.endereco}</TableCell>
            <TableCell align="left">{cliente.email}</TableCell>
            <TableCell align="left">{cliente.telefone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }
}

export default ClientePesquisa;
