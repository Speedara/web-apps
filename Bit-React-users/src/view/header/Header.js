import React from 'react'
import './Header.css'

const Header = (props) => {

    return (
        <header className="header">
            <h1>{"Bit Persons"}</h1>
            <span>
                <a href="#" onClick={props.about}>About</a>
                <a onClick={props.onReload} className="refreshButton" href="#"><i className="fas fa-redo-alt"></i></a>
                {
                    props.GridOrList
                        ? <a onClick={props.onClickEvent} href="#" className="buttonList"><i className="fa fa-list" aria-hidden="true"></i></a>
                        : <a onClick={props.onClickEvent} href="#" className="gridList"><i className="fa fa-th" aria-hidden="true"></i></a>
                }
            </span>
        </header>
    )
}

export default Header;