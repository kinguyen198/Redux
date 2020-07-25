/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as actions from '../actions';
import {useSelector, useDispatch} from 'react-redux';

export default function Bank() {
  const [activity, setActivity] = useState(true);
  const amount = useSelector((state) => {
    return state.reAmount;
  });
  const money = useSelector((state) => {
    return state.reInputMoney;
  });
  const dispatch = useDispatch();
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('amount', JSON.stringify(amount.amount));
    } catch (error) {
      console.warn(error);
    }
  };
  const _retrieveData = async () => {
    return await AsyncStorage.getItem('amount');
  };

  useEffect(() => {
    //get data and set state
    _retrieveData().then((res) => {
      dispatch(actions.amountValue(JSON.parse(res)));
    });
    closeActivityIndicator();
  }, []);
  useEffect(() => {
    //Update data to store
    _storeData();
    console.log(amount.amount);
  });
  function withDraw() {
    dispatch(actions.withDraw(money.money));
  }
  function deposit() {
    dispatch(actions.deposit(money.money));
  }
  function closeActivityIndicator() {
    setTimeout(() => setActivity(false), 6000);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ActivityIndicator
            animating={activity}
            size="large"
            color="skyblue"
          />
          <Text style={styles.title}>Total amount</Text>
          <Text style={styles.text}>{amount.amount}</Text>
          <TextInput
            style={styles.input}
            placeholder="How much you want to Withdraw/Deposit"
            keyboardType="number-pad"
            onChangeText={(e) => {
              if (e.isEmpty) {
                dispatch(actions.inputMoney(0));
              } else {
                dispatch(actions.inputMoney(Number(e)));
              }
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={styles.button}
              value={amount.amount}
              onPress={() => {
                if (amount.amount >= 0 && money.money <= amount.amount) {
                  withDraw();
                } else {
                  alert('You not enough money to withdraw');
                }
              }}>
              <Text>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                deposit();
              }}>
              <Text>Deposit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'cyan',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 300,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    margin: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
  },
});
