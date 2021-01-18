import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Food from './Components/Food/Food';
import Health from './Components/Health/Health';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Food />
      <Health />
      <Footer />
      </div>
  );
}

export default App;
