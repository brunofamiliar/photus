const plugins = {
    modules: [],

    register: (module) => {
        const { name, start } = module
        plugins.modules[name] = start;
    }
}

export default plugins;