import logo from './logo.svg';
import './App.css';
import icon1 from '../src/images/icon1.png';
import icon2 from '../src/images/icon2.png';
import icon3 from '../src/images/icon3.png';
import icon4 from '../src/images/icon4.png';
import ironhackLogoXs from '../src/images/ironhackLogoXs.png';
import menuTopXs from '../src/images/menuTopXs.png';

function App() {
  return (
    <div className="App">

      <div className="upperHalf">

        <div className='header'>
          <img src={ironhackLogoXs} alt='ironhack logo' />
          <img src={menuTopXs} alt='hamburger menu' className= 'menu' />
        </div>
        <div className='sayHello'>
          <h1 className='title'> Say hello to <br/>
          ReactJs</h1>

          <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a Super Ninja Developer.</p>
        
        <br/>
        <button>Awesome!</button>        
        </div>
      </div>

      <div className='lowerHalf'>

    <div className='declarative'>
      <img src={icon1} alt='icon1' className='icons' />
      <h3>Declarative</h3>
      <p className='text'> React makes it painless to create interactive UIs.</p>
    </div>
    <div className='components'>
      <img src={icon2} alt='icon2' className='icons' />
      <h3>Declarative</h3>
      <p className='text'> Build encapsulated components that manage their state.</p>
    </div>
    <div className='declarative'>
      <img src={icon1} alt='icon1' className='icons' />
      <h3>Declarative</h3>
      <p className='text'> React makes it painless to create interactive UIs.</p>
    </div>
    <div className='declarative'>
      <img src={icon1} alt='icon1' className='icons' />
      <h3>Declarative</h3>
      <p className='text'> React makes it painless to create interactive UIs.</p>
    </div>

      </div>
      
    </div>
  );
}

export default App;
