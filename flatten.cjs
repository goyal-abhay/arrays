let flatten = (elements,depth=1) => {
    let nestArr = (m,d) => {
        if (d===0 || !Array.isArray(m)) return m
        return nestArr(m[0],d-1);
    }
    let k;
    let ans = [];
    for (let index=0; index<elements.length; index++){
        k = nestArr(elements[index],depth);
        if (k!==undefined) ans.push(k);
    }
    return ans;
}

module.exports = flatten;