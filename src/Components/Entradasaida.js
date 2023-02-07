import React, { useContext } from "react";
import Context from "../Context/Context";
function getPositive(items) {
    let saldo = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.valor > 0) {
            saldo += item.valor; // saldo = saldo + item.valor
        }
    }
    return saldo;
}

function getNegative(items) {
    let saldo = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.valor < 0) {
            saldo -= item.valor; // saldo = saldo - item.valor
        }
    }
    return saldo;
}

function getBalance(items) {
    let saldo = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        saldo += item.valor; // saldo = saldo + item.valor
    }
    return saldo;
}
function Entradasaida() {
    const {items} = useContext(Context)
    return (<div className={getBalance(items)>0?"entrada":"saida"}>
        <h3>Entrada: ${getPositive(items)}</h3>
        <h3>Saída: ${getNegative(items)}</h3>
        <h3>Saldo: ${getBalance(items)}</h3>
    </div>)
}
export default Entradasaida