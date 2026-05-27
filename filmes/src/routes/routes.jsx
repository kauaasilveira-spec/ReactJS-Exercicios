import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/filmes" element={<CadastroFilme />} />
                <Route path="/filmes" element={<CadastroGenero />} />
            </Routes>
            {/*aqui iria o footer */}
        </BrowserRouter>
    );
};

export default Rotas;