import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import RandomNameButton from './RandomNameButton';
import DisplayRandomName from './DisplayRandomName';
import Footer from './Footer';
import NamesList from './NamesList';
import './App.css';

const sections = [
  {
    id: 1,
    studentNames: [],
  },
  {
    id: 2,
    studentNames: []
  }
];  


function App(props) {
  const [randomName, setRandomName] = useState(''); //sets state to get random name
  const [selectedClass, setSelectedClass] = useState(1);
  const [newNameField, setNewNameField] = useState('');
  const [studentList, setStudentList] = useState(sections);
 
  const currentClassNames = studentList[Number(selectedClass - 1)];
  const max = currentClassNames.studentNames.length;

  const getRandomName = () => {
    const randomNumber = Math.floor(Math.random() * (max - 0) + 0);
    const getName = currentClassNames.studentNames[randomNumber];
    setRandomName(getName);
  }

  const classHandler = (event) => {
    setSelectedClass(parseInt(event.target.value));
  }

  console.log(selectedClass);
  console.log('studentList', studentList);
  
  const addName = (e) => {
    if (newNameField === '') {
      e.preventDefault()
     }
    const newStudentList = studentList.map(classObj => {
      console.log('selectedClass', selectedClass, typeof selectedClass)
      console.log('newNameField', newNameField)
      if (classObj.id === selectedClass) {
        classObj.studentNames.push(newNameField)
      }
      return classObj
    })
    console.log('newStudentList', newStudentList)
    setStudentList(newStudentList)  
  }


  return (
    <div className="App">
      
      <Header selectedClass={selectedClass} classHandler={classHandler} />
      
      <main className='main'>

        <div className='addName'>
          {/* <div>
            <input type='text' placeholder='NEW STUDENT NAME'></input>
            <button onClick={addName}>ADD</button>
          </div> */}
          <form className='inputName' onSubmit={addName}>
            <input 
              type='text' 
              placeholder='NEW NAME' 
              onChange={(e) =>  setNewNameField(e.target.value)} 
              value={newNameField}
              required 
              >
              </input>
            <input type='submit' value='ADD'></input>
          </form>
        </div>
        
        <div className='randomName'>
          <RandomNameButton clickRandomNameHandler={props.clickRandomNameHandler} buttonText="PICK R NAME" />
          <DisplayRandomName />
        </div>
          
        <div className='namesList'>
          {
            studentList[Number(selectedClass - 1)].studentNames.map(name => {
              return (
                <button key={name} className='name'> {name} </button> 
              )
            })
          }
        </div>

      </main>          
      <Footer />
    </div>
  );
}

export default connect(null, actions)(App);
