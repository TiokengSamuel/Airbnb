import React, {useState} from 'react'
import './Banner.css'
import {Button} from "@material-ui/core"

function Banner() {
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className="banner">
            <h1>I am a banner</h1>
            <div className='banner__search'>
                {showSearch && <h1>Show Date Picker</h1>}
               
                <Button variant='outlined' onClick = {() =>
                setShowSearch(!showSearch)}
                className='banner__searchButton'
                >Search Dates</Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and strech your imagination</h1>
                <h5>Plan a different kind of gateway
                    to uncover the hidden gems near you.
                </h5>
                <Button variant='outlined'>
                    Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;
