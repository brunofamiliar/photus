class Options extends Error {
    constructor({message, type, errors} = {}){
        super();

        this.name = 'OptionsPromiseError';
        this.message = message;
        this.type = type;
        this.errors = errors;
    }
}

export default Options;