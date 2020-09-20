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
                img="https://cdn.vox-cdn.com/thumbor/tIxDTa_jhWk0Cc0NaT64sSeTaTw=/0x0:2000x1118/920x613/filters:focal(840x399:1160x719):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/52264099/The_Terrace_Sicilian__1_.1497897195.jpg"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$177 total"
            />

            <SearchResult
                img="https://miro.medium.com/max/1000/1*lH5QyWjJ8lLLl-G_POna-Q.jpeg"
                location="Private room in center of London"
                title="London Studios Appartments"
                description="4 guest - 4 bedroom - Free parking  - Washing Machine"
                star={3.8}
                price="$35 / night"
                total="$207 total"
            />

            <SearchResult
                img="https://afar-production.imgix.net/uploads/images/post_images/images/lps7EhRc7P/original_9-airbnb-beach_house-destin-florida.jpg?auto=compress,format&lossless=true&w=845"
                location="Private room in center of London"
                title="Spacious Peacefull"
                description="3 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Dry Cleaning"
                star={5.0}
                price="$60 / night"
                total="$450 total"
            />

            <SearchResult
                img="https://wtsenates.info/wp-content/uploads/2020/04/Marvellous-Beach-Style-Living-Room-Ideas-marvelous-pier-one-window-with-light-blue-walls-and-large-Living-Room-Marvellous-Beach-Ideas-Style-.jpg"
                location="Private room in center of London"
                title="Spacious Peacefull"
                description="3 guest - 1 bedroom - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Dry Cleaning"
                star={3.85}
                price="$90 / night"
                total="$650 total"
            />

            <SearchResult
                img="https://s3.amazonaws.com/images.planndesign.com/article/beach-style-living-room_0.jpg"
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
