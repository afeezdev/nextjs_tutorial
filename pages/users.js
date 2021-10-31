
function UserList({ users }) {
    return (
  <>
    <h1>List of Users</h1>
    {
        users.map(user =>{
            return (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.username}</p>
                <p>{user.email}</p>   
                <br/>             
            </div> 
            )
        })
    }
  </>
  )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data
        }
    }
    
}