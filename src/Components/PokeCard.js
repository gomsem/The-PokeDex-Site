import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/nes.css/css/nes.css'
import '../App.css';
import PokeModal from './PokeModal';

class PokeCard extends Component
{
    constructor(props){
        super(props);
        this.state={
        name: '', 
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    };
}

    componentDidMount(){
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
        
        this.setState({
            name,
            imageUrl,
            pokemonIndex: this.pokemonIndex
        });

        console.log(this.props.id);

    }

    render(){
        return(
            <div className="col-md-3 col-sm-6 mb-5">
                <button type="button" class="nes-btn is-warning" data-toggle="modal" data-target={`#exampleModalCenter${this.props.id}`} onclick="document.getElementById('dialog-rounded').showModal();">
                        <h5 className="letter-size">{this.state.pokemonIndex}</h5>
                            <center><img className="card-image"
                            onLoad={() => this.setState({ imageLoading: false })}
                            onError={() => this.setState({ toManyRequests: true })}
                                src={this.state.imageUrl}/></center>
                        <h6 className="letter-size">
                            {this.state.name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                            .join('')}
                        </h6>
                </button>
                <PokeModal key={this.props.id} id={this.props.id}/>
            </div>
        );
    }
}

export default PokeCard;