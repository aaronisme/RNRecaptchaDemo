/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import RNRecaptcha from 'rn-recaptcha';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RNRecaptcha siteKey={siteKey} onMessage={onMessage} url={testUrl}/>
      </View>
    );
  }
}

const siteKey='6LcWuG4UAAAAAAn1v2RHkpyaE6yaXAc-uyRDSgMG';
const testUrl = 'https://rnrecaptcha.org';

onMessage = event => {
  if ( event && event.nativeEvent.data) {
    console.log(event.nativeEvent.data)
  } else if(event.nativeEvent.data === 'expired'){
    console.log('this is when you expired')
  }else if(event.nativeEvent.data === 'error') {
    console.log('this is when error')
  } else {
    console.log('other')
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
});
