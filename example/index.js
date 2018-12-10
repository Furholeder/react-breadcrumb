import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from '../src/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Breadcrumb separator=" | ">
        <Breadcrumb.Item>
          <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/">App Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
