import { User } from '../entities/User';
import axios from 'axios';

const fetchUsers = () => {
    const url = "https://randomuser.me/api/?results=20";

    return axios.get(url)
        .then((response) => response.data)
        .then((data) => {
            const apiUsers = data.results;
            const users = apiUsers.map((user) => {
                return new User(user.name.first, user.name.last, user.email, user.picture.large, user.dob.date, user.gender)
            })
            return users;
        })
}

export default fetchUsers;