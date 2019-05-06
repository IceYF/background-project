// 左边菜单栏组件
import React,{Component} from 'react';
import {Layout,Menu,Icon } from 'antd';
import reducer from '../../store/index.js';
import store from '../../store/index.js';
import { NavLink } from 'react-router-dom';

const IconFont  = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1174981_jmkl5efftdi.js',
});

class Sider extends Component {
  constructor(props){
    super(props);

    this.state = {
      menus: reducer.getState().common.menus,
      defaultMenus: reducer.getState().common.defaultMenus
    }
    store.subscribe(() => {
      this.setState(() => ({
        menus: reducer.getState().common.menus,
        defaultMenus: reducer.getState().common.defaultMenus
      }))
    })
  }
  render() {
    return(
      <Layout.Sider style={{
        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
      }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={ this.state.defaultMenus }>
          {
            this.state.menus.map((item,index) => {
              return(
                <Menu.Item key={ index + 1 }>
                  <NavLink exact to={ item.href }>
                    <IconFont  type={ item.icon } />
                    <span className="nav-text">{ item.name }</span>
                  </NavLink>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Layout.Sider>
    )
  }
}


export default Sider;