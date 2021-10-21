import React from "react";
import { Favourites, Icon } from "./MoviesList.styled";

export function ImagesHover() {
  return (
    <Icon>
      <i class="fas fa-times"></i>
    </Icon>
  );
}

function Remove() {
  return (
    <Favourites>
      <p>Remove from favourites</p>
      <div>
        <ImagesHover />
      </div>
    </Favourites>
  );
}

export default Remove;
