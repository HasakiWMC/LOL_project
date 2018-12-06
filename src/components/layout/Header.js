import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class LayoutHeader extends Component {
    render(){
        return(
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.props.history.location.pathname]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="/"><Link to="/">召唤师</Link></Menu.Item>
                    <Menu.Item key="/register"><Link to="/register">nav 222</Link></Menu.Item>
                    <Menu.Item key="/login"><Link to="/login">nav 333</Link></Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default withRouter(LayoutHeader);