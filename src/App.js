import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyClkmVODoiBzqzTCOlKz1zmnpzp0q0n3Sg',
            authDomain: 'react-native-firebase-d9a41.firebaseapp.com',
            databaseURL: 'https://react-native-firebase-d9a41.firebaseio.com',
            projectId: 'react-native-firebase-d9a41',
            storageBucket: 'react-native-firebase-d9a41.appspot.com',
            messagingSenderId: '516717652124'
          });
    }
    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;