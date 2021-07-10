import React, {useState} from 'react';
import './App.css';

const students = ['joe ', 'billy ', 'bob ', 'jane ', 'john ', 'isaac ', 'vlad ']; //will need to be imported from file or so
const students2 = ['gail', 'jaden', 'kai', 'bobby', 'a-a', 'fierce', 'eden', 'tanya']

function App() {

  const names = students; //can store objects as state, can call in objects from outside of block
  const names2 = students2; 
  const [randomName, setRandomName] = useState(''); //sets state to get random name
  const [randomName2, setRandomName2] = useState('');

  const min = 0;
  const max = names.length;
  const max2 = names2.length;

  const buttonHandler = () => {
    const randindex = Math.floor(Math.random() * (max - min) + min);
    const getName = names[randindex];
    setRandomName(getName)
  }
  const buttonHandler2 = () => {
    const randindex2 = Math.floor(Math.random() * (max2 - min) + min);
    const getName = names2[randindex2];
    setRandomName2(getName)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="section1">
          <p>
            {randomName} {/*called from state variable above*/}
          </p>
                  
          <button onClick={buttonHandler}>
            Get A Random Name Class 1
          </button>
        </div>
        <div className="section2">
          <p>
            {randomName2}
          </p> 

          <button onClick={buttonHandler2}>
            Get A Random Name Class 2
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
