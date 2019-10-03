import 'elix/define/ListBox';
import items from './items';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    // Our initial state will include a default set of items loaded from
    // elsewhere, and select the 0th item by default.
    this.state = {
      items,
      selectedIndex: 0
    };
  }

  componentDidMount() {
    // We can listen to events on the Elix component, and use those events to
    // update state.
    this.refs.list.addEventListener('selected-index-changed', event => {
      this.setState({
        selectedIndex: event.detail.selectedIndex
      });
    });
  }

  render() {
    // Create a div for each item in the list. Below we'll pass the items to the
    // ListBox component as children.
    const itemElements = this.state.items && this.state.items.map(item => (
      <div key={item}>{item}</div>
    ));

    // Instantiate the ListBox component using its elix-list-box tag name, pass
    // properties to it as attributes, and pass items to it as children.
    return (
      <div>
        <p>
          This page demonstrates the use of an Elix web component in a React application.
          The <a href="https://component.kitchen/elix/ListBox">ListBox</a> component
          below supports a wide range of features including several ways to select items
          with the keyboard and ARIA accessibility.
        </p>
        <p>
          Selection: {this.state.items[this.state.selectedIndex]}
        </p>
        <elix-list-box
            ref="list"
            aria-label="Fruits"
            selected-index={this.state.selectedIndex}
            style={{height: "250px", maxWidth: "300px"}}>
          {itemElements}
        </elix-list-box>
      </div>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));
