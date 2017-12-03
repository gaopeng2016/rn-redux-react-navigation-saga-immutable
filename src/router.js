import {StackNavigator} from "react-navigation";
import LoginContainer from './containers/LoginContainer'
import HomeContainer from './containers/HomeContainer'

const AppNavigator = StackNavigator({
    Login:{
        screen: LoginContainer
    },
    Home: {
        screen: HomeContainer
    }
},
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '',
            showIcon: true
        },
        modal: 'card',
        headerMode: 'screen',
        // transitionConfig:()=>({
        //     screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        // }),
        initialRouteName: 'Login',//设置默认的页面组件，必须是上面已注册的页面组件。
        initialRouteParams:{} //初始路由的参数。
    });

export default AppNavigator;
