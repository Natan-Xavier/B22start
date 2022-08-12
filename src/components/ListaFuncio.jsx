import React from "react";
import funcionarios from '../data/funcionarios' /*O segundo ponto seria sair da pasta para ir pra outra */


export default (props) => {
// console.log(funcionarios)
//  const li1 = (
//       <li>
//          {funcionarios[0].id} - {funcionarios[0].nome}
//       </li>
//    )

    const lista = funcionarios.map((funcionarios) =>{
        return(
            <li key={funcionarios.id}>{funcionarios.id} - {funcionarios.nome}</li>
        )   
    })

    return (

        <div>
            <ul>
                {lista}
            </ul>
        </div>

    )
}