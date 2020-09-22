const existsKey = (object, key) => {
    if(object.hasOwnProperty(key))
        if(object[key] !== null && object[key] != "")
            return true;
    return false
}

export {
    existsKey
}