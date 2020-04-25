import React, { Component } from 'react';
import "./style.css";




class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
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

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        console.log(value); 
        const name = target.name; 
         this.setState({
             ...this.state,
             recipe: {
                 ...this.state.recipe,
                 [name]: value,
             }
         })  
    
    }



    render() { 
        const { info } = this.props;
        return ( 
           
         <div className="Main">
             <form className="form-control">
              {info.map((item) => {
               return (
                <div className="products" id="ingredientes" key={item.product}>
                <input value="checked" onChange={this.handleChange} name="prefer"  type="checkbox"className="input-checkbox"/>
                <p className="item">{ item.items }</p> 
                <p>{item.product}</p>
                <p className="brand">{item.brand}</p>
                <p className="quiatity">{item.quantity}</p>
                <h5 className="price">{item.price} {this.props.currency}</h5>
                </div>
                   )
              })}
             </form>
        </div> 
      
        );
    }
}
 
export default Main;

