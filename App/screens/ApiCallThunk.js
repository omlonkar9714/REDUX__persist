import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getData} from '../Redux/Reducers/Todo_Reducer';

export class ApiCallThunk extends Component {
  state = {};

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <FlatList
        data={this.props.apiData}
        renderItem={({item}) => (
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )}></FlatList>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(JSON.stringify(state));
  return {
    todos: state.todoReducer.todoList,
    apiData: state.todoReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiCallThunk);
