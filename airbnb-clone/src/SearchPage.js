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
                img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.curbed.com%2F2016%2F12%2F13%2F13933554%2Fairbnb-vacation-rental-alternatives&psig=AOvVaw2rQJwxwvYfqzg-DBBnbUEL&ust=1600687967884000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMD9tMXR9-sCFQAAAAAdAAAAABAD"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$177 total"
            />

            <SearchResult
                img="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.fodors.com%2Fwp-content%2Fuploads%2F2019%2F08%2Fairbnb-hero-.jpg&imgrefurl=https%3A%2F%2Fwww.fodors.com%2Fnews%2Ftrip-ideas%2Fread-this-before-you-book-an-airbnb-or-vacation-rental&tbnid=Z3j9dFTuAxjM-M&vet=10CBUQxiAoBGoXChMIwP20xdH36wIVAAAAAB0AAAAAEAc..i&docid=jeoYyYkaqbK0iM&w=1800&h=1200&itg=1&q=airbnb%20house%20images&ved=0CBUQxiAoBGoXChMIwP20xdH36wIVAAAAAB0AAAAAEAc"
                location="Private room in center of London"
                title="London Studios Appartments"
                description="4 guest - 4 bedroom - Free parking  - Washing Machine"
                star={3.8}
                price="$35 / night"
                total="$207 total"
            />

            <SearchResult
                img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fskift.com%2F2019%2F04%2F17%2Fairbnb-leads-new-160-million-funding-for-short-term-rental-brand-lyric%2F&psig=AOvVaw2rQJwxwvYfqzg-DBBnbUEL&ust=1600687967884000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMD9tMXR9-sCFQAAAAAdAAAAABAJ"
                location="Private room in center of London"
                title="Spacious Peacefull"
                description="3 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Dry Cleaning"
                star={5.0}
                price="$60 / night"
                total="$450 total"
            />

            <SearchResult
                img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fairbnb-marriott-battle-upstarts-for-short-term-rental-market-11557234000&psig=AOvVaw2rQJwxwvYfqzg-DBBnbUEL&ust=1600687967884000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMD9tMXR9-sCFQAAAAAdAAAAABAO"
                location="Private room in center of London"
                title="Spacious Peacefull"
                description="3 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Dry Cleaning"
                star={3.85}
                price="$90 / night"
                total="$650 total"
            />

            <SearchResult
                img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.curbed.com%2F2016%2F12%2F13%2F13933554%2Fairbnb-vacation-rental-alternatives&psig=AOvVaw2rQJwxwvYfqzg-DBBnbUEL&ust=1600687967884000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMD9tMXR9-sCFQAAAAAdAAAAABAT"
                location="Private room in center of London"
                title="30min to Oxford University"
                description="1 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.1}
                price="$55 / night"
                total="$320 total"
            />

            <SearchResult
                img="https://www.domusweb.it/content/dam/domusweb/it/design/2019/02/18/airbnb-racconta-gli-interni-degli-utenti-che-fanno-tendenza/domus-airbnb-10.jpg.foto.rmedium.jpg"
                location="Private room in center of London"
                title="Rustic Hostel"
                description="1 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing Machine"
                star={3.2}
                price="$40 / night"
                total="$300 total"
            />
        </div>
    )
}

export default SearchPage
