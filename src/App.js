
import './App.css';


import imageInSrc from './imageInSrc.jfif';

function App() {
  return (
    <div className="App">
      <div className="checkpoint" style={{border:"solid 1px black", maxWidth:"100vw"}}>
        <h1 className={"title"}>RAJHI ARIJ</h1>
        <br />
 
        <img src={imageInSrc} alt='image in the src folder'/>
        <br />

        <img src={"/imageInPublic.jfif"} alt='image in the public folder'/>
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}
 export default App;