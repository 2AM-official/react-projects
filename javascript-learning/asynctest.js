const delay = ms => new Promise(res => setTimeout(res, ms));

const asyncWorker1 = async () => {
    await delay(5000);
    console.log("F");
}

const mainWorker = async () => {
    console.log("A");
    asyncWorker1()
        .then(() => {
            console.log("B");
            let asyncWorker2 = async () => {
                await delay(5000);
                console.log("C");
            }
            asyncWorker2();
            console.log("D");
    })
    console.log("E");
    return 
}

// const mainWorker = async () => {
//     console.log("A");
//     let asyncWorker = async () => {
//         await delay(2000);
//         console.log("1");
//     }
//     let asyncWorker2 = async () => {
//         await delay(1000);
//         console.log("2");
//     }
//     asyncWorker2();
//     asyncWorker();
//     console.log("E");
//     return
// }

mainWorker();