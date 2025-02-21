import { useState } from "react";

function Blocos(arrt) {
    function adicionaProduto(){
        if(localStorage.getItem("carrinho") == null){
            localStorage.setItem("carrinho", JSON.stringify([arrt.produto]))
        }else{
            let carrinho = localStorage.getItem("carrinho")
            carrinho = JSON.parse(carrinho)
            carrinho.push(arrt.produto)
            carrinho = JSON.stringify(carrinho)
            localStorage.setItem("carrinho", carrinho)
        }
    }
    return ( 
        <div className="text-center border-solid text-gray-800 bg-yellow-50 px-5 border-gray-300 shadow-2xl mt-5">
            
            <img src={arrt.produto.imagem} className="mt-5"/>
            <p>{arrt.produto.nomeproduto}</p>
            <button onClick={()=> adicionaProduto()} className="bg-yellow-400 text-gray-800 py-1 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-all no-underline">Adiquirir</button>
        </div>
     );
}

export default Blocos;