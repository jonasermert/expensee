import { createContext, useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../Service/firebase';
import { useAuth } from './AuthContext';

export const AmountContext = createContext(null);

const categories = {
  gehalt: 'Gehalt',
  sonstigeEinnahmen: 'Sonstige Einnahmen',
  lebensmittel: 'Lebensmittel',
  shopping: 'Shopping',
  wohnen: 'Wohnen',
  mobilitaet: 'Mobilität',
  freizeit: 'Freizeit',
  restaurant: 'Restaurant',
  versicherung: 'Versicherung',
  geldanlage: 'Geldanlage',
  sonstigesSparen: 'Sonstiges Sparen',
  sonstiges: 'Sonstiges',
};

const sumCategories = (finance, selectedCategories) =>
  finance.reduce(
    (sum, item) => selectedCategories.includes(item.category) ? sum + Number(item.amount || 0) : sum,
    0,
  );

const formatAmount = (amount) => amount.toFixed(2);

const AmountContextProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [finance, setFinance] = useState([]);

  useEffect(() => {
    if (!currentUser?.email) {
      setFinance([]);
      return undefined;
    }

    const financeQuery = query(
      collection(db, 'finance'),
      where('user', '==', currentUser.email),
    );

    return onSnapshot(financeQuery, (snapshot) => {
      setFinance(snapshot.docs.map((document) => ({ id: document.id, ...document.data() })));
    });
  }, [currentUser?.email]);

  const amounts = useMemo(() => {
    const byCategory = Object.fromEntries(
      Object.entries(categories).map(([key, category]) => [key, formatAmount(sumCategories(finance, [category]))]),
    );

    return {
      ...byCategory,
      einkommen: formatAmount(sumCategories(finance, [categories.gehalt, categories.sonstigeEinnahmen])),
      ausgaben: formatAmount(sumCategories(finance, [
        categories.lebensmittel,
        categories.shopping,
        categories.wohnen,
        categories.mobilitaet,
        categories.freizeit,
        categories.restaurant,
        categories.versicherung,
      ])),
      sparen: formatAmount(sumCategories(finance, [categories.geldanlage, categories.sonstigesSparen])),
      sonstiges: formatAmount(sumCategories(finance, [categories.sonstiges])),
    };
  }, [finance]);

  return (
    <AmountContext.Provider value={amounts}>
      {children}
    </AmountContext.Provider>
  );
};

export default AmountContextProvider;
