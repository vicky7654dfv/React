import React from 'react'
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';
import Greeting from './components/greeting.jsx';


export default function App() {
  return (
    <div className='main-body'>
      {/* <Greeting name="John" age={30} />
      <Greeting name="rock" age={23} /> */}
      <Greeting />

      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  )
}