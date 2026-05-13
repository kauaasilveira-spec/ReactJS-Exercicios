import './App.css'
import CadastroProdutopage from './assets/CadastroProduto'
import CadastroFrutaspage from './assets/CadastroFrutas'
import QuemSomospage from './assets/QuemSomos'
import { BrowserRouter, Routes } from 'react-router-dom'    
import Homepage from './assets/Homepage'



export default function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>

    <Route element={<Homepage/>} path='/'></Route>
    <Route element={<QuemSomospage/>} path='/quem-somos' ></Route>
    <Route element={<CadastroFrutaspage/>} path='/cadastro-frutas'></Route>
    <Route element={<CadastroProdutopage/>} path='/cadastro-produtos'></Route>

    </Routes>
    </BrowserRouter>
    
  
    </>
         
  )
}