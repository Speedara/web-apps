import * as ui from './ui.js'
import * as data from './data.js'

const $searchButton = document.querySelector("#search");
// var $aEle = document.querySelector(".myStyle");


function setupEventListener() {
    $searchButton.addEventListener("click", onSearch);
}

function onSearch(params) {

    var searchQuery = ui.getSearchInput()

    data.preparingTheRequest(searchQuery)
        .then((dataArr) => {
            ui.displayData(dataArr)

            clickEventListener()
        })

}

function clickEventListener() {
    $('a').click(function () {
        // e.preventDefault();

        var userName = $(this).find('p').text();

        data.getRepos(userName)
            .then((data) => {

                ui.showRepos(data);
            })
    })
}


// console.log(data.fetchPosts(searchQuery));

function init() {
    setupEventListener();
}

export {
    init
}