
import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";
import "./index.css"

const Users =()=>{
    const {users,error,loading}=useGetUsers();
    console.log({users});
    return(
        <div className="image">
            {loading && <h2>loading users ...</h2>}
            {error.length>0 && <h2>{error}</h2>}
            {users.length>0 ? users.map((user)=>(
            <UserCard
            key ={user.id}
            image = {user.image}
            fullName= {`${user.firstName} ${user.lastName}`}
            />
            )):!loading && <h2>No users found</h2>}
        </div>
    )
}
export default Users;