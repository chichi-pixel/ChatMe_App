import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
                    <Text>Chat App</Text>
                </SafeAreaView>
            </NavigationContainer>

        );
    }
}