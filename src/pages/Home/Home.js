import './Home.scss';
import Header from '../../components/Navbar/Header.js';

import TransaktionContainer from '../../components/Transaktion/TransaktionContainer'
import { FooterContext } from '../../contexts/FooterContext'
import React ,{useContext} from 'react'

import FooterOhne from '../../components/Footer/FooterOhne';

import { useAuth } from '../../contexts/AuthContext';


const Home = () => {
    const { currentUser } = useAuth()
    //Diese Funktionen setzen das richtige Bild auf gelb onload
    const{setHomeIsActive,setAddIsActive,setChartsIsActive}=useContext(FooterContext)
    setAddIsActive(false)
    setHomeIsActive(false)
    setChartsIsActive(true)
    //==========================================================
    return (  
        <div className="Home">
            <Header title="Übersicht"/>
            <TransaktionContainer />
            <FooterOhne/>
        </div>
    );
}

export default Home;