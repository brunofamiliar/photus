
export default function({ images }){
    
    if(images === null || images === 'undefined')
        return null;

    const arrayImages =   images.map(({path, name}) => {
        const img = document.createElement('img');
        
        img.src = path
        img.alt = name
        
        return img
    })
  
    return arrayImages 
}