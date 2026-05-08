import './perfil.css';

function Perfil({ nome, idade, profissao}) {
return(
<div className="perfil-card">
<h2>{nome}</h2>
<p>Idade: {idade}</p>
<p>Profissao: {profissao}</p>
</div>





)
}