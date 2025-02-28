import { useState } from "react";
// import { createContext, useState } from "react";
import Produtos from "../page";

function Blocos(arrt) {

    function adicionaProduto() {
        if (localStorage.getItem("carrinho") == null) {
            localStorage.setItem("carrinho", JSON.stringify([arrt.produto]));
        } else {
            let carrinho = localStorage.getItem("carrinho");
            carrinho = JSON.parse(carrinho);
            carrinho.push(arrt.produto);
            carrinho = JSON.stringify(carrinho);
            localStorage.setItem("carrinho", carrinho);
        }
    }

    
    return (
        <div className=" text-gray-800 bg-yellow-50 px-5 border-gray-300 shadow-2xl mt-5">
            <div>
            <img src={arrt.produto.imagem} className="mt-5" />
            <p>{arrt.produto.nome}</p>
            <div>
            </div>

                <div className="mt-3 text-gray-700">
                    <div>
                        <h2>Família de 20</h2>
                        <p>Sua largura e formato corresponde a 19cm</p>
                        <button onClick={()=>{ arrt.handleCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md m-5">Adiquirir</button>
                        <button onClick={()=> {arrt.removerCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md">Remover</button>
                    </div>
                    
                    <div>
                        <h2>Família de 15</h2>
                        <p>Sua largura e formato corresponde a 14cm</p> 
                        <button onClick={()=>{ arrt.handleCarrinho(true)}}  className="py-1 px-6 rounded-lg shadow-md m-5">Adiquirir</button>
                        <button onClick={()=> {arrt.removerCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md">Remover</button>
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
}

export default Blocos;
