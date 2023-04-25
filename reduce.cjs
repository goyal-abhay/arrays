let reduce = (elements, cb, startingValue) => {
    for (let index=0; index<elements.length; index++){
        if (startingValue === undefined) {
            cb(elements[0],elements[index]);
        }
        else {
            cb(startingValue,elements[index]);
        }
    }
}

module.exports = reduce;