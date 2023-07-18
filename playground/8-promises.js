const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([10, 11, 12]);
        reject("Things went wrong!");
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log("Success! -> ", result);
}).catch((error) => {
    console.log("Error! -> ", error);
})

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

// add(2, 3).then((sum) => {
//     console.log(sum);
//     add(sum, 4).then((sum2) => {
//         console.log(sum2);
//     }).catch((error) => {
//         console.log(error);
//     })
// }).catch((error) => {
//     console.log(error);
// });


add(10, 10).then((sum) => {
    console.log(sum);
    return add(sum, 20);
}).then((sum2) => {
    console.log(sum2);
}).catch((error) => {
    console.log(error);
})