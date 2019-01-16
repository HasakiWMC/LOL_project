import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store/store';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import {Layout} from "antd";
import LayoutHeader from "./components/layout/Header";
import LayoutFooter from "./components/layout/Footer";
import SummonerSearch from "./components/summoner/SummonerSearch";
import SummonerDetail from "./components/summonerDetail/SummonerDetail";
import SummonerInputErr from "./components/summoner/SummonerInputErr";
import ChangePwd from "./components/layout/ChangePwd";

const {Content} = Layout;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Layout className="layout">
                            <LayoutHeader/>
                            <Content style={{padding: '0 200px'}}>
                                <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                                    <Switch>
                                        <Route exact path="/" component={SummonerSearch}/>
                                        <Route exact path="/register" component={Register}/>
                                        <Route exact path="/login" component={Login}/>
                                        <Route exact path="/summoner/:region/:summonerName" component={SummonerDetail}/>
                                        <Route exact path="/summoner/inputErr" component={SummonerInputErr}/>
                                        <Route exact path="/changePwd" component={ChangePwd}/>
                                    </Switch>
                                </div>
                            </Content>
                            <LayoutFooter/>
                        </Layout>
                    </div>
                </Router>
            </Provider>
        );
    }
}

// 测试@babel/plugin-transform-runtime的ES6转换
// let ab = async args=>{
//     const {a , b} = args;
//     await console.log("Hello world!",a,b)
// };
// ab({a:1,b:2});

export default App;
