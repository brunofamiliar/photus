import loadLayout from './js/layout.js';

const start = (photus, options) => {
    
    const {
        existsKey,
        appendContentRoot,
        existsImages
    } = photus;

    return Promise.resolve(options)
        .then((op) => { return existsImages(existsKey, op) })
        .then(loadImages)
        .then((images) => { return loadLayout(options.style, images) })
        .then(appendContentRoot)
}

function loadImages(options){
    if(options === null || options === 'undefined' || !options.images.length)
        return null;

    const { style, images } = options;
     
    const arrayImages = images.map(({path, name}, index) => {

        const img = document.createElement('img');
        
        img.src = path
        img.alt = name

        const borderRadius = (() => {
            let borderRadius = '';
    
            style.borderRadius.forEach((border, index) => {
                if(index < 3)
                    borderRadius += border + 'px ';
            })
    
            return borderRadius;
        })()

    const cardIsBiggerThanTheContainer = style.gap ? 
    ((style.cardSize * style.columns) + (style.gap * style.columns)) > style.contentWidth :    
    ((style.cardSize * style.columns) + style.columns) > style.contentWidth;

    const cardSize = (style.cardSize && cardIsBiggerThanTheContainer) ?
                        `calc(${ style.contentWidth / style.columns }px - 2px)` :
                        `${(style.gap) ? (style.cardSize - style.gap) : style.cardSize}px` 
                        
        img.style.setProperty('--border-radius', borderRadius)
        
        if(style.cardSize)
            img.style.setProperty('--card-size', cardSize)

        img.className = 'pht__images';
        
        return img
    })

    return arrayImages 
}

const grid = {
    name: "grid",
    start
}

export default grid;
