export interface IRootShowObject{
    show:IShow
}

export interface IShow{
    id:number,
    image:{original:string},
    rating:{average:number},
    name:string,
    premiered:string,
    ended:string,
}