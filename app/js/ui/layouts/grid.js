const changeCss = (grid) => {
    let styleGrid = "";

    const columnsStyle = grid.columns ? ` display: grid; 
        ${grid.contentWidth ? `max-width: ${grid.contentWidth}px;` : ''}
        column-gap: ${grid.gap}px;
        row-gap: ${grid.gap}px;
        ${
        // set number of columns
        (() => {
            let gridColumns = "grid-template-columns:"

            for(let i = 0; i< grid.columns; i++) {
                gridColumns += ' 1fr'
            }

            return gridColumns + ";"
        })()}
    ` : `
        display: flex;
        justify-content: space-between;
        max-width: ${grid.contentWidth}px;
        ${grid.cardSize && "flex-wrap: wrap"}
    `;

    return styleGrid += columnsStyle;
}

export default function(options, arrayImages){
    if(!Array.isArray(arrayImages))
        return null;

    const section = document.createElement('section');
    section.style.cssText = changeCss(options.style); 
    
    arrayImages.forEach(item => {    
        section.appendChild(item)
    })
    
    return section; 
}