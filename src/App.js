import Nav from './Nav';
import Header from './Header';
import { Cart } from './Cart';
import './App.css';
import Footer from './Footer';
import Block1 from './Block1';
import { Block2 } from './Block2';
import { Block3 } from './Block3';
import { Block4 } from './Block4';
import { Block5 } from './Block5';
import Block6 from './Block6';
import { Block7 } from './Block7';
import { Block8 } from './Block8';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function Counter(added) {
    added ? setCount((ev) => ev + 1) : setCount((ev) => ev - 1);
  }

  return (
    <div className="App">
      <div className='d-flex justify-content-between align-items-center mx-auto container'>
        <Nav />
        <Cart value={count} />
      </div>
      <Header />
      <div className='mx-auto bg-light d-flex justify-content-center gap-5 px-3 py-3 flex-wrap ms-5 me-5 mt-5 mb-5'>
        <div className=''><Block1 /></div>
        <div className=''><Block2 value={count} Counter={Counter} /></div>
        <div className=''><Block3 value={count} Counter={Counter} /></div>
        <div className=''><Block4 value={count} Counter={Counter} /></div>
        <div className=''><Block5 value={count} Counter={Counter} /></div>
        <div className=''><Block6 /></div>
        <div className=''><Block7 value={count} Counter={Counter} /></div>
        <div className=''><Block8 value={count} Counter={Counter} /></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;