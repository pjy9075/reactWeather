import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image, ActivityIndicator} from 'react-native';

export default class App extends Component {
  
  state = {
    isLoaded:false
  };

  render() {
    const{isLoaded}=this.state;
    return (
      <View >
        {isLoaded ? null : ( 
        <View>
          <Text> Getting your Weather :)  </Text>
          </View>
        )}
              
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
