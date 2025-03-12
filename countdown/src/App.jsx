import Title from './components/title';
import Counter from './components/Counter';
import './App.css';

import NewYear from './assets/img-blue.jpg';

function App() {
  return (
    <div className='App' style={{backgroundImage: `url(${NewYear})` }}>
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
