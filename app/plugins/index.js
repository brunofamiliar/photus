import plugins from '../core/js/services/plugins'
import gridPlugin from './grid/index.js'

const modules = [
    gridPlugin
]

modules.map(module => {
    plugins.register({
        name: module.name,
        start: module.start
    })
})

export default plugins;
