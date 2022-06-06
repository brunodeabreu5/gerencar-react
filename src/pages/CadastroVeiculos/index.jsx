import React from 'react'
//estilos
import '../../styles/style.css'
//import './index.css'
//componentes
import BarraCima from '../../components/Header/BarraCima/index'
import UsuarioInfo from '../../components/section/VeiculoInfo/index'

function CadastroVeiculos() {
  return (
    <div>
      <BarraCima />
      <div className="item1">
        <UsuarioInfo />
      </div>
    </div>
  )
}
export default CadastroVeiculos
