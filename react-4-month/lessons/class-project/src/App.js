import { useState, useEffect } from "react";
import './style.scss'
import Home from "./Home";
import Form from "./Form";
import Card from "./Card";
import Wrapper from "./Wrapper";
import { Children } from "react";

function App() {
  const [data, setData] = useState('data')
  const [showHome, setShowHome] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div className="App">
      
      <Wrapper>
        {
          users.map(item =>{
            return <Card item={item}/>
          })
        }
      </Wrapper>

      <button onClick={()=>{
        setShowHome(!showHome)
      }}>show / hide</button>
      {
        showHome ? <Home data={data}/> : ''
      }
      <input type="text" value={data} onChange={ e =>{
        setData(e.target.value)
      }}/>
      <Form data={data} setData={setData}/>
      
    </div>
  );
}

export default App;
