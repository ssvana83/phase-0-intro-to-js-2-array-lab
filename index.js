const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    console.log (name)
    cats.push(name)
}

function destructivelyPrependCat(name) {
    console.log (name)
    cats.unshift(name)
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function appendCat(name) {
    let NewArray = [...cats]
    NewArray.push(name)
    return NewArray
}

function prependCat(name) {
    let NewArray = [...cats]
    NewArray.unshift(name)
    return NewArray
}

function removeLastCat() {
    let NewArray = [...cats]
    NewArray.pop()
    return NewArray
}

function removeFirstCat() {
    let NewArray = [...cats]
    NewArray.shift()
    return NewArray
}
