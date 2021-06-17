import React, { Component } from "react";
//import {clientes} from "../../../clientes.json";
import "../../section/UsuarioInf/index.css";
import "./index.css";

//api
import api from "../../../api";

class clientePesquisa extends Component {
  state = {
    cliente: [],
  };

  async componentDidMount() {
    const response = await api.get("cliente");

    this.setState({ cliente: response.data });
  }

  render() {
    const { cliente } = this.state;

    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.format && typeof value === 'number' ? column.format(value) : value}
              </TableCell>
            );
          })}
        </TableRow>
      );
    })}
  }
}
export default clientePesquisa;
