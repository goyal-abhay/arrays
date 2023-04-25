let find = (elements,cb) => {
    let k;
    for (let index=0; index<elements.length; index++){
        k = cb(elements[index]);
        if (k) return elements[index];
        else return undefined;
    }
}

module.exports = find;