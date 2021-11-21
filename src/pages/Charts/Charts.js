
import './Charts.scss';
import Header from '../../components/Navbar/Header'
import Collaps from '../../components/Collaps/Collaps'
import Doughnut from '../../components/Chart/DonutChart'
import { FooterContext } from '../../contexts/FooterContext'
import React, { useContext } from 'react'
import FooterOhne from '../../components/Footer/FooterOhne';

const Charts = () => {
    //Diese Funktionen setzen das richtige Bild auf gelb onload
        const{setHomeIsActive,setAddIsActive,setChartsIsActive}=useContext(FooterContext)
        setAddIsActive(false)
        setHomeIsActive(true)
        setChartsIsActive(false)
     //=========================Reload geht aber nicht schön===============================
        
        // function reloadPage() {
        //     var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
        //     // Current Time //
        //     var now = Date.now();
        //     // Total Process Lenght as Minutes //
        //     var tenSec = 10 * 1000;
        //     // End Time of Process //
        //     var plusTenSec = currentDocumentTimestamp + tenSec;
        //     if (now > plusTenSec) {
        //         window.location.reload();
        //     }
        // }
        // reloadPage()
     
        //==========================================================
    return (
        
        <div>Charts
            <Header title="Statistik" />
            <Doughnut />
            <Collaps />
            <FooterOhne />
        </div>


    );
}
export default Charts;