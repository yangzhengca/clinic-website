import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Service />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
