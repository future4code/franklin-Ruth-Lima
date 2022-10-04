import styled from "styled-components"


export const ScreenContainerHeader = styled.div`
@media screen and (max-width: 524px) {
    
    width: 100%;
    height: 701.83px;
    
} 
@media screen and (min-width: 525px) {
    position: absolute;
    width: 613px;
    height: 1080px;
    left: 0%;
    right: 61.69%;
    top: 0%;
    bottom: 0%;
}

background:  ${ props => props.category === 'MegaSena' ? '#6BEFA3'
                 : props.category  === 'Quina' ? ' #8666EF '
                 : props.category ===  'LotoFacil' ? ' #DD7AC6 '
                 : props.category ===  'LotoMania' ? ' #FFAB64 '
                 : props.category ===  'TimeMania' ? ' #5AAD7D '
                 : props.category ===  'DiaDeSorte' ? ' #BFAF83 '
                 : 'white' };
    
`

export const NameStyle = styled.p`
@media screen and (max-width: 524px){
    position: absolute;
    width: 192px;
    height: 37px;
    left: 31.68%;
    right: 31.68%;
    top: 30.12%;
    bottom: 65.78%;
}

@media screen and (min-width: 525px){
    position: absolute;
    width: 245.17px;
    height: 32.98px;
    left: 25%;
    right: 20%;
    top: 45.5%;
    bottom: 48.52%;
}
    font-family: 'Montserrat';
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    text-align: center;

`

export const Logo = styled.img`
@media screen and (max-width: 524px) {
    position: absolute;
    width: 63.98px;
    height: 62.4px;
    left: 43.91%;
    right: 43.88%;
    top: 21.9%;
    bottom: 71.19%;
}

@media screen and (min-width: 525px) {
    position: relative;
    width: 59.29px;
    height: 55.31px;
    left: 15%;
    right: 90.31%;
    top: 47.41%;
    bottom: 47.47%;
}

` 