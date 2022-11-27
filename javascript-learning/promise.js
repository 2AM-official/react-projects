const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, 'Goodbye'));

Promise.all([promise1, promise2, promise3]).then(values => console.log(values))
//getPosts();

// createPost({ title: 'Post Three', body: 'This is post three'}, getPosts)
//     .then(getPosts)
//     .catch(err => console.log(err));

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 3) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in the then '+message)
// }).catch((message) => {
//     console.log('This is in the catch'+message)
// })

// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
// })

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })