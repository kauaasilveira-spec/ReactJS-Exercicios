import { useState } from "react"
import "./cadfruta.css"


export default function CadFruta() {
    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState(0)

    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi" },
        { id: 2, nome: "Melão" },

    ])

    function cadastrar(e) {
        e.preventDefault()
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta }])
    }


    return (
        <section className="sessao-cadastro">
            <h2>Cadastro</h2>
            <form action="" onSubmit={cadastrar}>
                <fieldset className="sessao-cadastro">
                    <label htmlFor="fruta" className="cadastro_rotulo">
                        Digite o nome da fruta

                    </label>
                </fieldset>
                <input
                    type="text"
                    id="fruta"
                    placeholder="ex: limão"
                    className="cadastro_entrada"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                />

   <input
                    type="text"
                    id="fruta"
                    placeholder="ex: limão"
                    className="cadastro_entrada"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                />

                <button

                    type="submit"
                    className="cadastro_btncadastra"
                >Cadastrar

                </button>

            </form>

            <div className="resultados">
                <ul>
                    {
                        arrFrutas.map((f) => {
                            return <li key={f.id}>{f.nome}</li>


                        })
                    }

                </ul>


            </div>

        </section>
    )
}




