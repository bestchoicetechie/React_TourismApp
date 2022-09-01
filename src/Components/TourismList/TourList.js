import React from 'react';
import Tourism from '../Tourism/Tourism';
const TourList = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        {tours.map((item) => {
          return <Tourism key={item.id} {...item} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default TourList;
