import styled from "styled-components"


export const ScreenContainerHeader = styled.div`
@media screen and (max-width: 700px) {
    position: relative;
    width: 100%;
    height: 569px;
    
} 

@media screen and (min-width: 701px) {
    position: absolute;
    width: 38%;
    height: 100%;
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
@media screen and (max-width: 700px){
    position: absolute;
    width: 192px;
    height: 37px;
    left: 31.68%;
    right: 31.68%;
    top: 42.5%;
   
}

@media screen and (min-width: 701px){
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
@media screen and (max-width: 700px) {
    position: absolute;
    width: 63.98px;
    height: 62.4px;
    left: 43.91%;
    right: 43.88%;
    top: 34.75%;
    
}

@media screen and (min-width: 701px) {
    position: relative;
    width: 59.29px;
    height: 55.31px;
    left: 15%;
    right: 90.31%;
    top: 47.41%;
    bottom: 47.47%;
}

` 
export const Body = styled.section`

overflow: hidden;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

@media screen and (max-width: 700px) {

    position: absolute;
    width: 100%;
    height: 465px;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;

    &:before{
            content: '';
            position : absolute ;
            top : 0 ;
            left : 0 ;
            width : 100% ;
            height : 100% ;
            border-radius: 50% 50% 0 0 / 20% 20% 0 0;
            transform: scaleX(1.5);
            background: #EFEFEF;
    }
    
}

@media screen and (min-width: 701px) {
    position: absolute;
    right: 0;
    height: 100%;
    width: 71%;
    

    &:before{
            content: '';
            position : absolute ;
            top : 0 ;
            left : 0 ;
            width : 100% ;
            height : 100% ;
            border-radius: 20% 0 0 20% / 50% 0 0 50%;
            transform: scaleY(1.5);
            background: #EFEFEF;
    }

}
` 

export const NumeroContainer = styled.div`

    width: 76px;
    height: 76px;
    border-radius: 50%;
    background-color: #FFFFFF;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3%;
`

export const NumeroStyle = styled.p`
    font-family: 'Montserrat';
    color: black;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24.38px;
   
`


