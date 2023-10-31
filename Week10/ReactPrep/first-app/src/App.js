import './App.css';
import Navbar from "./Navbar"
import Home from "./Home"
function App() {
    const myWarning = "The following is only my opinions";
    const likes = 500;
    const sHero = {
        name : 'Hulk',
        power : 'Smashes'
    }
    const mySchool = "http://www.aurora.edu"

    return (
    <div className="App">
      <div className="content">
          <Navbar />
          <Home />

          <p> I go to <a href={mySchool}> My University </a> </p>
    </div>
    </div>
  );
}

export default App;
