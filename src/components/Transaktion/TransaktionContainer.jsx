import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../../Service/firebase'
import TransaktionItem from './TransaktionItem'
import { useAuth } from '../../contexts/AuthContext'

export default function TransaktionDB() {
    const [finance, setFinance] = useState([])
    const[showItems,setShowItems] = useState(7)
    const { currentUser } = useAuth()
    useEffect(() => {
        if (!currentUser?.email) {
            setFinance([])
            return undefined
        }

        const financeQuery = query(
            collection(db, 'finance'),
            where('user', '==', currentUser.email),
        )

        return onSnapshot(financeQuery, (snapshot) => {
            setFinance(snapshot.docs.map((document) => ({ id: document.id, ...document.data() })))
        })
    }, [currentUser?.email])

    const visibleFinance = [...finance]
        .sort((a, b) => Number(b.itemTimestamp || 0) - Number(a.itemTimestamp || 0))
        .slice(0, showItems)

    return (
        <div className="transaktionContainer">
               <div className="transaktionHeader">
            <h3 className="transaktionTitle">Letzten Transaktionen</h3>
            <p onClick={()=>setShowItems(finance.length)}>Show full</p>
            </div>
            {visibleFinance.map((elt) => (
                <TransaktionItem  key={elt.id}
                income={elt.category === 'Gehalt' || elt.category === 'Sonstige Einnahmen'}
                description={elt.description}
                date={`${elt.date?.slice(8,10) || ''}.${elt.date?.slice(5,7) || ''}.${elt.date?.slice(0,4) || ''}  ${elt.date?.slice(11,16) || ''}`}
                value={elt.category === 'Gehalt' || elt.category === 'Sonstige Einnahmen' ? elt.amount : `-${elt.amount}`}/>
            ))}
            {showItems < finance.length && <div className="button" onClick={()=>setShowItems((current) => current + 7)}>
            MEHR TRANSAKTIONEN
            </div>}
        </div>
    );
}
