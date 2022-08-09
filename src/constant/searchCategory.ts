export interface SearchCategoryProps{
    id:number|string,
    title:string
}

export const SearchCategoryItems:SearchCategoryProps[]=[
    {
        id:Math.random()* Number(new Date()),
        title:'My Brands'
    },
    {
        id:Math.random()* Number(new Date()),
        title:'Newest'
    },
    {
        id:Math.random()* Number(new Date()),
        title:'Coming Soon'
    },
    {
        id:Math.random()* Number(new Date()),
        title:'Popular'
    }
]