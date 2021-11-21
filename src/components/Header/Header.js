import './Header.scss'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {useState} from "react";


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            isOpen:false,
         
         }
  
    }
    handleIsOpen= () => { //toggle um die sidebar zu öffnen und zu schließen 
        this.setState({isOpen:!this.state.isOpen});
    }
    reset= () => { //3 Funktionen die onClick dafür sorgen ,dass das aktive div rot wird und die anderen transparent
        this.setState({isOpen:false});
    }
    
    render() { 
   
        return ( 
            <div className="NavElement">
                <section className="menu">
                <div className="hamburger" 
                onClick={this.handleIsOpen} style={{display:this.state.isOpen?'none':'block'}}>
                    ☰
                </div>
                <h3 className="HeaderH3">{this.props.title}</h3>
                </section>
            
            <div className='sidebar'style={{width:this.state.isOpen?'70vw':'0vw'}}>
            
                <div className="closeButton" 
                onClick={this.handleIsOpen} style={{display:this.state.isOpen?'block':'none'}}>
                    ✕
                </div>
                <div className="button_container">
                <Link to="/home" >
                    <div className="homeButton" 
                    onClick={this.reset} 
                    >
                            <p className="sideText">
                                {this.state.isOpen ?'Home':''}
                            </p>
                                 
                            </div>
                </Link>
                <Link to="/add">
                    <div className="addButton" onClick={this.reset} 
                    >
                            <p className="sideText">
                                {this.state.isOpen ?'Einnahmen':''}
                            </p>
                    </div>
                </Link>
                <Link to="/charts">
                    <div className="chartsButton" onClick={this.reset} 
                    style={{}}>
                            <p className="sideText">
                                {this.state.isOpen ?'Charts':''}
                            </p>
                    </div>
                </Link>
                <Link to="/">
                    <div className="addedButton" onClick={this.reset} 
                    style={{}}>
                            <p className="sideText">
                                {this.state.isOpen ?'Logout':''}
                            </p>
                    </div>
                </Link>
                </div>
                
                </div>
            </div>
         );
    }
}
export default Header;

// const Header = (props) => {

//     const [isOpen, setState] = useState(false);
  
//     return ( 
//         <div className="NavElement">
//             <section className="menu">
//             <div className="hamburger" 
//             onClick={setState({isOpen:!isOpen})} style={{display: isOpen?'none':'block'}}>
//                 ☰
//             </div>
//             <h3>{props.title}</h3>
//             </section>
        
//         <div className='sidebar'style={{width: isOpen?'70vw':'0vw'}}>
        
//             <div className="closeButton" 
//             onClick={setState({isOpen:!isOpen})} style={{display: isOpen?'block':'none'}}>
//                 ✕
//             </div>
//             <div className="button_container">
//             <Link to="/home" >
//                 <div className="homeButton" 
//                 onClick={setState({isOpen:false})} 
//                 >
//                         <p className="sideText">
//                             { isOpen ?'Home':''}
//                         </p>
                             
//                         </div>
//             </Link>
//             <Link to="/add">
//                 <div className="addButton" onClick={setState(false)} 
//                 >
//                         <p className="sideText">
//                             { isOpen ?'Einnahmen':''}
//                         </p>
//                 </div>
//             </Link>
//             <Link to="/charts">
//                 <div className="chartsButton" onClick={setState({false})} 
//                 style={{}}>
//                         <p className="sideText">
//                             { isOpen ?'Charts':''}
//                         </p>
//                 </div>
//             </Link>
//             <Link to="/charts">
//                 <div className="addedButton" onClick={setState({false})} 
//                 style={{}}>
//                         <p className="sideText">
//                             { isOpen ?'Logout':''}
//                         </p>
//                 </div>
//             </Link>
//             </div>
            
//             </div>
//         </div>
//      );
//     }

 
// export default Header;