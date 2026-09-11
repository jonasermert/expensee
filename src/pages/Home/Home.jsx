import './Home.scss';
import Header from '../../components/Navbar/Header';

import TransaktionContainer from '../../components/Transaktion/TransaktionContainer'
import { FooterContext } from '../../contexts/FooterContext'
import { useContext, useEffect } from 'react'

import FooterOhne from '../../components/Footer/FooterOhne';

const Home = () => {
    const{setHomeIsActive,setAddIsActive,setChartsIsActive}=useContext(FooterContext)
    useEffect(() => {
        setAddIsActive(false)
        setHomeIsActive(false)
        setChartsIsActive(true)
    }, [setAddIsActive, setHomeIsActive, setChartsIsActive])
    return (  
        <div className="Home">
            <Header title="Übersicht"/>
            <TransaktionContainer />
            <FooterOhne/>
        </div>
    );
}

export default Home;
