export default function UsersAccounts(data){
    return{
        type:"get-users",
        payload:data
    }
}
export function HosterAccounts(data){
    return{
        type:"get-hosters",
        payload:data
    }
}
export function RequstsData(data){
    return{
        type:"get-requests",
        payload:data
    }
}
export function SingleData(data){
    return{
        type:"single-user",
        payload:data
    }
}
export function RequestInfo(data){
    return{
        type:"requst-info",
        payload:data
    }
}