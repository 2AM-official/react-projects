
async function async1() {
    console.log('async1 start');
    new Promise((resolve) => {
        console.log('async2');
    }).then(() => {
        console.log('async1 ends')
    })
}
 
async function async2() {
    console.log('async2');
}
 
console.log('script start');
 
setTimeout(()=>{
    console.log('setTimeout');
},0)
 
async1();
 
new Promise((resolve)=>{
    console.log('promise1');
    resolve();
}).then(()=>{
    console.log('promise2');
});
 
