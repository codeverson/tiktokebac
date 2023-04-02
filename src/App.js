import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video 
        likes={444}
        messages={555} 
        shares={666}
        name="otiehit" 
        description="Saiu o hit do verão!! Assista agora no Youtube! #tierry #manoelgomes" 
        music="Lá Ele - Tierry & Manoel Gomes"
        url="https://firebasestorage.googleapis.com/v0/b/tiktok-clone-7601f.appspot.com/o/laele.mp4?alt=media&token=a579c7a7-ed31-4645-a1c0-6945fa1ba855"
        /> */}
      </div>
    </div>
  );
}

export default App;
