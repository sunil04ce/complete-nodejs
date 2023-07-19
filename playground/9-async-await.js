const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject("Numbers must be a positive number.");
            }
            resolve(a + b);
        }, 2000);
    });
}

const doWork = async () => {
    // throw new Error('Something went wrong!');
    // return "Jack";
    const sum = await add(2, 90);
    const sum2 = await add(sum, 30);
    const sum3 = await add(sum2, -20);
    return sum3;
}

// console.log(doWork());
doWork().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log("error : ", error);
})