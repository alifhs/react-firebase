import React, {useState} from 'react';
import Title from './comps/Title';
import { UploadForm } from './comps/uploadform';
import {ImageGrid} from './comps/ImageGrid';
import {Modal} from './comps/modal';

function App() {
    const [selectedImg , setSelectImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm></UploadForm>
      <ImageGrid  setSelectImg={setSelectImg}/>
      {
        selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectImg}/>
      } 
    </div>
  );
}

export default App;
