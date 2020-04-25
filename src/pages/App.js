import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../components/style.css';
import axios from 'axios';


class App extends Component {
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

  
  componentDidMount() {
    axios.get(`https://recipe-rissoto.now.sh/recipe`)
      .then(res => {
        const recipe = res.data;
        console.log(recipe)
        this.setState({ recipe });
      })
  }
  
  


  

  render() {

    console.log(this.state)
    let fullingredients = this.state.recipe.ingredients

    


    return (
      <div className="container">
        <Header 
           name={this.state.recipe.name || "NOMBRE"}
        />
        <Main info={fullingredients} currency={this.state.recipe.currency}  
        />
        <Footer shippingCost={this.state.recipe.shippingCost || "7"}  />
      </div>
    );
  }
}

export default App;

