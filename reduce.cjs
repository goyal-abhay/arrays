let reduce = (elements, cb, startingValue) => {
    for (let index=0; index<elements.length; index++){
        if (startingValue === undefined) {
            cb(elements[0],elements[index],index,elements);
        }
        else {
            cb(startingValue,elements[index],index,elements);
        }
    }
}

module.exports = reduce;