const ninjas = [
    {name: 'shaun', belt: 'black'}, 
    {name: 'mario', belt: 'orange'},
    {name: 'yoshi', belt: 'black'},
    {name: 'luigi', belt: 'green'},
]

// filter method
const blackBelts = ninjas.filter((ninja) => {
    return ninja.belt === 'black'
})

console.log(blackBelts)

// map method
const names = ninjas.map((ninja) => {
    return ninja.name
})

console.log(names)