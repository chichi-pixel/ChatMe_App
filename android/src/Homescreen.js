import React, { Component } from "react";
import { View, Text, TouchableOpacity, Flatlist } from 'react-native';
import{ Input, Button, ListItem } from 'react-native-elements';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: true,
            users: [
                {
                   userId: 1,
                    userName: 'User 1',
                }, 
                {
                    userId: 2,
                    userName: 'User 2'
                }
            ]
        };
    }

    renderLogin() {
        return ( 
            <View style={{ flex: 1, padding: 25, alignItems: 'center', justifyContent: 'center' }}> 
                <Input style={{ marginBottom: 8 }} placeholder="User Name"/>
                <Button buttonStyle={{ backgroundColor: '#800080'}} title="Login"/>
            </View>
        );
    }

    renderUsers() {
        return (  
        <View style={{ flex: 1 }}>
            <Flatlist
                style={{ flex: 1 }}
                keyExtractor={this.keyExtractor}
                data={this.state.users}
                renderItem={this.renderItem}
            />
        </View>
        );
    }


    keyExtractor = (_item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
            onPress={() => { this.props.navigation.navigate('Chat', { userId: item.userId }) }}
            title={item.userName}
            bottomDivider
            chevron
        />
    );

    render() {
        return this.state.isAuthenticated ? this.renderUsers() : this.renderLogin();
      }



