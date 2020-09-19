import React from 'react'
import './Search.css'
import "react-date-range/dist/style.css";
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const  [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    return (
        <div className='search'>
            
        </div>
    )
}

export default Search
