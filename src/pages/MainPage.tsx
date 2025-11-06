import { useEffect, useState } from "react"
import { getData , type UserData} from "../data"
import { Link } from "react-router";

export function Main(){
    const [userData,setUserData] = useState<UserData[]>([])
    useEffect(()=>{
        async function fetchUserData() {
            const data : UserData[] = await getData()
            setUserData(data)
        }
        fetchUserData()
    },[])
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {userData.map(p => <tr key={p.id}>
                    <td>
                        <Link to={`/user/${p.id}`}>
                            {p.name}
                        </Link>
                    </td>
                    <td>{p.email}</td>
                    <td>{p.phone}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
    /*<ul>
        {userData.map(p => <li>
            <Link to={`/user/${p.id}`}>
                {p.name}
            </Link>
        </li>)}
    </ul>*/
}