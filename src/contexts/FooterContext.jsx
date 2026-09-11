import { useState,createContext } from 'react';

export const FooterContext=createContext()

const FooterContextProvider = ({children}) => {
    const [homeIsActive, setHomeIsActive] = useState(false);
    const [addIsActive, setAddIsActive] = useState(false);
    const [chartsIsActive, setChartsIsActive] = useState(false)

    return ( 
        <FooterContext.Provider value={{homeIsActive,setHomeIsActive,addIsActive,setAddIsActive,chartsIsActive,setChartsIsActive}}>
            {children}
        </FooterContext.Provider>

     );
}
 
export default FooterContextProvider;