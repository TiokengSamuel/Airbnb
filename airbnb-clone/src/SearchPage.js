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
                description="1 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$177 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studios Appartments"
                description="4 guest - 4 bedroom - Free parking  - Washing Machine"
                star={3.8}
                price="$35 / night"
                total="$207 total"
            />

            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peacefull"
                description="3 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Dry Cleaning"
                star={5.0}
                price="$60 / night"
                total="$450 total"
            />

            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peacefull"
                description="3 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Dry Cleaning"
                star={5.0}
                price="$60 / night"
                total="$450 total"
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPTTxQPMcBh7SPzLFactXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="30min to Oxford University"
                description="1 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.1}
                price="$55 / night"
                total="$320 total"
            />
        </div>
    )
}

export default SearchPage
