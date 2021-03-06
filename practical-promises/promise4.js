// Modify the app so it prints a message that all promises are completed.

let arrayOfPromises = [];
for (let id = 0; id < 100; id++) {

    const delay = Number.parseInt(Math.random() * 500)

    const p = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(`id: ${id} time: ${delay}`)
        }, delay);
    })
        .then((result) => {
            return result
        })

    arrayOfPromises.push(p)

}


Promise.all(arrayOfPromises)
    .then((data) => {
        console.log(data);
        console.log('All Promises are created');
    })
