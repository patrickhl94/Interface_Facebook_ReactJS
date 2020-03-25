import React, {Component} from 'react';

import '../style/header.css';
import faceLogo from '../assets/faceLogo.png';
class Header extends Component {

  render(){
    return(
     <div class="container-header">
       
       <img src={faceLogo} alt="Logo Facebook"/>
      
      <div className="meuPerfil">
        Meu Perfil
        <i class="fas fa-user-circle"></i> 
      </div>

     </div>
    )
  } 

}

export default Header;
