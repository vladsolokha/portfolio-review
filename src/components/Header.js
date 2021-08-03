import React from 'react';

function Header(props) {
    return ( 
        <header className="App-header">
            <button> &lt; add student &gt; </button>
            <span>Green Valley Ranch High School</span>
            <label for='class'> choose your class</label> 
            <select
                defaultValue={props.selectedClass}
                onChange={props.classHandler}
                >
                <option value='1'>Section 1</option>
                <option value='2'>Section 2</option>
            </select> 
        </header>

     )
}

export default Header
