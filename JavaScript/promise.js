const axios = require('axios');
function fun1() {
    return new Promise(function (resolve, reject) {
        console.log("into Promice Funtion fun()");
        if (true) {
            return resolve("pass resove comment");
        }

        return reject("passed reject");


    })
}

const promise = fun1()

// promise
//     .then(result => result+'  !!!!!!!!')
//     .catch(err => err+'  @@@@@@@')
//     .then(result => console.log(result+ '??????'))

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'HII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Rookii')
})

// Promise.all([promise,promise2,promise3])
// .then(val=> console.log(val))



const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
    const arrayPromise = urls.map(url => axios
        .get(url));
    for await (let request of arrayPromise) {
        const data = await request;
        console.log(data);
    }
    // console.log(arrayPromise)

}

getData()