import styled from "styled-components"


export const ScreenContainerHeader = styled.div`
@media screen and (max-width: 524px) {
    position: absolute;
    width: 100%;
    height: 701.83px;
    
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
    left: 31.68%;
    right: 31.68%;
    top: 30.12%;
    bottom: 65.78%;
}
    font-family: 'Montserrat';
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    
`

