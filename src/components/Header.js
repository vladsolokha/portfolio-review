import React from 'react';

function Header(props) {
    return ( 
        <header className="App-header">
            
            <h1>PICK R NAME</h1>
            <h3>A RANDOM NAME PICKER</h3>
            <label for='class'>CHOOSE YOUR SECTION</label> 
            <select
                defaultValue={props.selectedClass}
                onChange={props.classHandler}
                >
                <option value='1'>SECTION 1</option>
                <option value='2'>SECTION 2</option>
            </select> 
        </header>

     )
}

export default Header
