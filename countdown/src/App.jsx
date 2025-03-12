import Title from './components/title';
import Counter from './components/Counter';


import './App.css';


function App() {
  return (
    <div className='App'>
      <div className='Container'>
        <Title title={"Countdown to 2026"} />
        <div className='Countdown-container'>
          <Counter title="Days" number={2} />
          <Counter title="Hours" number={2} />
          <Counter title="Minutes" number={2} />
          <Counter title="Seconds" number={2} />
        </div>
      </div>
    </div>
  );
};

export default App;
