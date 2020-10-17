const changeCss = (grid) => {
    let styleGrid = "";

    const columnsStyle = grid.columns ? `
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

export default function (style, images){
    if(!Array.isArray(images))
        return null;

    const section = document.createElement('section');
    
    const gridTemplateColumns = (() => {
        let gridColumns = '';

        for(let i = 0; i < style.columns; i++) {
            gridColumns += '1fr '
        }

        return gridColumns;
    })()

    section.style.setProperty('--grid-template-columns', gridTemplateColumns)
    section.style.setProperty('--max-width-section', style.contentWidth + "px")
    section.style.setProperty('--gap', style.gap + "px")


    section.className = "grid"; 

    images.forEach(item => {    
        section.appendChild(item)
    })

    return section; 
}