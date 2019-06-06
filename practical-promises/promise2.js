// Create a console app that:
// Creates 100 promises;
// Each promise has its own ID (0..99);
// Each promise is resolved after a random time interval (up to 500ms);
// After being resolved, each promise will log its id in the console.

let arrayOfPromises = [];
for (let id = 0; id < 100; id++) {

    const delay = Number.parseInt(Math.random() * 500)

    const p = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(`id: ${id} time: ${delay}`)
        }, delay);
    })
        .then((result) => {
            console.log(result);
            return result
        })

    arrayOfPromises.push(p)

}


Promise.all(arrayOfPromises)
    .then((data) => {
        // console.log(data);
        console.log('All done');
    })

