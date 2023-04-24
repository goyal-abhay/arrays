let reduce = (elements, cb, startingValue) => {
    for (let i=0; i<elements.length; i++){
        if (startingValue === undefined) {
            cb(elements[0],elements[i]);
        }
        else {
            cb(startingValue,elements[i]);
        }
    }
}

module.exports = reduce;