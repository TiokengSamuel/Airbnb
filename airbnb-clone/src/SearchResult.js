import React from 'react'
import './SearchResult.css'
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder"

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
    <div className="searchResult">
            <img src ={img} alt=""/>
            <FavouriteBorderIcon
            className="searchResult__heart"/>
        

        <div className='searchResult__info'>
            <div className = 'searchResult__infoTop'>
                <p>{locaton}</p>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
            </div>

            <div className="searchResult__infoBottom">
                <StarIcon className="searchResult__star"
                />
                <p>
                    <strong>{star}</strong>
                </p>
                
            </div>

            <div>
                
            </div>
        </div>
    </div>
    )
}

export default SearchResult
