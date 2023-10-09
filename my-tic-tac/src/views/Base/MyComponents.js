import React from 'react';

class MyComponents extends React.Component {

    state = {
        name: 'Alex',
        age: '18'
    }
    /*
      JSX => return block
     */ 
      render() {
        console.log(">>> render: ", this.state);
        return (
            <> 
                <div>Hello React From Tic Tac Toe</div>
            </>
        )
    }
}

export default MyComponents