import OptionsPromiseError from './errors/options';
import selectLayout from './ui/index';
import loadImages from './ui/loadImages';
import { existsKey } from './utils/json';
import ConfigOptions from './config/options';

export default function (options){
    return Promise.resolve(options)
            .then(validateOptions)
            .then(normalizeOptions)
            .then(loadImages)
            .then(images => (selectLayout(options, images)))
            .then(appendContentRoot)
}

function validateOptions(options){
    
    const optionsTypeOf = typeof options

    if(optionsTypeOf === 'object' || options === null)
        return options

    throw new OptionsPromiseError({
        message: 'Erro ao inicializar o objeto photus.',
        type: 'validation_options_error',
        errors: [{
            message: 'O construtor é facultativo e só pode ser inicializado utilizando um Object',
            service: 'options_valitation'
        }]
    })
}

function normalizeOptions(options){
    if(!existsKey(options, "type"))
        options.type = "grid";

    if(!existsKey(options, "style"))
        options.style = ConfigOptions.grid;
    
    Object.keys(ConfigOptions[options.type]).map((propertie) => {
        if(!existsKey(options.style, propertie))
            options.style[propertie] = ConfigOptions[options.type][propertie]
    })

    console.log("normalizeOptions -> options", options)
    return options;
}

// injecting content into the root tag
function appendContentRoot(content){
console.log("appendContentRoot -> content", content)
    
    const bootstrap = document.getElementById('pht__endpoint');    
    bootstrap.appendChild(content);
}

