'use client'
import { useState } from "react";
import Blocos from "./components/blocos";
import Carrinho from "./components/carrinho";   

function Produtos() {
    const [carrinho, adicionaCarrinho] = useState(0);
    const [total, valorTotal] = useState(0);

    const [blocos, alteraBloco] = useState([{
        id:0,
        imagem:"https://th.bing.com/th/id/OIP._pnugJyzaPk5tB80UY6WfgHaGF?rs=1&pid=ImgDetMain",
        nome: "Blocos tipo A"
    },{
        id:1,
        imagem:"https://th.bing.com/th/id/OIP._pnugJyzaPk5tB80UY6WfgHaGF?rs=1&pid=ImgDetMain",
        nome: "Blocos tipo B"
    },{
        id:2,
        imagem:"https://th.bing.com/th/id/OIP._pnugJyzaPk5tB80UY6WfgHaGF?rs=1&pid=ImgDetMain",
        nome: "Blocos tipo C"
    }])

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

    return ( 
        <div>
            <div className="text-gray-800 bg-gray-300">
            <h1 className="text-center mt-8">Produtos</h1>
            <hr/>
            
            <div className="justify-flex px-30 text-center">
            <p>Qual tipo de bloco você precisa?</p>
            <p className="p-3 text-lg">Carrinho itens <strong>{total}</strong></p>
            <button className="bg-yellow-400 text-gray-800 py-1 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-all no-underline">Ver carrinho</button>
                <ul>
                    {
                        blocos.map((i)=>
                        <Blocos key={i.id} produto={i} handleCarrinho={handleCarrinho}/>
                    )
                    }
                </ul>
            </div>
            
            </div>
        </div>
     );
}

export default Produtos;
