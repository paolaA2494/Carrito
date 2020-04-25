import React, { Component } from 'react';
import "./style.css";
import Swal from "sweetalert2";
import Main from './Main';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipe: {
                name: "",
                shippingCost: "",
                currency: "",
                ingredients: [
                  {
                    i:"",
                    product: "",
                    brand: "",
                    items: "",
                    quantity: "",
                    price: ""
                  }
                ]
               }
         }
    }

    _Alerta() {
        Swal.fire(
          "Su pedido se ha registrado, con éxito",
          "You clicked the button",
          "success"
        );
      }
     
    
      calcular = () => {
        const precios = this.state.product.map((ingredients) => {
          return ingredients.price
        });
    
        let subtotal = null;
    
        if (precios.length > 0) {
          subtotal = precios.reduce((sum, x) => sum + x);
        } else {
          subtotal = 0;
        }
    }
   
    
    render() { 
       
        return ( 
        
        <div className="Footer">
            <div>
            <p>items</p>
            <h4>Subtotal { this.props.subtotal }</h4>
            <h4>Gastos de Envio {this.props.shippingCost}</h4>
            <h2>Total $ </h2>
            <button  onClick={this._Alerta} className="btn" id="comprar">Comprar ingredientes:$  </button>
            </div>
        </div> 
        
        
        );
    }
}
 
export default Footer;