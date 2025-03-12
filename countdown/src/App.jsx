import Title from './components/title';
import Counter from './components/Counter';


import NewYear from './assets/img-blue.jpg';


import useCountdown from './Hooks/useCountdown';

import './App.css';

function App() {
const [day, hour, minute, second] = useCountdown("Jan 1, 2026 00:00:00");

  return (
    <div className='App' style={{backgroundImage: `url(${NewYear})` }}>
      <div className='Container'>
        <Title title={"Countdown to 2026"} />
        <div className='Countdown-container'>
          <Counter title="Days" number={day} />
          <Counter title="Hours" number={hour} />
          <Counter title="Minutes" number={minute} />
          <Counter title="Seconds" number={second} />
        </div>
      </div>
    </div>
  );
};

export default App;
