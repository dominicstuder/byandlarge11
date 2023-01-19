import React, { useState, useEffect } from 'react';

function Thirdclock() {
    const [dateState, setDateState] = useState(new Date);

    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className="app">
           
            <span className="clock">

            <span>
              {' '}
              {dateState.toLocaleDateString('en-AU', {
                
                 day: 'numeric',
                 month: 'long',
                 year: 'numeric',
              })}
            </span>
            <span style={{
              marginLeft: '5px',
      
            }}>
                {dateState.toLocaleString('en-AU', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
            </span>
            </span>
        </div>
    );
}

export default Thirdclock;