
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ImgContainer from './components/ImgContainer';

function App() {
  const [images, setImages] = useState([])
  const setStateImages = (data) => {
    setImages(data)
  }

  return (
    <div>
      <Header setStateImages={setStateImages}/>
      <ImgContainer images={images}/>
    </div>
  );
}

export default App;
