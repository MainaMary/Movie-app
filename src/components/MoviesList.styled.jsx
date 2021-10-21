import styled from 'styled-components'

export const MovieHolder = styled.div`
display: flex;
justify-content: space-between;
`

export const MovieCards = styled.div`
  position: relative;
  top: 50px;
  transition: transform .2s;
  cursor: pointer;
  border-radius: 5px;
  margin: 40px 0;
  &:hover{
      transform: scale(1.1);
      border: 2px solid #fff;
  }
 img{
      object-fit: cover;
      width: 300px;
      height: 400px;
  }
 `
 export const Overlay= styled.div`
position: absolute;
background-color: rgba(0, 0, 0, 0.7);
text-align: center;
width: 100%;
// padding: 20px 0px;
font-size: 20px;
bottom: 0;
opacity: 0;

${MovieCards}:hover & {
opacity: 1;
}

`
// Favourites
export const Icon = styled.div`
i{
    display: flex;
    margin-top: 20px;
    align-items: center;
    
}
&:hover i{
    color: red;
}
`
export const Favourites= styled.div`
 display: flex;
 justify-content: space-around;
 align: items: center;

 ${MovieCards}:hover & {
     color: red;
 }
`

export const MovieItems = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    
    & > ${MovieHolder} {
        grid-column: span 3;
    }
`

//Search wrapper
 export const SearchWrapper = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 50px;
 `