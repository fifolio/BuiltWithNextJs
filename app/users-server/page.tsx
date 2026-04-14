type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();

    return (
        <>
            <h1>Users - Server</h1>
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                    >
                        <div>{user.name}</div>
                        <div>
                            <div>username: {user.username}</div>
                            <div>email: {user.email}</div>
                            <div>phone: {user.phone}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}