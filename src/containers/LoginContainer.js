import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginPage from "../pages/LoginPage";
import { login } from "../actions/loginAction"
import {connect} from 'react-redux'

@connect(state => ({
    loginStore: state.get('login'),
}))
class LoginContainer extends Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.loginStore.get('statusText') === '登录成功'){
            this.props.navigation.navigate('Home')
        }
    }

    login = (userName, password) => {
        this.props.dispatch(login(userName, password))
    };

    render(){
        const loginStore = this.props.loginStore;
        return(
            <View style={styles.container}>
                <LoginPage login={this.login} />
                <Text>{loginStore.get('statusText')} </Text>
                <Text>{loginStore.get('error')} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default LoginContainer;