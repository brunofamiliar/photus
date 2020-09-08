export default function StringToHtml (element, content){
    const dom = document.createElement(element);
        dom.innerHTML = content;
    return dom;
}