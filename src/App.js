import React, { Component } from 'react';
import { render } from 'react-dom';

require('./less/app.less');

class App extends Component {
  render() {
    return <div className="red-text">Hello {this.props.name}</div>;
  }
}

render(<App name="Deep" />, document.getElementById('root'));
