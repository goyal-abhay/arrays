let selfMap = (elements,cb) => {
    let ans = [];
    let k;
    for (let i=0; i<elements.length; i++){
        k = cb(elements[i]);
        ans.push(k);
    }
    return ans;
}

module.exports = selfMap;