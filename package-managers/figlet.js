var figlet = require('figlet');
const figletText = () => {
    return figlet.textSync("Frontend Bootcamp")
}

module.exports = { figletText }