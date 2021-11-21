import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import './Add.scss';
import shapeImg from '../../img/shape.png'
import {descriptionData} from '../../data/Add.data'
import { FooterContext } from '../../contexts/FooterContext'
import React, { useContext } from 'react'
import { db } from "../../Service/firebase"
import { collection, addDoc } from "firebase/firestore"
import successImg from '../../img/sucess.png'
import lineImg from '../../img/line.png'
import { useAuth } from '../../contexts/AuthContext'
import errorImg from '../../img/error.png'

const Add = () => {
  //Diese Funktionen setzen das richtige Bild auf gelb onload
  const { setHomeIsActive, setAddIsActive, setChartsIsActive } = useContext(FooterContext)
  setAddIsActive(true)
  setHomeIsActive(false)
  setChartsIsActive(false)
  //=======================================================================================
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('');
  const [inputs, setInputs] = useState({
    category: '',
    description: '',
    price: '',
    created_at: '',
  });
  
  useEffect(() => {
    let close;
    if (open) {
      close = setTimeout(() => {
        setOpen(false);
        setInputs({ category: '', description: '', price: '', created_at: '' });
      }, 4000);
    }
    return () => clearTimeout(close);
  }, [open]);
  // =========================================================
// ================ FIREBASE ADD ===================
const [newCategory, setNewCategory] = useState("")
const [newDescription, setNewDescription] = useState("")
const [newAmount, setNewAmount] = useState(0)
const [newDate, setNewDate] = useState("")
const[openModal,setOpenModal]=useState(false)
const[openError,setOpenError]=useState(false)
const financeCollectionRef = collection(db, "finance")
const { currentUser } = useAuth()


let timestamp = Date.now(); 
// The Date.now() method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
//Because now() is a static method of Date, you always use it as Date.now().
const createFinance = async () => {
    await addDoc(financeCollectionRef, {amount: newAmount, category: newCategory, date: newDate, description: newDescription, user: currentUser.email ,itemTimestamp: timestamp});
}


//diese Funktion fasst drei Funktionen zusammen , sodass man 2 Funktionen onClick verwenden kann 
const onClickCollect=()=>{ 
  if(newAmount===0||newDate===''||newCategory===''||newDescription===''||newCategory==='Kategorie'){ 
    // wenn einer der 4 states null oder '' ist , dann soll er den Error zeigen
    setOpenError(true)
  }
  else{ 
    //sind alle befüllt , sollen die Daten in die Firebase gepusht werden und der SuccessModal gezeigt werden 
  createFinance();
  setOpenModal(true)
  }
}
// =========================================================
  let valueChoice = descriptionData.map((element) => {
    return (
      <option key={element} value={element}>
        {element}
      </option>
    );
  });
  let time = new Date().toLocaleTimeString('de', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <>
      <main>
        <section className="wallet">
          <Link to='/home'>
            <img src={shapeImg} alt='shape' />
          </Link>
          <h1>Umsätze</h1>
          <div className="add-form">
            <select
              placeholder='Kategorie'
              onChange={(event) => {
                setNewCategory(event.target.value)
              }}
              required>
              {valueChoice} Kategorie
            </select>
            {' '}

            <input
              type='text'
              name='description'
              list='Beschreibung'
              placeholder='Beschreibung'
              onChange={(event) => {
                setNewDescription(event.target.value)
              }}
              required
            />
            <input
              type='number'
              name='price'
              placeholder='Geldbetrag'
              onChange={(event) => {
                setNewAmount(Number.parseFloat(event.target.value))
              }}
              required
            />{' '}
            <br />
            <input
              type='datetime-local'
              name='created_at'
              placeholder='Datum'
              onChange={(event) => {
                setNewDate(event.target.value)
              }}
              required
            />{' '}


            <button
              onClick={onClickCollect}
            >Abschicken</button>
          </div>

          <div className="Modalbg" onClick={() => setOpenModal(false)} style={{ width: openModal ? '100vw' : '0vw' }}>
            <div id="ModalPopUp" style={{ display: openModal ? 'block' : 'none' }}>
              <img id="sucessImg" src={successImg} alt="success" />
              <h3>Erfolgreich <br /> eingetragen!</h3>
              <span className="circle1"></span>
              <img id="line" src={lineImg} alt="line" />
              <span className="circle2"></span>
              <section className="infoContainer">
                <article>
                  <p>
                    <span id="mLeft">Datum </span>
                    <br />  <span id="showDt">{`${newDate.slice(8, 10)}.${newDate.slice(5, 7)}.${newDate.slice(0, 4)}`}</span>
                  </p>
                  <p>
                    <span>Zeit</span>
                    <br />{time}
                  </p>

                </article>
                <p className="categorie">
                  <span id="cat">Kategorie</span>
                  <br /> <span id="showDc">{newDescription}</span>
                </p>
                <p className="price">
                  <span id="mLeft">Summe</span>
                  <br /> <span id="showBig">{newAmount}</span>
                </p>
              </section>

            </div>
          {/* =============================================================SUCCESSMODAL======================================================================== */}
          <div className="Modalbg"  onClick={()=>setOpenModal(false)}  style={{width: openModal?'100vw':'0vw'}}>
               <div id="ModalPopUp" style={{display: openModal?'block':'none'}}>
                    <img  id="sucessImg" src={successImg } alt="success" />
                    <h3 id="message">Erfolgreich <br/> eingetragen!</h3>
                    <span className="circle1"></span>
                    <img id= "line"  src={lineImg}alt="line" />
                    <span className="circle2"></span>
                    <section className="infoContainer">
                        <article>
                          <p>
                          <span id="opacity">Datum </span>
                          <br />  <span id="showDt">{`${newDate.slice(8,10)}.${newDate.slice(5,7)}.${newDate.slice(0,4)}`}</span>
                          </p>
                          <p>
                            <span id="opacity">Zeit</span>
                            <br />{time}
                          </p>
                          
                        </article>
                        <article>
                        <p className="categorie">
                          <span id="opacity">Kategorie</span>
                            <br /> <span id="showDc">{newCategory}</span>
                        </p>
                        </article>
                        <article>
                        <p className="price">
                          <span id="opacity">Summe</span>
                            <br /> <span id="showBig">{newAmount}</span> 
                        </p>
                        </article>
                    </section>
                    
                 
              </div> 
              
           </div>
           {/* =============================================================ERRORMODAL======================================================================== */}
           <div className="Modalbg"  onClick={()=>setOpenError(false)}  style={{width: openError?'100vw':'0vw'}}>
             <div id="errorPopUp" style={{display: openError?'block':'none'}}>
                <img  id ="errorImg" src={errorImg} alt="errorImg" />
               <h3> </h3>
                <span className="circle1"></span>
                    <img id= "line"  src={lineImg}alt="line" />
                    <span className="circle2"></span>
                    <h3 id="errortitle">Error</h3>
                    <h4>Bitte Füllen Sie alle Felder aus!</h4>
                </div>
                </div>
                </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Add;

