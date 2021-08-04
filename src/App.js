import React, {useState} from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import NamesList from './components/NamesList';

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
  const [newNameField, setNewNameField] = useState('');

  const min = 0;
  const max = names[Number(selectedClass - 1)].studentNames.length;

  const getRandomName = () => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const getName = names[Number(selectedClass - 1)].studentNames[randomNumber];
    setRandomName(getName);
  }

  const classHandler = (event) => {
    setSelectedClass(event.target.value);
  }

  console.log(selectedClass);
  


  return (
    <div className="App">
      
      <Header selectecClass={selectedClass} classHandler={classHandler} />
      
      <main className='main'>
        
        <div className='randomName'>
          <p>random name: {randomName}</p>
          <button onClick={getRandomName} > &lt; PICK-R-NAME &gt;</button>
        </div>
          
        {/* <NamesList selectedClass={selectedClass} names={names} studentNames={names.studentNames} /> */}
        <aside className='namesList'>
          {
            names[Number(selectedClass - 1)].studentNames.map(name => {
              return (
                <button key={name.id} className='name'> {name} </button> 
              )
            })
          }
        </aside>

      </main>          
      <Footer />
    </div>
  );
}

export default App;
