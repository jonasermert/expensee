import './Collaps.scss'
import { AmountContext } from '../../contexts/AmountContext'
import { useContext } from 'react';
import CollapsItem from './CollapsItem'

const Collapsible = ({ trigger, children }) => (
  <details className="Collapsible">
    <summary className="Collapsible__trigger">{trigger}</summary>
    <div className="Collapsible__contentInner">{children}</div>
  </details>
);

const Collaps = () => {
  const {einkommen,ausgaben,sparen,sonstiges,gehalt,sonstigeEinnahmen,lebensmittel,shopping,wohnen,mobilitaet,freizeit,restaurant,versicherung,geldanlage,sonstigesSparen}=useContext(AmountContext)

  return (
      
      <div className="collapsContainer">
    <section className="Einkommen">
    <Collapsible trigger={`Einkommen: ${einkommen} €`}>
     <CollapsItem  description={'Gehalt'} value={gehalt}/>
     <CollapsItem  description={'Sonstige Einnahmen'} value={sonstigeEinnahmen}/>
    </Collapsible>

    </section>
    <section className='Ausgaben'>
    <Collapsible trigger={`Ausgaben: ${ausgaben} €`} className='Ausgaben'>
     <CollapsItem  description={'Lebensmittel'} value={lebensmittel}/>
     <CollapsItem  description={'Shopping'} value={shopping}/>
     <CollapsItem  description={'Wohnen'} value={wohnen}/>
     <CollapsItem  description={'Mobilität'} value={mobilitaet}/>
     <CollapsItem  description={'Freizeit'} value={freizeit}/>
     <CollapsItem  description={'Restaurant'} value={restaurant}/>
     <CollapsItem  description={'Versicherung'} value={versicherung}/>
    </Collapsible>
    </section>

    <section className='Sparen'>
    <Collapsible trigger={`Sparen: ${sparen} €`} className='Sparen'>
    <CollapsItem  description={'Geldanlage'} value={geldanlage}/>
    <CollapsItem  description={'Sonstiges Sparen'} value={sonstigesSparen}/>
    </Collapsible>
    </section>

    <section className='Sonstiges'>
    <Collapsible trigger={`Sonstiges: ${sonstiges} €`} className='Sonstiges'>
     <CollapsItem  description={'Sonstiges'} value={sonstiges}/>
    </Collapsible>
    </section>
      </div>

  );
};

export default Collaps;
