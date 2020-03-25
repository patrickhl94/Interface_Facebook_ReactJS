import React, {Component} from 'react';

import '../style/header.css';
import faceLogo from '../assets/faceLogo.png';
class Header extends Component {

  render(){
    return(
     <div className="container-header">
       
       <img className="logo-img" src={faceLogo} alt="Logo Facebook"/>
      
      <div className="meuPerfil">
        Meu Perfil
        <i className="fas fa-user-circle"></i> 
      </div>

     </div>
    )
  } 

}

export default Header;
