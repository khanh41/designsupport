import React, { Component } from 'react';
import Aux from '../Auxiliary/auxiliary';
import './Layout.css';
import Toolbar from '../../Components/NavigationItems/Toolbar/Toolbar';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  render() {
    return (
      <Aux className="Background">
        <Toolbar/>
        <main className="margin-all">
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;