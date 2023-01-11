import React, { useState, useEffect } from 'react';

function Thirdclock() {
    const [dateState, setDateState] = useState(new Date);

    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className="app">
           
            <h2 className="clock">

            <span>
              {' '}
              {dateState.toLocaleDateString('en-AU', {
                
                 day: 'numeric',
                 month: 'long',
                 year: 'numeric',
              })}
            </span>
            <span style={{
              marginLeft: '20px',
      
            }}>
                {dateState.toLocaleString('en-AU', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
            </span>
            </h2>
        </div>
    );
}

export default Thirdclock;