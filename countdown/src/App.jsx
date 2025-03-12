import Title from './components/title';

import './App.css';


function App() {
  return (
    <div className='App'>
      <div className='Container'>
        <Title title={"Countdown to 2026"} />
        <div className='Countdown-container'>
          <p>2 days</p>
        </div>
      </div>
    </div>
  )
}

export default App
