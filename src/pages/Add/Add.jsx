import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import Footer from '../../components/Footer/Footer';
import { FooterContext } from '../../contexts/FooterContext';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../Service/firebase';
import { descriptionData } from '../../data/Add.data';
import shapeImg from '../../img/shape.png';
import successImg from '../../img/sucess.png';
import errorImg from '../../img/error.png';
import lineImg from '../../img/line.png';
import './Add.scss';

const initialForm = {
  category: 'Kategorie',
  description: '',
  amount: '',
  date: '',
};

const Add = () => {
  const { setHomeIsActive, setAddIsActive, setChartsIsActive } = useContext(FooterContext);
  const { currentUser } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setAddIsActive(true);
    setHomeIsActive(false);
    setChartsIsActive(false);
  }, [setAddIsActive, setHomeIsActive, setChartsIsActive]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    const amount = Number(form.amount);
    if (
      !currentUser?.email ||
      form.category === 'Kategorie' ||
      !form.description.trim() ||
      !form.date ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      setErrorMessage('Bitte fülle alle Felder korrekt aus.');
      return;
    }

    try {
      await addDoc(collection(db, 'finance'), {
        amount,
        category: form.category,
        date: form.date,
        description: form.description.trim(),
        user: currentUser.email,
        itemTimestamp: Date.now(),
      });
      setOpenModal(true);
    } catch {
      setErrorMessage('Der Eintrag konnte nicht gespeichert werden. Bitte versuche es erneut.');
    }
  };

  const closeSuccessModal = () => {
    setOpenModal(false);
    setForm(initialForm);
  };

  const formattedDate = form.date
    ? `${form.date.slice(8, 10)}.${form.date.slice(5, 7)}.${form.date.slice(0, 4)}`
    : '';
  const formattedTime = form.date?.slice(11, 16) || '';

  return (
    <>
      <main>
        <section className="wallet">
          <Link to="/home">
            <img src={shapeImg} alt="Zurück" />
          </Link>
          <h1>Umsätze</h1>
          <form className="add-form" onSubmit={handleSubmit}>
            <select name="category" value={form.category} onChange={updateField} required>
              {descriptionData.map((element) => (
                <option key={element} value={element}>{element}</option>
              ))}
            </select>

            <input
              type="text"
              name="description"
              placeholder="Beschreibung"
              value={form.description}
              onChange={updateField}
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Geldbetrag"
              min="0.01"
              step="0.01"
              value={form.amount}
              onChange={updateField}
              required
            />
            <br />
            <input
              type="datetime-local"
              name="date"
              value={form.date}
              onChange={updateField}
              required
            />
            <button type="submit">Abschicken</button>
          </form>

          <div className="Modalbg" onClick={closeSuccessModal} style={{ width: openModal ? '100vw' : '0vw' }}>
            <div id="ModalPopUp" style={{ display: openModal ? 'block' : 'none' }}>
              <img id="sucessImg" src={successImg} alt="Erfolgreich" />
              <h3 id="message">Erfolgreich <br /> eingetragen!</h3>
              <span className="circle1" />
              <img id="line" src={lineImg} alt="" />
              <span className="circle2" />
              <section className="infoContainer">
                <article>
                  <p><span id="opacity">Datum</span><br /><span id="showDt">{formattedDate}</span></p>
                  <p><span id="opacity">Zeit</span><br />{formattedTime}</p>
                </article>
                <article>
                  <p className="categorie"><span id="opacity">Kategorie</span><br /><span id="showDc">{form.category}</span></p>
                </article>
                <article>
                  <p className="price"><span id="opacity">Summe</span><br /><span id="showBig">{form.amount}</span></p>
                </article>
              </section>
            </div>
          </div>

          <div className="Modalbg" onClick={() => setErrorMessage('')} style={{ width: errorMessage ? '100vw' : '0vw' }}>
            <div id="errorPopUp" style={{ display: errorMessage ? 'block' : 'none' }}>
              <img id="errorImg" src={errorImg} alt="Fehler" />
              <span className="circle1" />
              <img id="line" src={lineImg} alt="" />
              <span className="circle2" />
              <h3 id="errortitle">Fehler</h3>
              <h4>{errorMessage}</h4>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Add;
