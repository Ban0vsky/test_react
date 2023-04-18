import logo from '../logo.svg';
import '../App.css';
import { Coucou } from '../Coucou';
import { useState, useEffect} from 'react';

function Home() {
  const numbers = [1,2,3,4,5]
  const [stateNumber, setStateNumber] = useState(0)
  const [userData, setUserdata] = useState('')

  const url = "https://jsonplaceholder.typicode.com/users/1"
  const getData = async (url) => {
    const rawData = await fetch(url)
    const jsonData = await rawData.json()
    setUserdata(jsonData)
  }

  useEffect(()=>{
    getData(url)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {numbers.map((number) => 
            <button onClick={() => setStateNumber(number)}>{number}</button>
        )}
        {userData.name}
        <Coucou number={stateNumber}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
