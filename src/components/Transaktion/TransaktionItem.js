import './Transaktion.scss'

const TransaktionItem = (props) => {
    return (
        <div>
            <div className="transaktionItem">
                <div className="circleContainer">
                    <div className="circle" style={{ backgroundColor: props.income ? "#00FF00" : "#F63535" }}>

                    </div>
                </div>
                <ul>
                    <li className="description">
                        {props.description}
                    </li>
                    <li className="date">
                        {props.date}
                    </li>
                </ul>
                <div className="valueContainer">
                    <p className="value">
                        {props.value}€
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default TransaktionItem;