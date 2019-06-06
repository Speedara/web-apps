var dataArray = [];

// prepares the request!
function preparingTheRequest(searchStr) {
    const requestUrl = 'https://api.github.com/search/users?q=' + searchStr;
    return fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson;
        });
}

function searchUsers() {

    var searchedUsers = [];
    return searchedUsers
}

function getRepos(userName) {
    const requestRepos = "https://api.github.com/users/" + userName + "/repos";
    return fetch(requestRepos)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            return myJson;
        });
}

export {
    preparingTheRequest,
    searchUsers,
    dataArray,
    getRepos
}
