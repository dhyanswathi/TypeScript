import React, { useEffect, useState } from 'react';
import './App.css';
import { UserInfo } from './types';
import UserName from './Components/userName';
import UserAddress from './Components/userAddress';

function App() {
  const [user, setUser] = useState<UserInfo>({
    name: '',
    age: 0,
    address: '',
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      const firstUser = data.results[0];

      setUser(prev => {
        return {
          ...prev,
          name: firstUser.name.first + ' ' + firstUser.name.last,
          age: firstUser.dob.age,
          address: firstUser.location.street.name + ', ' + firstUser.location.country,
        }
      });
    }
    getData();
  }, []);

  return (
    <div className="App">
      <UserName user={user} />
      <p>{user.age}</p>
      <UserAddress user={user} />
    </div>
  );
}

export default App;
