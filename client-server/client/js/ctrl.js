import * as ui from './ui.js'
import * as data from './data.js'

console.log('Test 2');

function init() {
    data.getPosts()
        .then(ui.renderPosts)

}


export {
    init
}