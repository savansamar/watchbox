import { TopTabItemProp } from "../component/FlatList/TopTab"
import { FilterItemProp } from "../screen/Private/search/Filter"

export interface BrandCategoryProp{
    id:number|string,
    name:string,
    selected:boolean
}
export const BrandCategory:BrandCategoryProp[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"Rolex",
        selected:true
    },
     {
        id:Math.random()* Number(new Date()),
        name:"Patek Phillipe",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"A. Lange & Sohne",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Audemars Piguet",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Breitling",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"F.P. Journe",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Grand Seiko",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"H. Moser & Cie",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Hublot",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"IWC",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Jaeger-LeCoultre",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Omega",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Panerai",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Tudor",
        selected:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Vacheron Constantin",
        selected:false
    },

    
]


export const TopTabData:TopTabItemProp[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"My WatchBox",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Wishlist",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Grail Watch",
    }
]





export const filterData:FilterItemProp[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"PRICE",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"BRAND",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"MODEL",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"CASE SIZE",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"GENDER",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"CASE MATERIAL",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"BRAND MATERIAL",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"CERTIFICATES",
    },
    {
        id:Math.random()* Number(new Date()),
        name:"DIAL COLOR",
    },
]