function stringLength(string){
    let strlength = string.length;
    if(strlength > 10 || strlength < 1) {
        throw new TypeError('length error');
    }
    return strlength;
}

module.exports = stringLength;