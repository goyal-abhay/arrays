let filter = (elements,cb) => {
    let k;
    let arr = [];
    for (let index=0; index<elements.length; index++){
        k = cb(elements[index],index,elements);
        if (k === true) {
            arr.push(elements[index]);
        }
    }
    if (arr.length === 0) return [];
    return arr;
}

module.exports = filter;