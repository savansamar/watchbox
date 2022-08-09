import { WatchDetails } from './../../component/Item/Watch';
import { Images } from "../images"

export interface WatchProps{
    id:string|number,
    name:string,
    brand_name:string,
    collection:string|number,
    image:string|any,
    version?:string|number
}

export const NewWatches:WatchProps[]=[
    {
        id:Math.random()* Number(new Date()),
        brand_name:"PATEK PHILIPPE",
        name:"Nautilus Moon Phase 2010",
        collection:34,
        image:Images.watchThree
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Chronometre à Resonance",
        brand_name:"F.P. JOURNE",
        collection:34,
        image:Images.watchEight
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Submariner Green",
        brand_name:"ROLEX",
        collection:34,
        image:Images.watchFour
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Nautilus",
        brand_name:"Patek Philippe",
        collection:34,
        image:Images.watchSix

    },
    {
        id:Math.random()* Number(new Date()),
        brand_name:"PATEK PHILIPPE",
        name:"Nautilus Moon Phase 2010",
        collection:34,
        image:Images.watchThree
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Chronometre à Resonance",
        brand_name:"F.P. JOURNE",
        collection:34,
        image:Images.watchEight
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Submariner Green",
        brand_name:"ROLEX",
        collection:34,
        image:Images.watchFour
    },
    
    
]






export const MyWatchBoxItemList:WatchDetails[]=[
    {
        id:Math.random()* Number(new Date()),
        brand_name:"PATEK PHILIPPE",
        name:"Nautilus Moon Phase 2010",
        collection:34,
        image:Images.watchThree
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Chronometre à Resonance",
        brand_name:"F.P. JOURNE",
        collection:34,
        image:Images.watchEight
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Submariner Green",
        brand_name:"ROLEX",
        collection:34,
        image:Images.watchFour
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Nautilus",
        brand_name:"Patek Philippe",
        collection:34,
        image:Images.watchSix

    },
    {
        id:Math.random()* Number(new Date()),
        brand_name:"PATEK PHILIPPE",
        name:"Nautilus Moon Phase 2010",
        collection:34,
        image:Images.watchThree
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Chronometre à Resonance",
        brand_name:"F.P. JOURNE",
        collection:34,
        image:Images.watchEight
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Submariner Green",
        brand_name:"ROLEX",
        collection:34,
        image:Images.watchFour
    },
    
    
]