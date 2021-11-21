import React from 'react';
import Modal from 'react-modal';
import './ModalAdd.scss'
import successImg from '../../img/sucess.png'
import lineImg from '../../img/line.png'

const ModalAdd = (props) => {

  let time = new Date().toLocaleTimeString('de', {
    hour: 'numeric',
    minute: 'numeric',
  });
  let date = new Date().toLocaleDateString('de', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

    return (
        <>
         <Modal open={props.open}
         onClose={props.onClose}
         style={{
          position: 'absolute',
          backgroundColor: '#2B2D5B',
          height: 380,
          width: 300,
          margin: 'auto',
         }}
        ></Modal>
        
        <div id="ModalPopup">
          <img src={successImg } alt="success" />
          <h3>Erfolgreich <br/> eingetragen!</h3>
          <span className="circle1"></span>
          <img id= "line"  src={lineImg}alt="line" />
          <span className="circle2"></span>
          <section>
             <article>
               <p>
               <span>Datum</span>
                <br />{date}
               </p>
               <p>
                 <span>Zeit</span>
                 <br />{time}
               </p>
             </article>
             <p className="categorie">
               <span>Kategorie</span>
                 <br />{props.data.category}
             </p>
             <p className="price">
               <span>Summe</span>
                 <br />   {props.data.price}
             </p>
          </section>
        </div>
        

        </>
        
      );
}
 
export default ModalAdd;