import './App.css';
import NewUser from './components/NewUser/NewUser';
import Users from './components/Users/Users';

function App() {
  const userList = [
    {name:'srihari',age:26},
    {name:'sandy',age:26},
    {name:'naresh',age:26}

  ]
  return (
    <div className="App">
      <NewUser/>
      <Users userlist={userList}/>
    </div>
  );
}

export default App;
