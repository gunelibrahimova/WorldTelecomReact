import './App.css';
import MyRouter from './routes/MyRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className='App'>
      <Header/>
      <MyRouter/>
      <Footer/>
    </div>
  );
}

export default App;
