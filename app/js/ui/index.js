import Grid from './layouts/grid';
import { existsKey } from '../utils/json';

export default function(options, images){

    if(existsKey(options, "type")){
        const type = options.type;
        console.log("type", type)

        switch (type){
            case 'grid':
                return ( Grid(options, images))
            default:
                return ( Grid(options, images))
        }
    }else{
        return ( Grid(images))
    }
}