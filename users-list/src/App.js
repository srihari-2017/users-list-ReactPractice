import { useState } from 'react';
import './App.css';
import NewUser from './components/NewUser/NewUser';
import Users from './components/Users/Users';

const Dummy_users = [
  {name:'srihari',age:26},
  {name:'sandy',age:26},
  {name:'naresh',age:26}

]
function App() {
  const[userList,setUserList] = useState(Dummy_users)

  const AddUser = (user) =>{
    setUserList(prevUsers => {return [user,...prevUsers]}) 
  }
  return (
    <div className="App">
      <NewUser onAddUser={AddUser}/>
      <Users userlist={userList}/>
    </div>
  );
}

export default App;
