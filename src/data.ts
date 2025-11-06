const url = "https://retoolapi.dev/a11qSo/data"

interface UserData{
    id : number
    name : string
    email : string
    phone : string
}

async function getData() : Promise<UserData[]>{
    
        const res = await fetch(url)
        const result : UserData[] = await res.json()
        return result
    
    
}

async function getUserById(id:string) : Promise<UserData|null>{
    const res = await fetch(url + `/${id}`)
    if(res.status === 404){
        return null
    }
    const result : UserData = await res.json()
    return result
}

export {getData, getUserById, type UserData}