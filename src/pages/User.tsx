import { useParams } from "react-router";
import { useEffect, useState } from 'react'
import { getUserById , type UserData} from "../data"

export function User(){
    const params = useParams();
    const id = params.id;

    const [userData,setUserData] = useState<UserData | null>(null);
    useEffect(()=>{
        async function fetchUserData() {
            const data = await getUserById(id!);
            setUserData(data);
        }
        fetchUserData()
    },[])
    return <div>
        {userData ? (
            <div>
                <h1>{userData.name}</h1>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
            </div>
        ) : (
            <p>User not found.</p>
        )}
    </div>
}