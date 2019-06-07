console.log('Test 1');

const baseUrl = `http://127.0.0.1:3001`;
function getPosts() {
    console.log(baseUrl);

    return fetch(baseUrl)
        .then(response => response.json())
        .then((posts) => posts)
};


export {
    getPosts
}