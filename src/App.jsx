
import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import UserList from './Components/UserList';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    function userData() {
      axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.json()) .then(res => setData(res)).catch(err => setError(err));
    }
    
    userData();
  }, []);
 
  return (
    <div>
        <h1>List of Employees</h1>

        <div className='app'>
          
          {data.map(user => (
            <UserList username={user.name} phone={user.phone} email={user.email} company={user.website} />
          ))}

          {data.map(user => (
            <UserList username={user.name} phone={user.phone} email={user.email} company={user.website} />
          ))}

          {data.map(user => (
            <UserList username={user.name} phone={user.phone} email={user.email} company={user.website} />
          ))}

        </div>
    </div>
  );
 };
 export default App;

