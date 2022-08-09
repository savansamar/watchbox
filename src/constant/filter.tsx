
export interface FilterItemsProps{
    id?:number|string,
    name?:string,
    active?:boolean,
    collection?:number
}

export const filterBrand:FilterItemsProps[]=[
    {   
        id:Math.random()* Number(new Date()),
        name:"Alain Silberstein",
        active:false
    },
    {   
        id:Math.random()* Number(new Date()),
        name:"A. Lange & Sohne",
        active:false
    },
    {   
        id:Math.random()* Number(new Date()),
        name:"Anonimo",
        active:false
    },
    {   
        id:Math.random()* Number(new Date()),
        name:"Antoine Preziuso",
        active:false
    },
]


export const filterModel:FilterItemsProps[]=[
    {   
        id:Math.random()* Number(new Date()),
        name:"1815",
        active:false
    },
    {   
        id:Math.random()* Number(new Date()),
        name:"Lange",
        active:false
    },
    {   
        id:Math.random()* Number(new Date()),
        name:"Odysseus",
        active:false
    },
    {   
        id:Math.random()* Number(new Date()),
        name:"Saxonia",
        active:false
    },
]

export const filterCaseSize:FilterItemsProps[]=[
        {   
            id:Math.random()* Number(new Date()),
            name:"< 26mm",
            active:false
        },
        {   
            id:Math.random()* Number(new Date()),
            name:"27mm - 31mm",
            active:false
        },
        {   
            id:Math.random()* Number(new Date()),
            name:"32mm - 35mm",
            active:false
        },
        {   
            id:Math.random()* Number(new Date()),
            name:"36mm - 39mm",
            active:false
        },
        {   
            id:Math.random()* Number(new Date()),
            name:"40mm - 43mm",
            active:false
        },
        {   
            id:Math.random()* Number(new Date()),
            name:"44mm +",
            active:false
        },
]



export const filterGender:FilterItemsProps[]=[
    {
        id:Math.random()* Number(new Date()),
            name:"Ladies",
            active:false
    },
    {
        id:Math.random()* Number(new Date()),
            name:"Mens",
            active:false
    },
    {
        id:Math.random()* Number(new Date()),
            name:"Unisex",
            active:false
    },
]

export const filterCaseMaterial:FilterItemsProps[]=[
        {
            id:Math.random()* Number(new Date()),
                name:"Alchron",
                active:false
        },
        {
            id:Math.random()* Number(new Date()),
                name:"Aluminum",
                active:false
        },
        {
            id:Math.random()* Number(new Date()),
                name:"Breitlight",
                active:false
        },
        {
            id:Math.random()* Number(new Date()),
                name:"Bronze",
                active:false
        },
]

export const filterBrandMaterial:FilterItemsProps[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"Alligator/Crocodile/Lizard",
        active:false
    },
    
    {
        id:Math.random()* Number(new Date()),
        name:"Aluminum",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Aluminum and Rubber",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Ceramic",
        active:false
    }
]

export const filterCertificates:FilterItemsProps[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"Box",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Extract",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Manual",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Papers",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Travel Case",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Warranty",
        active:false
    },
    
]

export const filterDialColor:FilterItemsProps[]=[
    {
            id:Math.random()* Number(new Date()),
            name:"Beige",
            active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Black",
        active:false
},
{
    id:Math.random()* Number(new Date()),
    name:"Blue",
    active:false
},
{
    id:Math.random()* Number(new Date()),
    name:"Brown",
    active:false
},
    
]
export const filterMovement:FilterItemsProps[]=[
    {
        id:Math.random()* Number(new Date()),
        name:"Manual Wind",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Mechanical (Automatic)",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Mechanical (Hand-Winding)",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Quartz",
        active:false
    },
    {
        id:Math.random()* Number(new Date()),
        name:"Spring Drive",
        active:false
    },

]