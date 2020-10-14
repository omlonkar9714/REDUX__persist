import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './App/Redux/Store/Store';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './App/navigation/StackNavigator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator></StackNavigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
