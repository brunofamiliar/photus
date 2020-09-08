import OptionsPromiseError from './errors/options';
import selectLayout from './ui/index.js';
import loadImages from './ui/loadImages';

export default function (options){
    return Promise.resolve(options)
            .then(validateOptions)
            .then(loadImages)
            .then(images => { return selectLayout(options, images) })
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

// injecting content into the root tag
function appendContentRoot(content){
    const bootstrap = document.getElementById('pht__endpoint');    
    bootstrap.appendChild(content);
}

