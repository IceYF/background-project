// 右边头部信息公共组件
import React,{Component} from 'react';
import { Layout } from 'antd';

class Header extends Component {
  render() {
    return(
      <Layout.Header style={{ background: '#fff', padding: 0 }} />
    )
  }
}


export default Header;