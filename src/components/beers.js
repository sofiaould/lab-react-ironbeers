import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';


class Beers extends Component{
    state = {
        beers:[]
    }
    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response =>{
            this.setState({beers: response.data})

        })
    }
    render(){
        return(
<div>
    {this.state.beers.map((beer)=>{
        return(
            <div>
            <img src={beer.image_url} />  
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            </div>
        )

    })}
       < Nav/>  
</div>
        )
    }
   
}

export default Beers