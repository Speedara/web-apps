var $rootEle = document.querySelector('.root');
var $searchInput = document.querySelector('#input');

function getSearchInput() {
    return $searchInput.value
}

//display data
function displayData(dataArr) {


    $rootEle.innerHTML = "";
    if (!$searchInput) {
        return "Input is empty";
    }

    for (var i = 0; i < 6; i++) {
        var aEle = document.createElement("a");
        aEle.setAttribute("href", "#");
        aEle.className = "myStyle";
        var pEle = document.createElement("p");
        var TextNode = document.createTextNode(dataArr.items[i].login);
        pEle.appendChild(TextNode);
        aEle.appendChild(pEle);
        $rootEle.appendChild(aEle);

        var images = document.createElement("img");
        images.setAttribute("src", dataArr.items[i].avatar_url);
        aEle.appendChild(images);
    }
}

function showRepos(data) {

    var repos = data;

    repos.forEach(function (user) {
        var user_repos = user.repos_url;

        $('.root').append('div class="inner-repos"');
        $('.inner-repos').append('<p>' + user.name + '</p>')
    })

}

export {
    getSearchInput,
    displayData,
    showRepos
}
