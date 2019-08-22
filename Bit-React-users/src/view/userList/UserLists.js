import React from 'react';
import './UserList.css'

const UserLists = (props) => {

    const arrOfUsers = props.users.map((oneUser, i) => {
        return (
            (!props.query) ?
                <div className="user" key={i} style={oneUser.isFemale()}>
                    <img src={oneUser.img} alt="whops" />
                    <div>
                        <p>{oneUser.setFullName()}</p>
                        <i className="fa fa-envelope" aria-hidden="true">   email: {oneUser.hideEmail()}</i>
                        <p>
                            <i className="fa fa-birthday-cake" aria-hidden="true">  {oneUser.setDate()}</i>
                        </p>
                    </div>
                </div> :
                (oneUser.name.startsWith(props.query.toLowerCase()) || oneUser.last.startsWith(props.query.toLowerCase())) ?
                    <div className="user" key={i} style={oneUser.isFemale()}>
                        <img src={oneUser.img} alt="whops" />
                        <div>
                            <p>{oneUser.setFullName()}</p>
                            <i className="fa fa-envelope" aria-hidden="true">   email: {oneUser.hideEmail()}</i>
                            <p>
                                <i className="fa fa-birthday-cake" aria-hidden="true">  {oneUser.setDate()}</i>
                            </p>
                        </div>
                    </div> :
                    false
        )
    })
    return arrOfUsers;
}
export default UserLists;
