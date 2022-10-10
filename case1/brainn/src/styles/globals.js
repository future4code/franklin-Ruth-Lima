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

background:  ${ props => props.category === 'mega-sena' ? '#6BEFA3'
                 : props.category  === 'quina' ? ' #8666EF '
                 : props.category ===  'lotofácil' ? ' #DD7AC6 '
                 : props.category ===  'lotomania' ? ' #FFAB64 '
                 : props.category ===  'timemania' ? ' #5AAD7D '
                 : props.category ===  'dia de sorte' ? ' #BFAF83 '
                 : 'white' };
    
`

export const BoxSelect = styled.div`
    @media screen and (max-width: 700px) {
        position: absolute;
        width: 233px;
        height: 51px;
        left: 27.67%;
        right: 27.86%;
        top: 6.98%;
        bottom: 87.38%;
    }


    @media screen and (min-width: 701px) {
        position: absolute;
        width: 215.91px;
        height: 45.2px;
        left: 15%;
        right: 80.51%;
        top: 8.52%;
        bottom: 87.3%;
    }
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
flex-direction: column;
align-items: center;
justify-content: center;


@media screen and (max-width: 700px) {

    position: absolute;
    width: 100%;
    min-height: 465px;
    bottom: 0;
    display: flex;
    

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
    display: flex;
    flex-wrap: wrap;
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
export const NumerosContainer = styled.div`

z-index: 1;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
overflow: hidden;
@media screen and (min-width: 701px) {
    min-width: 100%;
    
}

`

export const NumeroContainer = styled.div`

    border-radius: 50%;
    background-color: #FFFFFF;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 701px) {
    width: 76px;
    height: 76px;
    margin: 14px;
}
    
 @media screen and (min-width: 701px) {
    width: 111px;
    height: 106px;
    margin: 20px;
}

`

export const NumeroStyle = styled.p`
    font-family: 'Montserrat';
    color: black;
    font-style: normal;
    font-weight: 700;
@media screen and (max-width: 701px) {
    font-size: 20px;
    line-height: 24.38px;
    }
@media screen and (min-width: 701px) {
    font-weight: 700;
   font-size: 27px;
   line-height: 32.91px;
}
   
`

export const ConcursoStyle = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;

    @media screen and (max-width: 700px){
    position: absolute;
    left: 36.07%;
    right: 36.26%;
    top: 65%;


    }

    @media screen and (min-width: 701px){
    position: absolute;
    width: 150px;
    left: 18%;
    right: 84.83%;
    top: 86.76%;
    bottom: 11.84%;
    }
    
`

export const TextoFinal = styled.footer`

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #000000;
    z-index: 1;
  

    @media screen and (max-width: 700px){
    max-width: 400px;
    margin: 0;
    position: fixed;
    bottom: 0;
    
    }

    @media screen and (min-width: 701px){
    position: absolute;
    width: 650px;
    bottom: 10%;
    }
`

export const DataConcurso = styled.p`
@media screen and (max-width: 700px) {
    opacity: 0;
    
}
@media screen and (min-width: 701px) {
    opacity: 1;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    
}

`
