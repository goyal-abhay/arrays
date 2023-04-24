let filter = (elements,cb) => {
    let k;
    let arr = [];
    for (let i=0; i<elements.length; i++){
        k = cb(elements[i]);
        if (k) {
            arr.push(elements[i]);
        }
    }
    if (arr.length === 0) return [];
    return arr;
}

module.exports = filter;