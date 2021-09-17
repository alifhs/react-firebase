import React from 'react';
import Title from './comps/Title';
import { UploadForm } from './comps/uploadform';
import {ImageGrid} from './comps/ImageGrid';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm></UploadForm>
      <ImageGrid />
    </div>
  );
}

export default App;
