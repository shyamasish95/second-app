import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [users, setUsers] = useState(
    []
  );
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then((res)=>res.data)
    .then((result)=>{setUsers(result.data)})
    //setUsers(res);
  }, [])
  // searchUser(e){
  //   var user = users.filter((user)=>user.firstname == e.target.value || user.lastname == e.target.value)
  //   if(user){
  //     return(
  //       <div>{user.data}</div>
  //     )
  //   }
  // }

  return (
    <div className="App">
      
      <ul>
        {users.map((user)=><li>{user.first_name}</li>)}
      </ul>
    </div>
  );
}

export default App;
