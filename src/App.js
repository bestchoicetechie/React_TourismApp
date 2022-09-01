
import './App.css';
import tourData from './Data';
import TourList from './Components/TourismList/TourList';
import { useState } from 'react';

function App() {
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id)
    setTours(newTours)
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
        
        </div>
      </main>
    )
  }



  return (
    <div className="app">
      <h1 className='ourTour'>Our Tour</h1>
     <TourList tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
