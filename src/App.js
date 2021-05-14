import Header from './Components/Header.js';
import Cover from './Components/Cover.js';
import Category from './Components/Category.js';
import Random from './Components/Random.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Cover/>
      <Category/>
      <Random/>
      <Footer/>
    </div>
  );
}

export default App;
