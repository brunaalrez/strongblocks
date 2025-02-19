'use client'
import { useState } from "react"; 
import Confirmado from "./confirmacao";

function PaginaAdiquirirProduto() {
    const [carrinho, adicionaCarrinho] = useState(0);
    const [mostra, mostraBotao] = useState(false);
    const [total, valorTotal] = useState(0)
    const [precoA, precoProdutoA] = useState(150)
    const [precoB, precoProdutoB] = useState(130)
 
    function handleCarrinho(adicionar = false){
        let novoCarrinho = carrinho;
        
        if(adicionar == true){
            adicionaCarrinho(carrinho + 1)
            novoCarrinho++;
        }else{
            if(carrinho > 0 && precoA > 0){
                adicionaCarrinho(carrinho - 1)
                novoCarrinho--;
            }
        }
        valorTotal(novoCarrinho * (precoA))
        

    }
    function mostraAgora(){
        mostraBotao(true)
    }
    return ( 
        <div>
            <p className="p-3 text-lg">Carrinho <strong>{carrinho}</strong> itens</p>
            <p className="p-3 text-lg">Valor total:<strong> R${total} </strong></p>
            <div className="text-center border-solid text-gray-800 bg-yellow-50 px-5 border-gray-300 shadow-2xl m-3" >
                
                <h1>Bloco Tipo A</h1>
                
                <img src="https://placehold.co/400"/>
                <hr/>

                <h2>Família de 20</h2>
                <p>Sua largura e formato corresponde a 19cm</p>
                <button onClick={()=>{mostraAgora(); handleCarrinho(true);}} className="py-1 px-6 rounded-lg shadow-md">Adiquirir</button>
                {
                    mostra == true &&
                    <div>
                        <button onClick={()=>Confirmado()} className="bg-black-400 text-color-gray-400 py-1 px-6 rounded-lg shadow-md">Comfirmar Compra</button>
                        <button onClick={()=>handleCarrinho(false)} className="bg-black-400 text-color-gray-400 py-1 px-6 rounded-lg shadow-md">Cancelar</button>
                    </div>
                }
                <hr/>

                <h2>Família de 15</h2>
                <p>Sua largura e formato corresponde a 14cm</p>
                <button onClick={()=>{mostraAgora(); handleCarrinho(true);}} className="py-1 px-6 rounded-lg shadow-md">Adiquirir</button>
                {
                    mostra == true &&
                    <div>
                        <button className="py-1 px-6 rounded-lg shadow-md">Comfirmar Compra</button>
                        <button onClick={()=>handleCarrinho(false)} className="py-1 px-6 rounded-lg shadow-md">Cancelar</button>
                    </div>
                }
                <hr/>
             </div>
        </div>
     );
}

export default PaginaAdiquirirProduto;