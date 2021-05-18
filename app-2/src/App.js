import './App.css';
import List from './components/List'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => setList(res.data.results)).catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <List list={list}/>
    </div>
  );
}

export default App;
