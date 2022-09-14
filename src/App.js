import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplaySong from './Components/DisplaySongs/DisplaySongs';
import AddSong from './Components/AddSong/AddSong';

function App() {

const [songs, setSongs] = useState([]);

useEffect(() => {
  getAllSongs();
}, [])

async function getAllSongs(){
  const response = await axios.get('http://127.0.0.1:8000/music/');
  console.log(response.data)
  setSongs(response.data)
}

  return (
    <div>
      <DisplaySong songs={songs} />
      <AddSong />
    </div>
  );
}

export default App;
