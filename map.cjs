let selfMap = (elements,cb) => {
    let ans = [];
    let k;
    for (let index=0; index<elements.length; index++){
        k = cb(elements[index],index,elements);
        ans.push(k);
    }
    return ans;
}

module.exports = selfMap;