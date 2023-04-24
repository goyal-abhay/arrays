
let each = (elements,cb) => {
    if (!Array.isArray(elements)) {
        return [];
    }
    for (let i=0; i<elements.length; i++){
        cb(elements[i],i);
    }
}

moule.exports = each;