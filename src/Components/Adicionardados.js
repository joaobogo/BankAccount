import React, { useContext, useState } from "react";
import Context from "../Context/Context";
function Adicionardados() {
    const [descricao, setdescricao] = useState('')
    const [valor, setvalor] = useState('')
    const [select, setselect] = useState('Entrada')
    const {setitems} = useContext(Context)
    
    function handleclick() {
        if (select === 'Saída') {
            setitems((items) => {
             const result = [...items, { descricao, valor: -valor, id:Date.now()}]
             localStorage.setItem('gastos', JSON.stringify(result));
             return result;
            })
        } else{
            setitems((items) => {
             const result2 = [...items, { descricao, valor: +valor, id:Date.now()}]
             localStorage.setItem('gastos', JSON.stringify(result2));
             return result2
            })
        }
    }


    return (<div className="input">
        <input type='text' placeholder="Descrição" value={descricao} onChange={(e) => setdescricao(e.target.value)} />
        <input type='number' placeholder="Valor" value={valor} onChange={(e) => setvalor(e.target.value)} />
        <select value={select} onChange={(e) => setselect(e.target.value)} >
            <option>Entrada</option>
            <option>Saída</option>
        </select>
        <button onClick={handleclick}> Botao </button>
    </div>)
}
export default Adicionardados