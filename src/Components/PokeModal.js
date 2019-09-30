import React, { Component } from 'react';
import Axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/nes.css/css/nes.css';
import '../App.css';

class PokeModal extends Component
{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            pokemonIndex: '',
            type: [],
            ability: [],
            base_experience: '',
            moves: []
        };
    }

    componentDidMount(){
        console.log(this.props.id);
            Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}/`)
            .then(response=> {
                console.log(response)
                this.setState({
                    name: response.data.name,
                    pokemonIndex: response.data.id,
                    type: response.data.types,
                    ability: response.data.abilities,
                    base_experience: response.data.base_experience,
                    moves: response.data.moves
                })
            })
            .catch(error => console.log(error))

        console.log(this.state.name);    
    }

    render(){
        return(
            <fragment>
                <div className="modal fade" id={`exampleModalCenter${this.props.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">
                        <span className="modal-card-name"><center>{this.state.name
                        .toLowerCase()
                        .split(" ")
                        .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                        .join('')}</center></span>
                        </h5>
                    </div>
                    <div className="modal-body">
                        <p className="modal-card-title">ID: </p><span>{this.state.pokemonIndex}</span><br/><br/>
                        <p className="modal-card-title">Type: </p>{this.state.type.map(type => <p>{type.type.name
                        .toLowerCase()
                        .split(" ")
                        .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                        .join('')}</p>)}<br/>
                        <p className="modal-card-title">Ability: </p>{this.state.ability.map(ability => <p>{ability.ability.name
                        .toLowerCase()
                        .split(" ")
                        .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                        .join('')}</p>)}<br/>
                        <p className="modal-card-title">Base Experience: </p><span>{this.state.base_experience}</span><br/><br/>
                        <p className="modal-card-title">Moves: </p>{this.state.moves.map(moves => <p>{moves.move.name
                        .toLowerCase()
                        .split(" ")
                        .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                        .join('')}</p>)}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn nes-btn is-error" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
                </div>
            </fragment>
        )
    }
        
}

export default PokeModal;