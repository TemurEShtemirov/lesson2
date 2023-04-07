import Footer from './components/layouts/Footer/Footer';
import Main from './components/layouts/Main/Main';
import Navbar from './components/layouts/Navbar/Navbar';
import "./components/scss/App.scss"
function App() {

  return (
    <div className="App container">
     <Navbar/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
