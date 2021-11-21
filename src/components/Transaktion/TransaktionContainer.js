import { onSnapshot, collection } from '@firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../../Service/firebase'
import TransaktionItem from './TransaktionItem'
import { useAuth } from '../../contexts/AuthContext'

export default function TransaktionDB() {
    const [finance, setFinance] = useState([])
    const[showItems,setShowItems] = useState(7)
    const[counter,setCounter] = useState(0)
    const { currentUser } = useAuth()
    // console.log(finance)
    useEffect(
        () => 
            onSnapshot(collection(db, "finance"),(snapshot) => 
                setFinance(snapshot.docs.map((doc) => doc.data()))
            ),
        []
    );  
    //Sortier Funktion
    function compare( a, b ) {
        if ( a.itemTimestamp > b.itemTimestamp ){
          return -1;
        }
        if ( a.itemTimestamp < b.itemTimestamp ){
          return 1;
        }
        return 0;
      }
    finance.sort(compare)
    return (
        <div className="transaktionContainer">
               <div className="transaktionHeader">
            <h3 className="transaktionTitle">Letzten Transaktionen</h3>
            <p onClick={()=>setShowItems(finance.length)}>Show full</p>
            </div> 
            {finance.map((elt) => (elt.user===currentUser.email&&counter<showItems?
                <TransaktionItem  key={elt.id} 
                income={elt.category=='Gehalt'||elt.category=='Sonstige Einnahmen'? true:false} 
                description={elt.description} 
                date={`${elt.date.slice(8,10)}.${elt.date.slice(5,7)}.${elt.date.slice(0,4)}  ${elt.date.slice(11,16)}`} 
                value={elt.category=='Gehalt'||elt.category=='Sonstige Einnahmen'?elt.amount:`-${elt.amount}`}/>:null
            ))}
            {/* {finance.map((elt) => (elt.user===currentUser&&counter<=showItems+1?
            setCounter(counter+1):null
            ))} */}
            <div className="button" onClick={()=>setShowItems(showItems+7)}> 
            MEHR TRANSAKTIONEN
            </div>
        </div>
    );
}