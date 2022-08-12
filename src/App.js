import React from 'react'
import Primeiro from './components/Primeiro'
import Comparametro from './components/Comparametro'
import Fragmento from './components/Fragmento'
import Cartao from './components/modelo/Cartao'
import Numeros from './components/Numeros'
import './app.css'
import Foto from './components/Foto'
import Imagem from './imagens/teste.jpg'
import './foto.css'
import ListaFuncio from './components/ListaFuncio'
import Nomes from './components/Nome'
import Formulario from './components/Formulario'
import Tarefa from './components/Tarefa'

export default function App() {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className='Cards'>

                <Cartao titulo='Primeiro' color='red'>
                    <Primeiro />
                </Cartao>

                <Cartao titulo='Lista de Tarefas' color='grey'>
                    <Tarefa/>
                </Cartao>

                <Cartao titulo='Formulario' color='brown'>
                    <Formulario />
                </Cartao>

                <Cartao titulo='Lista' color='grey'>
                    <ListaFuncio />

                </Cartao>

                <Cartao titulo='Nomes' color='purple'>
                    <Nomes />

                </Cartao>

                <Cartao titulo='Imagem em React' color='#00FFFF'>
                    <Foto img={Imagem} />

                </Cartao>

                <Cartao titulo='Números aleatórios' color='#00ff00'>
                    <Numeros min={10} max={100} />
                </Cartao>

                <Cartao titulo='teste' color='blue'></Cartao>

                <Cartao titulo='Primeiro componente com props' color='green'>
                    <Comparametro titulo='Hoje é quarta-feira' subtitulo='03/08/2022' />
                </Cartao>

                <Cartao titulo='Primeiro componente com props' color='yellow'>
                    <Comparametro titulo='Aula de React' subtitulo='Parametros' />
                </Cartao>

                <Cartao titulo='Primeiro componente com props'>
                    <Comparametro titulo='titulo teste' />
                </Cartao>

                <Cartao titulo='Utilizando React.Fragment' color='pink'>
                    <Fragmento />
                </Cartao>
            </div>
        </div>
    )
}