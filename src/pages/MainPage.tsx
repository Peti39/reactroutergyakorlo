import { useEffect, useState } from "react"
import {getData, UserData} from "./data"

export function Main(){
    const [userData,setUserData] = useState<UserData[]>([])
    useEffect(()=>{
        async function fetchUserData() {
            const data : UserData[] = await getData()
            setUserData(data)
        }
        fetchUserData()
    },[])
    return
}