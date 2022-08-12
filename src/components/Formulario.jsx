import { useState } from "react";
import React from "react";

export default function Formulario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState(0)

    const [user, setUser] = useState({})

    function registrar(e){
        alert('Está funcionando!')
        e.preventDefault()


        setUser({
            nome:nome,
            idade:idade,
            email:email,
        })
    }

    return (

        <div>
            <form onSubmit={registrar}>
                <h1>Cadastrando usuário</h1>
                <label>Nome: </label> <br />
                <input placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} /><br />
                <label>Idade: </label> <br />
                <input placeholder="Digite sua idade" value={idade} onChange={(e) => setIdade(e.target.value)} /><br />
                <label>E-mail: </label> <br />
                <input placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <button type="submit">Registrar</button>

            </form>

            <br />
            <div>
                <span>Bem vindo(a): {user.nome}</span><br />
                <span>Idade:{user.idade}</span><br />
                <span>Email:{user.email}</span><br />
            </div>
        </div >

    )

}