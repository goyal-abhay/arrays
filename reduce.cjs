let reduce = (elements, cb, startingValue) => {
    let index = 0;
    if (startingValue === undefined) {
        startingValue = elements[0];
        index = 1
    }
    while (index<elements.length){
        startingValue = cb(startingValue,elements[index],index,elements);
        index++;
    }
    return startingValue;
}

module.exports = reduce;