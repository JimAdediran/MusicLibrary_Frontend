import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AddSong from './Components/AddSong/AddSong';
import DisplaySong from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';

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
      <SearchBar songs={songs} setSongs={setSongs}/>
      <DisplaySong songs={songs}  getAllSongs={getAllSongs}/>
      <AddSong getAllSongs={getAllSongs} />
    </div>
  );
}

export default App;
