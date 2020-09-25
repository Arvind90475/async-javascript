const promiseDemo = (value) => {
    return new Promise((resolve, reject) => {
        if (value > 0) {
            resolve('promise 1 resolved');
        } else {
            reject('promise 1 rejected');
        }
    });
}
const promiseDemo2 = (value2) => {
    return new Promise((resolve, reject) => {
        if (value2 > 0) {
            resolve('promise 2 resolved');
        } else {
            reject('promise 2 rejected');
        }
    });
}

// the then() recieves two callbacks first one is when promise resolves and second one when promise rejects

// instead the second callback is replaced with another method .catch which takes a callback which runs when promise is rejected
promiseDemo(56).then((data) => {
    console.log(data);
    return promiseDemo2(-12);
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})