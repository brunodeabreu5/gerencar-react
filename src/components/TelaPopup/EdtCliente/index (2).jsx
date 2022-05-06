import React from 'react'

import Popup from 'reactjs-popup'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from 'react-bootstrap'
import PopEditar from './PopEditar'

function EdtCliente() {
  return (
    <>
      <Popup
        trigger={
          <Link to={{ pathname: `${cliente.id}` }}>
            <Button variant="contained" color="primary">
              Editar
            </Button>
          </Link>
        }
        modal
      >
        <PopEditar />
      </Popup>
    </>
  )
}

export default EdtCliente
