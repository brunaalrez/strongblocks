import { useState } from "react";

function Blocos(arrt) {
    const [mostrar, alteraMostrar] = useState(false);
    const [retira, alteraRetira] = useState(true)

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

    function Mostrar() {
        alteraMostrar(!mostrar);
    }

    function Retira(){
        alteraRetira(false);
    }

    return (
        <div className="text-center border-solid text-gray-800 bg-yellow-50 px-5 border-gray-300 shadow-2xl mt-5">
            <img src={arrt.produto.imagem} className="mt-5" />
            <p>{arrt.produto.nomeproduto}</p>

            {retira &&(
                <div>
            <button onClick={() => {adicionaProduto();Mostrar();Retira()}}
            className="bg-yellow-400 text-gray-800 py-1 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-all no-underline">
                Adquirir
            </button>

                </div>
            )

            }

            {mostrar && (
                <div className="mt-3 text-gray-700">
                    <h2>Família de 20</h2>
                    <p>Sua largura e formato corresponde a 19cm</p>
                </div>
            )}
        </div>
    );
}

export default Blocos;
