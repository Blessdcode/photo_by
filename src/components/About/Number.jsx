import ProjectDone from '../components/About/ProjectDone';

const Number = () => {
    const targetNumbers = [5, 10, 15];
  return (

    <div>
    {targetNumbers.map((targetNumber, index) => (
      <ProjectDone key={index} targetNumber={targetNumber} />
    ))}
  </div>
  );
};

export default Number;
