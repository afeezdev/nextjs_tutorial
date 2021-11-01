import User from '../components/users'

function UserList({ users }) {
    return (
  <>
    <h1>List of Users</h1>
    {
        users.map(user =>{
            return (
            <div key={user.id}>
                <User user={user}/>  
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

    return {
        props: {
            users: data
        }
    }
    
}
