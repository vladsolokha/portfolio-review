//display title centered uppercase
//display subtitle centered upper case
//display join code one left side
//code generated for students to join on phones
//code used for joining session, sending update to device when name appears


import React from 'react';

function Header() {
    return ( 
        <header className="App-header">
            
            <h1 className="title">PICK R NAME</h1>
            <h3 className="subtitle">A RANDOM NAME PICKER</h3>

            <div className="join-container">
                <div className="join-code">
                    <h2>JOIN CODE</h2>
                </div>
                <div className="join-button">
                    <button>JOIN </button>
            </div>  
            </div>
            
        </header>

     )
}

export default Header
