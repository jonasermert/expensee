
import './Charts.scss';
import Header from '../../components/Navbar/Header'
import Collaps from '../../components/Collaps/Collaps'
import Doughnut from '../../components/Chart/DonutChart'
import { FooterContext } from '../../contexts/FooterContext'
import { useContext, useEffect } from 'react'
import FooterOhne from '../../components/Footer/FooterOhne';

const Charts = () => {
        const{setHomeIsActive,setAddIsActive,setChartsIsActive}=useContext(FooterContext)
        useEffect(() => {
            setAddIsActive(false)
            setHomeIsActive(true)
            setChartsIsActive(false)
        }, [setAddIsActive, setHomeIsActive, setChartsIsActive])
    return (
        <div>
            <Header title="Statistik" />
            <Doughnut />
            <Collaps />
            <FooterOhne />
        </div>


    );
}
export default Charts;
