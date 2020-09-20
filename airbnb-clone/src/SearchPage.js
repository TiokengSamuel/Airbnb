import React from 'react'
import './SearchPage.css'
import {Button} from "@material-ui/core";
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined"
                >Cancelation Flexibiblity</Button>
                <Button variant="outlined"
                >Type of place</Button>
                <Button variant="outlined"
                >Price</Button>
                <Button variant="outlined"
                >Rooms and beds</Button>
                 <Button variant="outlined"
                >More filters</Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPTTxQPMcBh7SPzLFactXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="! guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$177 total"
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPTTxQPMcBh7SPzLFactXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="! guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$177 total"
            />
        </div>
    )
}

export default SearchPage
