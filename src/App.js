import { React, useState } from 'react';

import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [userList, setUserList] = useState([]);

  const handleNewUser = (props) => {
    setUserList((prevUserList) => [
      ...prevUserList, props.userInput
    ])
  };

  return (
    <div className="new-user">
      <UserForm onAddUser={handleNewUser}/>
      <UserList userList={userList}/>
    </div>
  );
}

export default App;
