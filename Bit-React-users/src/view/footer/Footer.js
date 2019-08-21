import React from 'react'
import './Footer.css'


const Footer = (props) => {
    console.log(props.stayBottom)
    return (
        <footer style={(!props.stayBottom) ?
            { "position": "relative" } :
            { "position": "absolute" }}>
            &copy; 2018 Copyright BIT
        </footer>
    )
}

export default Footer;