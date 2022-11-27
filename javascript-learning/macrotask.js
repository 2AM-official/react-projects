console.log("1");
setTimeout((() => {
    console.log("3");
    setTimeout((() => {console.log("4")}), 1000)
}), 1000)
setTimeout((() => {console.log("5")}), 1000)
console.log("2");