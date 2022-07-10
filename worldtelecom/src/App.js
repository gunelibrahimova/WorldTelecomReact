import './App.css';
import MyRouter from './routes/MyRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useState } from 'react';
import { CartContext } from './context/MyContext';


function App() {

  const [cartCount, setCartCount] = useState(0)

  const data ={
    cartCount,
    setCartCount
  }
  return (
    <div className='App'>

      <CartContext.Provider value={data}>
        <Header/>
        <MyRouter/>
        <Footer/>
      </CartContext.Provider>
    </div>
  );
}

export default App;
