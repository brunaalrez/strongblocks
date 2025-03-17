'use client'
import { useEffect, useState } from "react";
import Blocos from "./components/blocos";

function Produtos() {
    const [carrinho, adicionaCarrinho] = useState(0);
    const [total, valorTotal] = useState(0);

    const [blocos, alteraBloco] = useState([{
        id:0,
        imagem:"https://th.bing.com/th/id/OIP._pnugJyzaPk5tB80UY6WfgHaGF?rs=1&pid=ImgDetMain",
        nome: "Blocos tipo A",
        familia: "Família de 20",
        familia1: "Família de 15"
    },{
        id:1,
        imagem:"https://th.bing.com/th/id/OIP._pnugJyzaPk5tB80UY6WfgHaGF?rs=1&pid=ImgDetMain",
        nome: "Blocos tipo B",
        familia: "Família de 20",
        familia1: "Família de 15"
    },{
        id:2,
        imagem:"https://th.bing.com/th/id/OIP._pnugJyzaPk5tB80UY6WfgHaGF?rs=1&pid=ImgDetMain",
        nome: "Blocos tipo C",
        familia: "Família de 20",
        familia1: "Família de 15",
        familia2: "Família de 12",
        familia3: "Família de 10",
        familia4: "Família de 07"
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

    function removerCarrinho(remover = false){
        let novoCarrinhoR = carrinho;
        
        if(remover == true){
            adicionaCarrinho(carrinho - 1)
            novoCarrinhoR--;
        }else{
            if(carrinho > 0){
                adicionaCarrinho(carrinho = 0)
            }
        }
        valorTotal(novoCarrinhoR)
    }

    useEffect(()=>{
        const quantidade = JSON.parse( localStorage.getItem("carrinho")).length
        valorTotal(quantidade)
        adicionaCarrinho(quantidade)
    }, [])

    

    return ( 
        <div>
            <div className="text-gray-800 bg-gray-300">
            <h1 className="text-center mt-8">Produtos</h1>
            <hr/>
            
            <div className="px-5 text-center">
            <p>Qual tipo de bloco você precisa?</p>
            <p className="p-3 text-lg">Carrinho itens <strong>{total}</strong></p>
            <button onClick={()=> window.location.href='/teste'} 
            className="bg-yellow-400 text-gray-800 py-1 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-all no-underline">Ver carrinho</button>
                <div>
                    <ul>
                        {
                            blocos.map((i)=>
                            <Blocos key={i.id} produto={i} handleCarrinho={handleCarrinho} removerCarrinho={removerCarrinho}/>
                            )
                        }
                    </ul>
                </div>
                
            </div>
            
            </div>
        </div>
     );
}

export default Produtos;
