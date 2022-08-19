import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import Khipu from 'react-native-khenshin';

export default class MyApp extends React.Component {
  onStartPayment = () => {
    Khipu.startPaymentById('paymentId')
        .then(({status, result}) => {
          if (status === 'CONCILIATING') {
            // khipu is conciliating the payment
          } else if (status === 'USER_CANCELED') {
            // The user cancelled the transaction
          } else {
            // Error!, see `result` for details
            console.log(result);
          }
        })
        .catch(err => console.log({err}));
  };

  render() {
    return (
        <TouchableOpacity onPress={this.onStartPayment}>
          <Text>Start payment</Text>
        </TouchableOpacity>
    );
  }
}
