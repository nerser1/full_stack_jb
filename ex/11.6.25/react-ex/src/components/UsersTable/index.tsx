import { users } from "../UserPage";


export function UsersTable(){


    return <div>
        <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
            </thead>
            <tbody>
                {users.map(user => {
                    return <tr>
                        <td>user.FirstName</td>
                        <td>user.LastName</td>
                        <td>user.Email</td>
                        <td>user.Phone</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}