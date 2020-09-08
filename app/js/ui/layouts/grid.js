export default function(arrayImages){
    if(!Array.isArray(arrayImages))
        return null;

    const section = document.createElement('section');
    section.style = 'teste'
    arrayImages.forEach(item => {    
        section.appendChild(item)
    })

    return section; 
}