// Create a sample promise that:
// Resolves to current time
// Prints received time in console when resolved(in then())




const time = new Promise((resolve, reject) => {
    let time = new Date();
    resolve(time);
})
    .then(d => console.log(d))
   // .catch(() => console.log("rejected because of reasons..."));
