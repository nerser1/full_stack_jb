import { useState } from "react"

type User = {FirstName: string , LastName: string , Email: string , Phone: string }

export let usersInfo = []

export default function UsersPage(){
    const [users, setUsers] = useState<User[]>([])

    const handlecheck = () => {
    if(!firstName || !lastName || !email || !phone) return;
    setUsers([...users , {FirstName: firstName, LastName: lastName, Email: email, Phone: phone}])
    console.log(users)
    }

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    
    return <div>
        <input onChange={(e) => 
            setFirstName(e.target.value)
        } placeholder="First-Name"/>
        <input onChange={(e) => 
            setLastName(e.target.value)
        } placeholder="Last-Name"/>
        <input onChange={(e) => 
            setEmail(e.target.value)
        } placeholder="Email"/>
        <input onChange={(e) => 
            setPhone(e.target.value)
        } placeholder="Phone"/>
        <button onClick={
            handlecheck
        }>insert</button>
        <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
            </thead>
            <tbody>
                {users.map((u) => {
                    return <tr>
                        <td>{u.FirstName}</td>
                        <td>{u.LastName}</td>
                        <td>{u.Email}</td>
                        <td>{u.Phone}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

