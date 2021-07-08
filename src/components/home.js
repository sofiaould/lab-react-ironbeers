import React from 'react'
import { Link } from 'react-router-dom'

 const Home = () => {

    return (
        <div>
            <Link to='/beers'>
                <h1>Beers</h1>
                <img src='../assets/beers.png'></img>
            </Link>
            <Link to='/randomBeers'>
            <h1>RandomBeers</h1>
            <img src='../assets/random-beer.png'></img>
            </Link>
            <Link to='/newBeers'>

            <h1>NewBeers</h1>
            <img src='../assets/new-beer.png'></img>
            </Link>
        </div>

    )
}

export default Home