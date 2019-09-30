import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import LogoImage from './assets/images/pokedex-logo.png';
import PokeList from './Components/PokeList';

class App extends Component
{
  render(){
    return (
      <fragment>
        {/* Master Container */}
        <div className="ultra">
  
          {/* Header */}
          <nav className="navbar navbar-expand-lg">
            <div className="divdex">
              <a href="nav-logo"><img src={LogoImage} alt="LogoDex" className="logodex"/></a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fas fa-bars" id="shownav"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#choose-link">View the Pokemons<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="blank" href="https://pokeapi.co/">Poke-Api.com</a>
                </li>
              </ul>
            </div>
          </nav>
          {/* /Header */}
  
          {/* First Section */}
            <section className="welcome-section" id="nav-logo">
              <div className="container-fluid welcome">
                <div className="row">
                  <div className="col-md-12">
                  </div>
                </div>
              </div>
            </section>
          {/* /First Section */}
  
          {/* Second Section */}
            <section classname="content-section" id="choose-link">
              <div className="container-fluid content">
                <div className="row">
                  <div className="col-md-12">
                   <h1 className="title-content">Choose a Pokemon</h1>
                      <center><div className="content-list"><PokeList/></div></center>
                  </div>
                </div>
              </div>
            </section>
          {/* /Second Section */}
          
        </div>
        {/* /Master Container */}
      </fragment>
    );
  }
}

export default App;
