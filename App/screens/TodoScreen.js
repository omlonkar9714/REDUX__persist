import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ToastAndroid,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {AddTodo, DeleteTodo, Clear_All} from '../Redux/Actions/TodoActions';

export class Redux extends Component {
  state = {
    note: '',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FAFAD2',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View style={{marginVertical: 20}}>
          <Text> REDUX </Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Text> {this.props.todos.length} </Text>
        </View>

        <View
          style={{
            borderWidth: 1,
            width: '70%',
            borderRadius: 20,
            paddingLeft: 20,
          }}>
          <TextInput
            onChangeText={(text) => {
              this.setState({note: text});
            }}
            placeholder="Add todo"></TextInput>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Pressable
            onPress={() => {
              if (this.state.note.length > 0) {
                this.props.addTodo(this.state.note);
              } else if (this.state.note.length == 0) {
                ToastAndroid.show('Enter note first', ToastAndroid.SHORT);
              }
            }}>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginTop: 10,
                backgroundColor: '#00b3b3',
              }}>
              <Text>Add Todo</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              this.props.deleteAll();
            }}>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginTop: 10,
                backgroundColor: '#00b3b3',
              }}>
              <Text>Clear Todo List</Text>
            </View>
          </Pressable>
        </View>
        <FlatList
          style={{width: '50%'}}
          data={this.props.todos}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: 'pink',
                marginVertical: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text>{item.text}</Text>
              <Text
                style={{fontSize: 25}}
                onPress={() => {
                  // alert('delete');
                  this.props.deleteTodo(item.key);
                }}>
                DELETE
              </Text>
            </View>
          )}></FlatList>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(AddTodo(text));
    },
    deleteTodo: (key) => {
      dispatch(DeleteTodo(key));
    },
    deleteAll: () => {
      dispatch(Clear_All());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
