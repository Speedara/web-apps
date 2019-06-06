// Create a function which is sending request via AJAX and getting data in JSON format

// When data is received from the server, extract image url, and use that url to create image element and add it to html page.

// There is a button on HTML page!
// Each time when user click the button this function for getting image data is invoked and new picture is added to the page.

const $submit = document.querySelector("#input");
const $body = document.querySelector("body");
const $div = document.querySelector('#images')
const $img = document.createElement("img");

const loadRandomImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => addImg(data))
}

$submit.addEventListener("click", loadRandomImage);

const addImg = (data) => {
    $div.innerHTML = "";
    $img.setAttribute("src", data.message);
    $div.appendChild($img);
}

