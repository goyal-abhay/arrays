let find = (elements,cb) => {
    let k;
    for (let i=0; i<elements.length; i++){
        k = cb(elements[i]);
        if (k) return elements[i];
        else return undefined;
    }
}

module.exports = find;