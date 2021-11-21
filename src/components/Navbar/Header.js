import './Header.scss'
import {Link, Navigate} from 'react-router-dom'
import {useState} from "react";
import { firebase } from '../../Service/firebase'
import { useAuth } from '../../contexts/AuthContext';


const Header = (props) => {

    const [isOpen, setState] = useState(false);

    const {logout, currentUser} = useAuth()
    const onClickCollect=()=>{
        logout();
        setState(false)

    }  
    return ( 
        <div className="NavElement">
            <section className="menu">
            <div className="hamburger" 
            onClick={()=>setState(true)} style={{display: isOpen?'none':'block'}}>
                ☰
            </div>
            <h3 className="headerTitle">{props.title}</h3>
            </section>
        
        <div className='sidebar'style={{width: isOpen?'70vw':'0vw'}}>
        
            <div className="closeButton" 
            onClick={()=>setState(false)} style={{display: isOpen?'block':'none'}}>
                ✕
            </div>
            <div className="button_container">
            <Link to="/home" >
                <div className="homeButton" 
                onClick={()=>setState(false)}
                >
                        <p className="sideText">
                            { isOpen ?'Home':''}
                        </p>
                             
                        </div>
            </Link>
            <Link to="/add">
                <div className="addButton" onClick={()=>setState(false)} 
                >
                        <p className="sideText">
                            { isOpen ?'Umsätze':''}
                        </p>
                </div>
            </Link>
            <Link to="/charts">
                <div className="chartsButton" onClick={()=>setState(false)}
                style={{}}>
                        <p className="sideText">
                            { isOpen ?'Übersicht':''}
                        </p>
                </div>
            </Link>
            {currentUser && (
                <Link to="/" className="addedButton"  onClick={onClickCollect}
                style={{}}>
                        <p className="sideText">
                            { isOpen ?'Logout':''}
                        </p>
                </Link>)}
            
            
            </div>
        </div>
        </div>
     );
    }

 
export default Header;