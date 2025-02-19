import { useState } from "react";

function Blocos(arrt) {
    return ( 
        <div className="text-center border-solid text-gray-800 bg-yellow-50 px-5 border-gray-300 shadow-2xl ">
            <p>Qual tipo de bloco você precisa?</p>
            <img src="https://placehold.co/200"/>
            <p>{arrt.nomeproduto}</p>
            <a href="/adiquirir_produto" className="bg-yellow-400 text-gray-800 py-1 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-all no-underline">Adiquirir</a>
        </div>
     );
}

export default Blocos;