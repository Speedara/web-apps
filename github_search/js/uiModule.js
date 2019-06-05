
var $searchBar = $('.search-bar');
var $resultArea = $('.results')
var $searchResult = $('.user');
var $clickOnSearchResult;

function getSearchBarData() {
    return $searchBar.val();
};

function displayUsers(usersArr) {

    $resultArea.html('');

    if (!usersArr.length) {
        $resultArea.append('<p>No results!</p >');
    };

    usersArr.forEach(function (post) {
        $resultArea.append('<a href="' + post.html_url + '">' + '<span class="user"><img src="' + post.avatar_url + '" alt=""></img>' + '<h3 class="username">' + post.login + '</h3></span>' + '</a>');

    });

};

export {
    getSearchBarData,
    displayUsers

}