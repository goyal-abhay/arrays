let selfMap = (elements,cb) => {
    let ans = [];
    let k;
    for (let index=0; index<elements.length; index++){
        k = cb(elements[index]);
        ans.push(k);
    }
    return ans;
}

module.exports = selfMap;