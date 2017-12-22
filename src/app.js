import React from 'react';

class App extends React.Component{

    render(){
        return[
            <div key = {0}>
                <p>Happy to be here and loving React</p>
            </div>,

            <div key = {1}>
                <p>Let's see we got and so on. </p>
            </div>
        ]
    };
}

export default App;