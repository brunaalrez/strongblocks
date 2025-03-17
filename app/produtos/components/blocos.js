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
        <div className="text-gray-800 bg-yellow-50 px-5 border-gray-300 shadow-2xl mt-5">
            <div className="flex flex-wrap gap-5">
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                    <div className="bg-white p-4 border rounded-lg shadow-md">
                        <img src={arrt.produto.imagem} className="mt-5 w-full h-auto" />
                        <p className="mt-2 text-center font-semibold">{arrt.produto.nome}</p>
                        <div className="mt-3 text-gray-700">
                            <div>
                                <h2 className="text-lg font-medium">{arrt.produto.familia}</h2>
                                <p className="text-sm">Sua largura e formato corresponde a 19cm</p>
                                <button onClick={()=>{ arrt.handleCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md m-5">Adiquirir</button>
                                <button onClick={()=> {arrt.removerCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md">Remover</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                    <div className="bg-white p-4 border rounded-lg shadow-md">
                        <img src={arrt.produto.imagem} className="mt-5 w-full h-auto" />
                        <p className="mt-2 text-center font-semibold">{arrt.produto.nome}</p>
                        <div className="mt-3 text-gray-700">
                            <div>
                                <h2 className="text-lg font-medium">{arrt.produto.familia1}</h2>
                                <p className="text-sm">Sua largura e formato corresponde a 14cm</p> 
                                <button onClick={()=>{ arrt.handleCarrinho(true)}}  className="py-1 px-6 rounded-lg shadow-md m-5">Adiquirir</button>
                                <button onClick={()=> {arrt.removerCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md">Remover</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    arrt.produto.id === 2 &&(
                        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                            <div>
                            <div className="bg-white p-4 border rounded-lg shadow-md">
                                <img src={arrt.produto.imagem} className="mt-5 w-full h-auto" />
                                <p className="mt-2 text-center font-semibold">{arrt.produto.nome}</p>
                                <div className="mt-3 text-gray-700">
                                    <div>
                                        <h2 className="text-lg font-medium">{arrt.produto.familia2}</h2>
                                        <p className="text-sm">Sua largura e formato corresponde a 14cm</p> 
                                        <button onClick={()=>{ arrt.handleCarrinho(true)}}  className="py-1 px-6 rounded-lg shadow-md m-5">Adiquirir</button>
                                        <button onClick={()=> {arrt.removerCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md">Remover</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div>
                                <img src={arrt.produto.imagem} className="mt-5 w-full h-auto" />
                                <p className="mt-2 text-center font-semibold">{arrt.produto.nome}</p>
                                <div className="mt-3 text-gray-700">
                                    <div>
                                        <h2 className="text-lg font-medium">{arrt.produto.familia3}</h2>
                                        <p className="text-sm">Sua largura e formato corresponde a 14cm</p> 
                                        <button onClick={()=>{ arrt.handleCarrinho(true)}}  className="py-1 px-6 rounded-lg shadow-md m-5">Adiquirir</button>
                                        <button onClick={()=> {arrt.removerCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md">Remover</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div>
                                <img src={arrt.produto.imagem} className="mt-5 w-full h-auto" />
                                <p className="mt-2 text-center font-semibold">{arrt.produto.nome}</p>
                                <div className="mt-3 text-gray-700">
                                    <div>
                                        <h2 className="text-lg font-medium">{arrt.produto.familia4}</h2>
                                        <p className="text-sm">Sua largura e formato corresponde a 14cm</p> 
                                        <button onClick={()=>{ arrt.handleCarrinho(true)}}  className="py-1 px-6 rounded-lg shadow-md m-5">Adiquirir</button>
                                        <button onClick={()=> {arrt.removerCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md">Remover</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                    )
                }
            </div>
        </div>
    );
}

export default Blocos;
