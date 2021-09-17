/* eslint-disable default-case */
import { useState, useEffect } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore"; 

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../firebase/config";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references 
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);
    //   storageRef.put(file).on('state_changed', (snap) => {
    //     let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //     setProgress(percentage);
    //   }, (err) => {
    //     setError(err);
    //   }, async () => {
    //     const url = await storageRef.getDownloadURL();

    //     setUrl(url);
    //   });

    //   uploadBytes(storageRef, file).then(snap => {
    //       console.log('uploaded');
    //   })

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        // switch (snapshot.state) {
        //   case "paused":
        //     console.log("Upload is paused");
        //     break;
        //   case "running":
        //     console.log("Upload is running");
        //     break;
        // }
      },
      (error) => {
        setError(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
          console.log("File available at", downloadURL);
          
          try {
            const docRef = await addDoc(collection(db, "images"), {
              url : downloadURL,
              
              createdAt: Timestamp.fromDate(new Date()).toDate()
            });
            console.log("Document written with ID: ", docRef.id);
            setUrl(downloadURL);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
