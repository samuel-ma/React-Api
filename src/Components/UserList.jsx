
import "../Styles/UserList.css";

const UserList = ({username, phone, email, website}) => {
  return (
    <div className="users">
        <h3 className="h3">{username}</h3>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{website}</p>
    </div>
  )
}

export default UserList