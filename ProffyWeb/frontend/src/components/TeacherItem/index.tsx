import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1240742475234500609/VfjHZsOd_400x400.jpg" alt="Nahan Rezende"/>
        <div>
          <strong>Nahan Rezende</strong>
          <span>Programação Web</span>
        </div>
      </header>

        <p>
          Não tinha o que escrever e como eu queria testar uma parada nada a ver coloquei samerda aqui.
        </p>
        
      <footer>
        <p>
            Preço/hora
          <strong>
            R$ 1200,00
         </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
      </footer>
    </article>    
  );
}

export default TeacherItem;