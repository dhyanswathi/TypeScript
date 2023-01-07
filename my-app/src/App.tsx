import React, { useEffect, useState } from 'react';
import './App.css';

interface userInfo {
  name: string,
  age: number,
  address: string
}

function App() {
  const [userData, setUserData] = useState<userInfo>({
    name: '',
    age: 0,
    address: '',
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      const firstUser = data.results[0];

      setUserData(prev => {
        return {
          ...prev,
          name: firstUser.name.first,
          age: firstUser.dob.age,
          address: firstUser.location.street.name,
        }
      });
    }
    getData();
  }, []);

  return (
    <div className="App">
      <p>{userData.name}</p>
      <p>{userData.age}</p>
      <p>{userData.address}</p>
    </div>
  );
}

export default App;
