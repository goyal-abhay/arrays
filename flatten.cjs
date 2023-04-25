let flatten = (elements) => {

    let nestArr = (m) => {
        if (!Array.isArray(m)){
            return m;
        }
        return nestArr(m[0]);
    }
    let k;
    let ans = [];
    for (let index=0; index<elements.length; index++){
        k = nestArr(elements[index]);
        ans.push(k);
    }
    return ans;
}

module.exports = flatten;