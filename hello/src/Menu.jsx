
import "./Menu.css";
import MyPeople from "../../assets/LulaMolusco.webp";
import CardPerfil from "../"


function Menu() {
    return (

         <nav  class="menu">
        <a href="#" className=" menu__item">Home</a>
        <a href="#" className=" menu__item">Quem somos</a>  
        <a href="#" className=" menu__item">contato</a>
        <a href="#" className=" menu__item menu__item--signin">entra</a>
         <a href="#" className=" menu__item menu__item--signup">Cadastra</a>
         
         <div class="card-perfil">
           <img class="card-perfil__imagem" src={MyPeople} alt="imagem do usuario" />
         </div>
        </nav>
    
        
      
        
    );
}

export default Menu;