import React, { useContext } from "react";
import Context from "../Context/Context";
function Listadedados() {
    const { setitems, items } = useContext(Context)
    function handleclick(id) {
        const filteritems = items.filter((item) => item.id !== id);
        setitems(filteritems);
        localStorage.setItem('gastos', JSON.stringify(filteritems))
    }
    return (<table>
        <thead>
            <th> Descrição </th>
            <th> Valor </th>
            <th> Tipo </th>
            <th> Excluir </th>
        </thead>
        {items.map((item) => (
            <tr>
                <td>{item.descricao}</td>
                <td>{item.valor}</td>
                <td>{item.valor > 0 ? 'entrada' : 'saida'}</td>
                <td><button onClick={() => handleclick(item.id)}>Excluir</button></td>
            </tr>
        ))}


    </table>)
}
export default Listadedados