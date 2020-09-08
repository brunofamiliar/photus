import Grid from './layouts/grid';

export default function({ type }, images){
    switch (type){
        case 'grid':
            return ( Grid(images))
    }
}