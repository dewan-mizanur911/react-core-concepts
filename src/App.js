import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Users></Users>
    </div>
  );
}
// ------------start--------------
function Users() {
  const [users, getUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => getUsers(data));
  }, [])
  return (
    <div>
      {
        users.map(user => displayUsers(user.name, user.email))
      }
   </div>
  );
}

function displayUsers(name, email) {
   const style = {
     backgroundColor: 'steelblue',
     margin: '20px',
     padding: '20px',
     color: 'white',
     border: '2px solid purple',
     borderRadius: '15px'
  }
  return (
    <div style={style}>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
}
// -------------end--------------

// -------------start-------------
function Count() {
  const [count, updateCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    updateCount(newCount);
  }
  const handleDecrease = () => updateCount(count - 1);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
// ----------------end---------------

// ---------------start------------------
function Friends(props) {
  const { name, profession } = props;
  return (
    <div className="container">
      <h1>Name: {name}</h1>
      <p>Proffession: {profession}</p>
    </div>
  );
}
// -------------end-------------
export default App;

/*
dynamically added Friends using map method..
  const friends = [
    {name: 'Mizan', profession: 'Student'},
    {name: 'Rahad', profession: 'Job holder'},
    {name: 'Riad', profession: 'Bekar'},
    {name: 'Bashar', profession: 'Job holder'}
  ]
      {
        friends.map(friend => <Friends name={friend.name} profession={friend.profession}></Friends>)
      }
Handle Increase and Decrease count

*/
