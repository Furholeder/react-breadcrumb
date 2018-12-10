import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from '../src/Breadcrumb';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Breadcrumb />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
