import './App.css';
import HomePage from './Customer/Pages/HomePages/HomePage';
import Footer from './Customer/Components/Footer/Footer';
import Navigation from './Customer/Components/Navigation/Navigation';
import Product from './Customer/Product/product';
function App() {
  return (
    <div className="">
    <Navigation/>
   <div>
   {/* <HomePage/> */}
    <Product/>
   </div>
  <Footer/>
    </div>
  );
}

export default App;
