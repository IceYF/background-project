// 右边底部版权信息组件
import React,{ Component } from 'react';
import { Layout } from 'antd';

class Footer extends Component {
  render() {
    return(
      <Layout.Footer style={{ textAlign: 'center',position: 'absolute',bottom: '0',width: '100%' }}>
        Ant Design ©2018 Created by Ant UED
      </Layout.Footer>
    )
  }
}

export default Footer;