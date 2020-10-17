import OptionsPromiseError from './errors/options';
import { existsKey, existsImages } from './utils/json';
import { appendContentRoot } from './utils/view';
import plugins from '../../plugins/index.js';

const photus = {
    appendContentRoot,
    existsKey,
    existsImages
}

export default function (options){
    return Promise.resolve(options)
            .then(validateOptions)
            .then(loadPlugins)
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

function loadPlugins(options){
    if(existsKey(options, "type")){
        let hasPlugin = false

        for(let type of Object.keys(plugins.modules)){
            
            if(type == options.type){    
                plugins.modules[options.type](photus, options)
                hasPlugin = true
            }
        }

        if(!hasPlugin){
            throw new OptionsPromiseError({
                message: 'O tipo escolhido não existe.',
                type: 'type_options_error',
                errors: [{
                    message: 'É preciso informar um tipo de layout válido para ser carregado',
                    service: 'options_valitation'
                }]
            })
        }

        return options;
    }
    throw new OptionsPromiseError({
        message: 'Parâmetro type não está presente nas opções.',
        type: 'validation_options_error',
        errors: [{
            message: 'É preciso informar no seu objeto de opções o tipo de layout a ser carregado',
            service: 'options_valitation'
        }]
    })
}

