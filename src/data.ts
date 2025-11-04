const url = "https://retoolapi.dev/a11qSo/data"

interface UserData{
    name : string
    email : string
    phone : string
}

async function getData() : Promise<UserData[]>{
    
        const res = await fetch(url)
        const result : UserData[] = await res.json()
        return result
    
    
}

export {getData, type UserData}