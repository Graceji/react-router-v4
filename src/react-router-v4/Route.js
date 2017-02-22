import React, { Component } from 'react';

const Test1 = class extends Component {
  static propTypes = {
    person: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    return (
      <div>{this.props.person.age}</div>
    );
  }
}

class Test2 extends Component {
  render() {
    const component = Test1;
    const person = {
      name: 'Grace',
      age: 20
    };
    return (
      <Test1 person={person}>
        <div>Test1的子元素1</div>
        <div>Test1的子元素2</div>
      </Test1>
    );
  }
}

export default Test2;