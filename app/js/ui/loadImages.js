import { grid } from '../config/options'

const changeCss = (numberOfImages, marginTop) => {
    let styleImage= "";

    const imageStyle = grid.columns ? ` 
        ${grid.borderRadius && (() => {
            let borderRadius = "border-radius:"
            
            grid.borderRadius.forEach((border)=>{
                borderRadius += ` ${border}px`
            })

            return borderRadius + " ;"
        })()}
        max-width: 100%;
        max-height: 100%;
    ` :
    grid.cardSize ?  `
        ${grid.borderRadius && (() => {
            let borderRadius = "border-radius:"
            
            grid.borderRadius.forEach((border)=>{
                borderRadius += ` ${border}px`
            })

            return borderRadius + " ;"
        })()}
        max-width: ${grid.gap ? (grid.cardSize - grid.gap) : grid.cardSize}px;
        max-height: ${grid.gap ? (grid.cardSize - grid.gap) : grid.cardSize}px;
        ${marginTop && grid.gap && `margin-top: ${grid.gap}px`}
    ` :
    `   ${grid.borderRadius && (() => {
            let borderRadius = "border-radius:"
            
            grid.borderRadius.forEach((border)=>{
                borderRadius += ` ${border}px`
            })

            return borderRadius + " ;"
        })()}
        max-width: calc(${100/numberOfImages}% - 2px);
        max-height: calc(${100/numberOfImages}% - 2px);`  
    ;

    return styleImage += imageStyle;
}

export default function({ images }){
    
    if(images === null || images === 'undefined')
        return null;
    
    const maximumNumberOfImagesPerLine = grid.cardSize && Math.floor(grid.contentWidth / (grid.cardSize - grid.gap))
    
    const arrayImages =   images.map(({path, name}, index) => {

        const img = document.createElement('img');
        

        img.src = path
        img.alt = name
        img.style.cssText = changeCss(images.length, maximumNumberOfImagesPerLine < (index + 1));
        
        return img
    })

    return arrayImages 
}