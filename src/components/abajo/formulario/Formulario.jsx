import React from "react";
import "./Formulario.css"

function Formulario() {
    return (
    <>    
    <div class="formu">
    <h1 class= "titulo-for">Preencha com os seus datos</h1>
		<h2 class= "subtitulo-for">e faça do seu veículo um melhor controle</h2> 
		<form>
			<label class="formulario-nombre" for="nombre">Nome:</label><br/>
			<input class="inputlanding" type="text" id="nombre" name="nombre"/><br/>
			<label class="formulario-nombre" for="sobrenome">Sobrenome:</label><br/>
			<input class="inputlanding" type="text" id="sobrenome" name="sobrenome"/><br/>
			<label class="formulario-nombre" for="sobrenome">Email:</label><br/>
			<input class="inputlanding" type="email" id="mail" name="mail"/><br/>
			<input class="landingboto" type="submit" value="Adquire seu app agora!"/>
		</form>    
    </div>
    </>
    );
    
  }
  
  export default Formulario;
  