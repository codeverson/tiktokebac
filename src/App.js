import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
        likes={111} 
        messages={222} 
        shares={333}
        name="ruivinhademarte" 
        description="Só eu e você <3 <3 #fy @cremosinhooficial" 
        music="Se Joga no Passinho - Brisa Star e Thiago Jhonathan"
        url="https://firebasestorage.googleapis.com/v0/b/tiktok-clone-7601f.appspot.com/o/download%20(1).mp4?alt=media&token=e8a1f045-2357-460c-b8df-33e286938959"
        />
        <Video 
        likes={444}
        messages={555} 
        shares={666}
        name="otiehit" 
        description="Saiu o hit do verão!! Assista agora no Youtube! #tierry #manoelgomes" 
        music="Lá Ele - Tierry & Manoel Gomes"
        url="https://firebasestorage.googleapis.com/v0/b/tiktok-clone-7601f.appspot.com/o/laele.mp4?alt=media&token=a579c7a7-ed31-4645-a1c0-6945fa1ba855"
        />
      </div>
    </div>
  );
}

export default App;
