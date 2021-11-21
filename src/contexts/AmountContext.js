import { useState,createContext,useEffect } from 'react';
import { onSnapshot, collection } from '@firebase/firestore';
import { db } from '../Service/firebase'
import { useAuth } from './AuthContext'
export const AmountContext=createContext()

const AmountContextProvider = ({children}) => {
        const { currentUser } = useAuth()
        //currentUserImport
        const [finance, setFinance] = useState([])
        const[einkommen,setEinkommen]= useState([0])
        const[ausgaben,setAusgaben]= useState([0])
        const[sparen,setSparen]= useState([0])
        const[sonstiges,setSonstiges]= useState([0])
        const[gehalt,setGehalt]= useState(0)
        const[sonstigeEinnahmen,setSonstigeEinnahmen]= useState(0)
        const[lebensmittel,setLebensmittel]= useState(0)
        const[shopping,setShopping]= useState(0)
        const[wohnen,setWohnen]= useState(0)
        const[mobilitaet,setMobilitaet]= useState(0)
        const[freizeit,setFreizeit]= useState(0)
        const[restaurant,setRestaurant]= useState(0)
        const[versicherung,setVersicherung]= useState(0)
        const[geldanlage,setGeldanlage]= useState(0)
        const[sonstigesSparen,setSonstigesSparen]= useState(0)
        
        

        // console.log(finance)
    
        useEffect(
            () => 
                onSnapshot(collection(db, "finance"),(snapshot) => {
                    setFinance(snapshot.docs.map((doc) => doc.data()))
                    
                    }
                ),
    
            []
        );
     
    useEffect(() => {
        if(currentUser!==null){  
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Gehalt'&& elt.user==currentUser.email||elt.category=='Sonstige Einnahmen'&& elt.user==currentUser.email){
                sum+=Number(elt.amount)
            }
                })
                setEinkommen(sum.toFixed(2));}
    }, [finance]);

    useEffect(() => {
        if(currentUser!==null){  
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Lebensmittel'&&elt.user==currentUser.email||
            elt.category=='Shopping'&&elt.user==currentUser.email||
            elt.category=='Wohnen'&&elt.user==currentUser.email||
            elt.category=='Mobilität'&&elt.user==currentUser.email||
            elt.category=='Freizeit'&&elt.user==currentUser.email||
            elt.category=='Restaurant'&&elt.user==currentUser.email||elt.category=='Versicherungen'&&elt.user==currentUser.email){
                sum+=Number(elt.amount)
            }
                })
                setAusgaben(sum.toFixed(2));}
    }, [finance]);

    useEffect(() => {
        if(currentUser!==null){  
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Geldanlage'&&elt.user==currentUser.email||elt.category=='Sonstiges Sparen'&&elt.user==currentUser.email){
                sum+=Number(elt.amount)
            }
                })
                setSparen(sum.toFixed(2));}
    }, [finance]);

    useEffect(() => {
        if(currentUser!==null){  
        let sum=0;
        finance.forEach((elt)=>{
            console.log(elt)
            if(elt.category=='Sonstiges'&&elt.user==currentUser.email){
                sum+=Number(elt.amount)
            }
                })
                setSonstiges(sum.toFixed(2));}
    }, [finance]);

    useEffect(() => {
        if(currentUser!==null){  
        let sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0,sum8=0,sum9=0,sum10=0,sum11=0;
        finance.forEach((elt)=>{ //Notiz an Erik( mich selbst) es wäre viel kürzer mit Switch Case c(^:
            console.log(elt)
            
            if(elt.category=='Gehalt'&&elt.user==currentUser.email){
                sum1+=Number(elt.amount)
            }
            if(elt.category=='Restaurant'&&elt.user==currentUser.email){
                sum2+=Number(elt.amount)
            }
            if(elt.category=='Sonstige Einnahmen'&&elt.user==currentUser.email){
                sum3+=Number(elt.amount)
                
            }
            if(elt.category=='Lebensmittel'&&elt.user==currentUser.email){
                sum4+=Number(elt.amount)
                
            }
            if(elt.category=='Shopping'&&elt.user==currentUser.email){
                sum5+=Number(elt.amount)
                
            }
            if(elt.category=='Wohnen'&&elt.user==currentUser.email){
                sum6+=Number(elt.amount)
                
            }
            if(elt.category=='Mobilität'&&elt.user==currentUser.email){
                sum7+=Number(elt.amount)
                
            }
            if(elt.category=='Freizeit'&&elt.user==currentUser.email){
                sum8+=Number(elt.amount)
                
            }
            if(elt.category=='Versicherung'&&elt.user==currentUser.email){
                sum9+=Number(elt.amount)
                
            }
            if(elt.category=='Geldanlage'&&elt.user==currentUser.email){
                sum10+=Number(elt.amount)
                
            }
            if(elt.category=='Sonstiges Sparen'&&elt.user==currentUser.email){
                sum11+=Number(elt.amount)
                
            }
           
                })
                setGehalt(sum1.toFixed(2))
                setRestaurant(sum2.toFixed(2))
                setSonstigeEinnahmen(sum3.toFixed(2))
                setLebensmittel(sum4.toFixed(2))
                setShopping(sum5.toFixed(2))
                setWohnen(sum6.toFixed(2))
                setMobilitaet(sum7.toFixed(2))
                setFreizeit(sum8.toFixed(2))
                setVersicherung(sum9.toFixed(2))
                setGeldanlage(sum10.toFixed(2))
                setSonstigesSparen(sum11.toFixed(2))

            }           
    }, [finance]);
       

    return ( 
        <AmountContext.Provider value={{einkommen,setEinkommen,ausgaben,setAusgaben,sparen,setSparen,sonstiges,setSonstiges,gehalt,sonstigeEinnahmen,lebensmittel,shopping,wohnen,mobilitaet,freizeit,restaurant,versicherung,geldanlage,sonstigesSparen}}>
            {children}
        </AmountContext.Provider>

     );
}

export default AmountContextProvider;
 
