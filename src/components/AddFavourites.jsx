import React from 'react'
import {Favourites, Icon} from "./MoviesList.styled"

export function ImagesHover(){
    return(
<Icon>
<i className= "fas fa-heart">

 </i>
</Icon>
    )
}

function AddFavourites() {
    return (
        <Favourites>
            <p>Add to favourites</p>
            <div><ImagesHover /></div>
        </Favourites>
    )
}

export default AddFavourites
