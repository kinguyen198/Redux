import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as actions from '../actions';
import {useSelector, useDispatch} from 'react-redux';
export default function Counter() {
  const data = useSelector((state) => {
    return state.reCounter;
  });
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {data.counter} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(actions.counterIncrease(data.counter));
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(actions.counterDecrease(data.counter));
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  button: {
    margin: 20,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
  },
});
