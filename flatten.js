let flatten = (elements) => {

    let nestArr = (m) => {
        if (!Array.isArray(m)){
            return m;
        }
        return nestArr(m[0]);
    }
    let k;
    let ans = [];
    for (let i=0; i<elements.length; i++){
        k = nestArr(elements[i]);
        ans.push(k);
    }
    return ans;
}

module.exports = flatten;