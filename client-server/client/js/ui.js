console.log('Test 3');
const $renderArea = $(".root")

const renderPosts = ((posts) => {

    $renderArea.html('')
    posts.forEach((post) => {
        const template =
            `<article class="container" postId="${post.id}">
                <h2 class="title">${post.title}</h2>
                <p class="intro">${post.infoUser}</p>
            </article><br>`;
        console.log(template);

        $renderArea.append(template);
    });
})


export {
    renderPosts
}