import React, { Component } from 'react';
import "./style.css";





class Header extends Component {

  

    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div className="Header">
                <p>INGREDIENTES</p>
                <h1>{this.props.name}</h1>
                <button className="all" id="all">Seleccionar todo</button>
			    <button className="nothing">Deseleccionar todo</button>
            </div>
            
         );
    }
}
 
export default Header;