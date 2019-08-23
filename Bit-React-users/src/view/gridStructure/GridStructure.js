import React from 'react'
import './GridStructure.css'

const GridStructure = (props) => {
    const arrOfUsers = props.users.map((oneUser, i) => {
        // console.log(oneUser)
        return (
            (!props.query) ?
                < div className="userGrid" style={oneUser.isFemale()}>
                    <img src={oneUser.img} alt="whops" />
                    <div>
                        <p className="usernameGrid">{oneUser.setFullName()}</p>
                        <p className="emailGrid">{oneUser.hideEmail()}</p>
                        <p>
                            Birth date {oneUser.setDate()}
                        </p>
                    </div>
                </div > :
                (oneUser.name.startsWith(props.query.toLowerCase()) || oneUser.last.startsWith(props.query.toLowerCase())) ?

                    < div className="userGrid" style={oneUser.isFemale()}>
                        <img src={oneUser.img} alt="whops" />
                        <div>
                            <p className="usernameGrid">{oneUser.setFullName()}</p>
                            <p className="emailGrid">{oneUser.hideEmail()}</p>
                            <p>
                                Birth date {oneUser.setDate()}
                            </p>
                        </div>
                    </div > :
                    null
        )
    })

    //if array has 20 elements with null value, there is no match
    const checked = arrOfUsers.filter(user => user === null)
    return checked.length === 20 ? props.error() : arrOfUsers

}

export default GridStructure;
