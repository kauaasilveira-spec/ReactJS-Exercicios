import { useState } from 'react'
import './App.css'

 function App() {
 //variável privada (objeto) só pode sert mudada pela função setTitulo
    
  const [titulo, setTitulo] = useState("Google")

    
    // <Title texto= "Rafaela"
    // sobrenome="Feia demais"
    // />

    // <Title texto= "Rafael"
    // sobrenome="Moura"
    // />

    // <Title texto= "Kauã"
    // sobrenome= "Washington"
    // idade={17}
    // />


    // </>
    
// function App() {
//   return (

// <>
// <Saudacao nome="Eduardo"/>
// <Saudacao nome="bia"/>
// <Saudacao nome="maria"/>
// </>
//   );
// }
// export default App

<>
<Produto 
nome="
Sapato dockside com ilhoses Gancini"
preco={300}
Descricao="Blush Dior"

  />
<Produto 
nome="Boné Polo Raulph Lauren"
preco={579}
Descricao="Boné Iconic com logo bordado"

  />
<Produto 
nome="Luis Vuitton, Joias"
preco={57560}
Descricao="Corrente com Pingente Color Blossom M Sun em Ouro Rosa"
  />

</>
 );
}
export default App