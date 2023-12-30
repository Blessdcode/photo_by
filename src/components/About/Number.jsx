import React from 'react';
import { Reviews } from '../../constants/main';
import ProjectDone from '../components/About/ProjectDone';

const Number = () => {
    const targetNumbers = [5, 10, 15];
  return (
    // <div>
    //   <div>
    //     {Reviews.map((review) => (
    //     //   <ProjectDone key={review.id} targetNumber={review.text_1} />
    //     ))}
    //   </div>
    // </div>
    <div>
    {targetNumbers.map((targetNumber, index) => (
      <ProjectDone key={index} targetNumber={targetNumber} />
    ))}
  </div>
  );
};

export default Number;
