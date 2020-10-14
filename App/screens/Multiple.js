import React, {Component} from 'react';
import {View, Text} from 'react-native';

// const EnhancedComponent = higherOrderComponent(WrappedComponent);

class Multiple extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Multiple </Text>
      </View>
    );
  }
}

export default Multiple;
