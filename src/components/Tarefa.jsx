import { useState, useEffect } from 'react'


export default function Tarefas() {
    const [input, setInput] = useState()
    const [tarefa, setTarefas] = useState(['Estudar javaScript', 'Estudar React',])


    useEffect(() => {
        const tarefaStorage = localStorage.getItem('@tarefa')

        if(tarefaStorage){
            setTarefas(JSON.parse(tarefaStorage))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefa))
    }, [tarefa])


    function registrar(event) {
        //alert('tarefa registrada')
        event.preventDefault()
        setTarefas([...tarefa, input])
        setInput('')
    }

    return (

        <div>
            <h2>Tarefas</h2>
            <form onSubmit={registrar}>
                <label>Nome da tarefa:</label>
                <input placeholder='Digite uma tarefa' value={input} onChange={(event) => setInput(event.target.value)} /><br />
                <button type='submit'>Registrar</button>
            </form>
            <div>
                <ul>
                    {tarefa.map(tarefa => (
                        <li key={tarefa}>{tarefa}</li>
                    ))}

                </ul>

            </div>
        </div>
    )

}