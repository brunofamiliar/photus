// injecting content into the root tag
const appendContentRoot = (content) => {
    const bootstrap = document.getElementById('pht__endpoint');    
    bootstrap.appendChild(content);
}

export {
    appendContentRoot
};