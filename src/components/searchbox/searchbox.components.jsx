import React from "react"
import "./searchbox.components.css"

export const SearchBox=({placeholder,handleChange}) => {
    return(
        <input 
        class="search"
        type="search" 
        placeholder={placeholder}
        onChange={handleChange}>

        </input>
    
        )


}
