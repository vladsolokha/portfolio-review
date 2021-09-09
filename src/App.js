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

  const currentClassNames = names[Number(selectedClass - 1)];
  const min = 0;
  const max = currentClassNames.studentNames.length;

  const getRandomName = () => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const getName = currentClassNames.studentNames[randomNumber];
    setRandomName(getName);
  }

  const classHandler = (event) => {
    setSelectedClass(event.target.value);
  }

  console.log(selectedClass);
  
  const addName = () => {
    return setSelectedClass.studentNames.push(newNameField);
  }


  return (
    <div className="App">
      
      <Header selectecClass={selectedClass} classHandler={classHandler} />
      
      <main className='main'>

        <div className='addName'>
          <form className='inputName' onSubmit={addName}>
            <input type='text' placeholder='NEW STUDENT NAME'></input>
            <input type='submit' value='ADD'></input>
          </form>
        </div>
        
        <div className='randomName'>
          <p>{randomName}</p>
          <button onClick={getRandomName}>PICK R NAME</button>
        </div>
          
        <div className='namesList'>
          {
            names[Number(selectedClass - 1)].studentNames.map(name => {
              return (
                <button key={name.id} className='name'> {name} </button> 
              )
            })
          }
        </div>

      </main>          
      <Footer />
    </div>
  );
}

export default App;
