function Decoracao(props){
    let isHighlighted = props.verdade

    if(isHighlighted){
        return(
            <p style={{textDecoration: 'underline'}}>paragrafo com estilo se true</p>
        )
    }else {
        return(
            <p>paragrafo com estilo se true</p>
        )
    }
} export default Decoracao