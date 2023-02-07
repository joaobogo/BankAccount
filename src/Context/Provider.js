import React, { useEffect, useState } from "react";
import Context from "./Context";

function Provider({ children }) {
    const [items, setitems] = useState([])
    const globalState = {
        items,
        setitems,
    }
    useEffect(() => {
        const saveditems = localStorage.getItem('gastos')
        if (saveditems) {
            setitems(JSON.parse(saveditems))
        }
    }, [])

    return (
        <Context.Provider value={globalState}>{children}</Context.Provider>
    )
}
export default Provider