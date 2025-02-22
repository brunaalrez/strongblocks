import { useState } from "react";
import { createContext, useState } from "react";
import Produtos from "../page";

function Blocos(arrt) {
    const [mostrar, alteraMostrar] = useState(false);
    const [retira, alteraRetira] = useState(true)

    const [mostrarBotao, mostrarBotaos] = useState(false);

    const [carrinho, adicionaCarrinho] = useState(0);
    const [total, valorTotal] = useState(0);

    const InsumoContext = createContext();

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

    function handleCarrinho(adicionar = false){
        let novoCarrinho = carrinho;
        
        if(adicionar == true){
            adicionaCarrinho(carrinho + 1)
            novoCarrinho++;
        }else{
            if(carrinho > 0){
                adicionaCarrinho(carrinho - 1)
                novoCarrinho--;
            }
        }
        valorTotal(novoCarrinho)
    }

    function Mostrar() {
        alteraMostrar(!mostrar);
    }

    function Retira(){
        alteraRetira(false);
    }

    return (
        <div className="text-center border-solid text-gray-800 bg-yellow-50 px-5 border-gray-300 shadow-2xl mt-5">
            <div>
            <img src={arrt.produto.imagem} className="mt-5" />
            <p>{arrt.produto.nome}</p>
            <div>
                <Produtos carrinho={carrinho} handleCarrinho={handleCarrinho}/>
            </div>

            {retira &&(
                <div>
                    <button onClick={() => {adicionaProduto();Mostrar();Retira()}}
                    className="bg-yellow-400 text-gray-800 py-1 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-all no-underline">
                    Adquirir
                    </button>
                </div>
            )}

            {mostrar && (
                <div className="mt-3 text-gray-700">
                    <div>
                        <h2>Família de 20</h2>
                        <p>Sua largura e formato corresponde a 19cm</p>
                        <button onClick={()=>{ handleCarrinho(true)}} className="py-1 px-6 rounded-lg shadow-md">Adiquirir</button>
                    </div>
                    
                    <div>
                        <h2>Família de 15</h2>
                        <p>Sua largura e formato corresponde a 14cm</p> 
                        <button onClick={()=>{ handleCarrinho(true)}}  className="py-1 px-6 rounded-lg shadow-md">Adiquirir</button>
                    </div>
                    
                </div>
            )}
            </div>
            
        </div>
    );
}

export default Blocos;
