import React from "react";
import "../estilos/contador.css"

function Contador({clicks}) {
    return(
        <div className="contador">
{clicks}
        </div>
    )
}
export default Contador;