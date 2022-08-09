import { Value } from "react-native-reanimated"

export interface SpecsProps{
    id?:number|string,
    name?:string,
    value?:string|number
}

export const staticWatchDetails:SpecsProps[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"Box and papers",
        value:"Box and papers"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Warranty",
        value:"2-Year Watchbox"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"MANUFACTURED IN",
        value:"Switzerland"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"STYLE",
        value:"Casual, Dress, Sport"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"GENDER",
        value:"Mens"
    },
]

export const staticCaseDial:SpecsProps[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"CASE SIZE",
        value:"38mm"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"CASE MATERIAL",
        value:"Stainless steel"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"DIAL COLOR",
        value:"Grey"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"HOUSE MARKERS",
        value:"Index"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"CASEBACK",
        value:"Exhibition"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"CASE SHAPE",
        value:"Round"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"WATER RESISTANCE",
        value:"150m"
    },
]

export const staticSpecsFunction:SpecsProps[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"MOVEMENT",
        value:"Mechanical(Automatic)"   
    },
    {
        id:Math.random()* Number(new Date()),
        name:"COMPLICATIONS",
        value:"Date"   
    }
]

export const staticSpecsStrap:SpecsProps[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"STRAP/BRACELET MATERIAL",
        value:"Alligator"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"BAND COLOR",
        value:"Brown"
    },
    {
        id:Math.random()* Number(new Date()),
        name:"BUCKLE TYPE",
        value:"Deployant buckle"
    },
]