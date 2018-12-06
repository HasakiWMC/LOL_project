import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';

const {  Content } = Layout;


class ContentLayout extends Component {
    render(){
        return(
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </Content>
        );
    }
}

export default ContentLayout;