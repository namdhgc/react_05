import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <Register />
    	</div>
    );
  }
}

const domContainer = document.querySelector('#root_element_for_react');
ReactDOM.render(<MainComponent />, domContainer);