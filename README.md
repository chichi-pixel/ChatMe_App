# ChatMe_App
#reactnative #javascript #chatgpt

**Useful Websites:**

*React Native - https://reactnative.dev/*

*APIs - https://reactnative.dev/docs/accessibilityinfo*

*Expo - https://expo.dev/*

*React Native Navigation - https://reactnavigation.org/docs/hello-react-navigation*

*React Native Elements - https://reactnativeelements.com/docs*

**I learn react native by myself and performed code correction operations on the code written in Homescreen.js page via ChatGPT!**

*Here below you can see step by step:* 

import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Flatlist
} from 'react-native';
import{
    Input,
    Button,
    ListItem
} from 'react-native-elements';


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
};

state = {
    isAuthenticated: true,
    users: [{
        userId: 1,
        userName: 'User 1',
    }, 
    {
        userId: 2,
        userName: 'User 2'
    }]
};

renderLogin() {

    return 
    <View style={{ flex: 1, padding: 25, alignItems: 'center', justifyContent: 'center' }}> 
        <Input style={{ marginBottom: 8 }} placeholder="User Name" />
        <Button buttonStyle={{ backgroundColor: '#800080'}}
    </View>
}

![1](https://user-images.githubusercontent.com/60243643/217006908-78a8a6ae-42c5-40fe-bb87-6fe0fded4ee3.jpg)
![2](https://user-images.githubusercontent.com/60243643/217006912-39602896-789f-411e-85c9-3f83dc8c802a.jpg)
![3](https://user-images.githubusercontent.com/60243643/217006914-7dad2d91-3337-47f3-90fb-ce4838088860.jpg)
![4](https://user-images.githubusercontent.com/60243643/217006918-cf7b1949-fbbd-4ade-8404-062b882782c9.jpg)
![5](https://user-images.githubusercontent.com/60243643/217006924-e0bf9a54-5fb7-467d-a612-6d565db72e78.jpg)
![6](https://user-images.githubusercontent.com/60243643/217006928-a8c2cfb0-f9ab-4cba-af0f-9040fb832bb7.jpg)
![7](https://user-images.githubusercontent.com/60243643/217006931-1f44a137-80ae-458e-a92a-73298cb924ac.jpg)
![8](https://user-images.githubusercontent.com/60243643/217006933-5f828423-bbfa-4eb2-81a9-277370207286.jpg)
![9](https://user-images.githubusercontent.com/60243643/217006937-73f8ed59-4ed4-4aa4-ae57-8177f0e327f3.jpg)
![10](https://user-images.githubusercontent.com/60243643/217006942-abf269ad-3e6a-410e-8103-c1c7be9434cc.jpg)
![11](https://user-images.githubusercontent.com/60243643/217006946-aec92fa7-01a5-4fc1-845a-f1b10c001ab2.jpg)
![12](https://user-images.githubusercontent.com/60243643/217006951-eb18978e-34dd-4439-9642-6d80b3b20ce4.jpg)
![13](https://user-images.githubusercontent.com/60243643/217006954-7056fee1-d700-4587-a73b-447864df1498.jpg)

