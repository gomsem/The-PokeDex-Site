import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import PokeCard from './PokeCard';

class PokeList extends Component {

    state ={
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200',
        pokemon: null
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['results'] });
    }

    render(){
        return(
                <div>
                {this.state.pokemon ? (
                    <div className="row">
                        {this.state.pokemon.map((pokemon, index)=> 
                            <PokeCard
                                key={pokemon.name}
                                name={pokemon.name}
                                id={index+1}
                                url={pokemon.url}/>
                        )}  
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
                </div>
        );
    }
}

export default PokeList;