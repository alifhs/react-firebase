import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

//   useEffect(() => {
//     if (url) {
//       setFile(null);
//     }
//   }, [url, setFile]);
    console.log(progress, url);
  return (
    // <motion.div className="progress-bar"
    //   initial={{ width: 0 }}
    //   animate={{ width: progress + '%' }}
    // ></motion.div>

    <p>Progress</p>
  );
} 

export default ProgressBar;