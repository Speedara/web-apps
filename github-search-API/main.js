var $input = document.querySelector("#input");
var $searchButton = document.querySelector("#search");
var $img = document.querySelector("#img");


$searchButton.addEventListener("click", pullingImagesAndUsers);

function pullingImagesAndUsers() {
    var request = new XMLHttpRequest;
    var inputValue = $input.value;
    var inputValueArray = inputValue.split(" ");

    request.open('GET', 'https://api.github.com/search/users?q=' + $input.value, true);

    request.send();

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            for (var i = 0, j = 1; i < data.length; i++ , j++) {
                document.querySelector("#img" + j).setAttribute("src", data[i].avatar_url); //Dynamic $Variable and URL      
                if (j === 6) {
                    break;
                }
            }
            console.log(data);
        } else {
            return "Error";
        }
    }

}