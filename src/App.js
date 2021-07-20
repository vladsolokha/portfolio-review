import React, {useState} from 'react';
import './App.css';

const students = [
  {
    id: 1,
    class: 'Section 1',
    studentNames: ['joe','bob','vlad','fierce'],
  },
  {
    id: 2,
    class: 'Section 2',
    studentNames: ['fred','malachi','jerry','isaac']
  }
];

function App() {
  const names = students;
  const [randomName, setRandomName] = useState(''); //sets state to get random name
  const [selectedClass, setSelectedClass] = useState(1);
  const min = 0;
  const max = names[Number(selectedClass - 1)].studentNames.length;

  const getRandomName = () => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const getName = names[Number(selectedClass - 1)].studentNames[randomNumber];
    setRandomName(getName);
  }

  const classHandler = (e) => {
    setSelectedClass(e.target.value);
  }

  console.log(selectedClass);
  


  return (
    <div className="App">
      <header className="App-header">
        <span>Green Valley Ranch High School</span>
          <button> &lt; add student &gt; </button>
      </header>
      <main className='main'>
        <label for='class'> choose your class</label> 
        <select
          defaultValue={selectedClass}
          onChange={classHandler}
        >
          <option value='1'>Section 1</option>
          <option value='2'>Section 2</option>
        </select> 
      <p>random name: {randomName}</p>
      <button onClick={getRandomName} > &lt; PICK-R-NAME &gt;</button>
      </main>          
      <footer className = 'footer'>
        <p> I'm a school yo </p>
      </footer>
    </div>
  );
}

export default App;
