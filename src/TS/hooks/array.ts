export function useArrayToObject(array:any[]){
    const object= array.reduce(
        (prevValue:any,value:any)=>({...prevValue,[value.id]:value}),
        {})
        return object
}