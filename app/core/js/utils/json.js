const existsKey = (object, key) => {
    if(object.hasOwnProperty(key))
        if(object[key] !== null && object[key] != "")
            return true;
    return false
}

function existsImages(existsKey, options){
    
    if(!existsKey(options, "images"))
        return null;

    if(!options.images.length)
        return null;

    return options;
}

export {
    existsKey,
    existsImages
}